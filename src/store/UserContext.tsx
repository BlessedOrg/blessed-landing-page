"use client";
import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import useSWR from "swr";
import { fetcherWithToken } from "../requests/requests";
import { apiUrl } from "@/variables/varaibles";

interface IProps {
  children: ReactNode;
}
interface UserHook {
  walletAddress: string | null;
  email: string | null;
  isLoading: boolean;
  id: string | null;
  mutate: () => Promise<any>;
  isLoggedIn: boolean;
  ApiTokens: { id: string; vaultKey: string; createdAt: string; revoked: boolean; appId: string }[];
}
const defaultState = {
  walletAddress: null,
  isLoading: false,
  email: null,
  id: null,
  isLoggedIn: false,
  mutate: async () => {}
} as UserHook;

const UserContext = createContext<UserHook | undefined>(undefined);

const UserContextProvider = ({ children }: IProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(defaultState);

  const { data, mutate, isLoading } = useSWR(`${apiUrl}/private/developers/me`, fetcherWithToken);

  useEffect(() => {
    if (!data?.error && data?.id) {
      setUserData(data);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [data]);

  if (!isLoggedIn) {
    return (
      <UserContext.Provider
        value={{
          ...defaultState,
          isLoading,
          isLoggedIn
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }

  return (
    <UserContext.Provider
      value={{
        ...userData,
        mutate,
        isLoading,
        isLoggedIn
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used inside UserContextProvider");
  }
  return context;
};

export { UserContextProvider, useUserContext };
