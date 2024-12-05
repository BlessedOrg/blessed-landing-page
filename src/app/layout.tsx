import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { RootProvider } from "@/providers/RootProvider";
import localFont from "next/font/local";
import { Web3Provider } from "@/providers/web3/Web3Provider";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Blessed ",
    default: "Blessed.fan"
  },
  openGraph: {
    images: [`/metadata/og-image.svg`]
  },
  twitter: {
    images: [`/metadata/og-image.svg`]
  }
};

const ttBluescreens = localFont({
  src: "../../public/fonts/TT_Bluescreens_Bold.woff",
  variable: "--font-tt-bluescreens",
  display: "swap"
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const cookies = headers().get("cookie");
  return (
    <html lang="en" className={`${ttBluescreens.variable}`}>
    <body className={inter.className}>
    <RootProvider>
      <Web3Provider cookies={cookies}>
        <main className="flex flex-col items-center w-full">{children}</main>
      </Web3Provider>
    </RootProvider>
    </body>
    </html>
  );
}
