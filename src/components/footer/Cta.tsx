"use client";
import Link from "next/link";
import { AuthModal } from "@/components/authModal/AuthModal";

export const Cta = () => {
  return <div className="w-full bg-[rgba(239,239,239,1)]">
    <div className="flex flex-col gap-8 justify-center py-10 items-left px-4 w-full max-w-[1280px] min-h-[212px]  mx-auto">
      <div className="flex flex-col gap-6 items-center justify-center w-full mt-10">
        <div className="flex flex-col gap-6 md:flex-row justify-between items-center w-full">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold uppercase text-[36px] md:text-[96px] leading-[88px] text-left">
              How you manage your <span className="text-[#FFA500]">Tickets</span> matters
            </h1>
            <p className="text-left">Join now and start building amazing experiences. Or explore <Link href={"https://docs.blessed.fan/"} className="underline">our docs</Link>.</p>
          </div>
          <AuthModal label="Try Blessed today" authType="onboarding" />
        </div>
      </div>
    </div>
  </div>;
};