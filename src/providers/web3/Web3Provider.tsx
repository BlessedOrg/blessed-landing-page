"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createAppKit } from "@reown/appkit/react";
import React, { type ReactNode } from "react";
import { type Config, cookieToInitialState, WagmiProvider } from "wagmi";
import { networks, projectId, wagmiAdapter } from "@/providers/web3/config";
import { createSIWEConfig, formatMessage, getAddressFromMessage, getChainIdFromMessage, SIWECreateMessageArgs, SIWESession, SIWEVerifyMessageArgs, verifySignature } from "@reown/appkit-siwe";
import { uuidv4 } from "@walletconnect/utils";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import { apiUrl } from "@/variables/varaibles";
import { fetcherWithToken } from "@/requests/requests";
import { mutate } from "swr";

const queryClient = new QueryClient();
async function getUserSession(token) {
  return await fetcherWithToken(`${apiUrl}/private/developers/session`, !!token ? {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  } : {});
}

async function loginWithWallet(data) {
  return await fetcherWithToken(`${apiUrl}/private/developers/loginWithWallet`, {
    method: "POST",
    body: JSON.stringify(data)
  });
}
const siweConfig = createSIWEConfig({
  getMessageParams: async () => ({
    domain: typeof window !== "undefined" ? window.location.host : "",
    uri: typeof window !== "undefined" ? window.location.origin : "",
    chains: [networks.map(i => i.id)],
    statement: "Please sign with your account"
  }),
  createMessage({ address, ...args }: SIWECreateMessageArgs) {
    setCookie("chainId", args.chainId);
    return formatMessage(args, address);
  },
  getNonce() {
    const nonce = uuidv4();
    return Promise.resolve(nonce);
  },
  getSession: async () => {
    const token = getCookie("accessToken");
    const session = (await getUserSession(token)) as SIWESession;
    if (!session?.address) {
      return null;
    }

    return { address: session.address, chainId: +getCookie("chainId") || 1 };
  },
  verifyMessage: async ({ message, signature }: SIWEVerifyMessageArgs) => {
    try {
      const address = getAddressFromMessage(message);
      const chainId = getChainIdFromMessage(message);
      const isValid = await verifySignature({
        address,
        message,
        signature,
        chainId,
        projectId: projectId!
      });

      if (isValid) {
        const res = await loginWithWallet({
          signature,
          message,
          chainId,
          address
        });
        if (res?.accessToken) {
          setCookie("accessToken", res.accessToken);
        }
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  signOut() {
    deleteCookie("accessToken");
    return Promise.resolve(true);
  },
  onSignIn() {
    window?.location?.reload();
    mutate(`${apiUrl}/private/developers/me`);
  },
  signOutOnDisconnect: true,
  signOutOnNetworkChange: false,
  signOutOnAccountChange: true
});

if (!projectId) {
  throw new Error("Project ID is not defined");
}

// Set up metadata
const metadata = {
  name: "Blessed.fan",
  description: "",
  url: "https://blessed.fan",
  icons: ["/img/logo-card.png"]
};

const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks,
  defaultNetwork: networks[0],
  metadata: metadata,
  features: {
    email: false,
    socials: false
  },
  siweConfig,
  enableCoinbase: false,
  enableWalletConnect: true,
  themeMode: "light"
});

export function Web3Provider({ children, cookies }: { children: ReactNode; cookies: string | null }) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies);

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}

