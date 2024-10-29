"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MobileNav } from "@/components/nav/MobileNav";
import { AuthModal } from "@/components/authModal/AuthModal";
import { Menu, X } from "lucide-react";
import { useUserContext } from "@/store/UserContext";
import { Button } from "@/components/ui/button";
import { dashboardUrl } from "@/variables/varaibles";
import { NavMenu } from "@/components/nav/NavMenu";

export const Navigation = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const onNavToggle = () => {
    setIsMobileNavOpen((prev) => !prev);
  };
  const { isLoggedIn, email } = useUserContext();

  return (
    <nav className="py-5 lg:py-8 px-4 lg:px-6 grid grid-cols-2 lg:grid-cols-3 w-full sticky top-0 lg:static bg-white z-50">
      <Link href="/">
        <Image
          src={"/logo.svg"}
          alt="logo blessed"
          height={36}
          width={100}
          className="w-[100px] h-auto"
        />
      </Link>
      <div className="lg:flex gap-4 justify-center rounded-[6.2rem] hidden">
        <NavMenu />
      </div>

      <div className="lg:flex gap-4 items-center hidden justify-end">
        <Link
          href={"https://docs.blessed.fan/"}
          className="text-md hover:bg-[#EFEFEF] py-3 px-4 rounded-[6.2rem] outline-none"
        >
          Docs
        </Link>

        {!isLoggedIn && <AuthModal authType="onboarding" />}

        {isLoggedIn && (
          <Button variant="green" className="rounded-full " size="lg" asChild>
            <Link href={`${dashboardUrl}`}>Dashboard</Link>
          </Button>
        )}
      </div>

      <button
        onClick={onNavToggle}
        className="lg:hidden text-2xl justify-self-end"
      >
        {isMobileNavOpen ? <X /> : <Menu />}
      </button>
      <MobileNav isOpen={isMobileNavOpen} />
    </nav>
  );
};
