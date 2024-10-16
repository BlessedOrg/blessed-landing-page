"use client";
import Image from "next/image";
import Link from "next/link";
import { Suspense, useState } from "react";
import { MobileNav } from "@/components/nav/MobileNav";
import { AuthModal } from "@/components/authModal/AuthModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { useUserContext } from "@/store/UserContext";
import { Button } from "@/components/ui/button";
import { dashboardUrl } from "@/variables/varaibles";

export const Navigation = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const onNavToggle = () => {
    setIsMobileNavOpen((prev) => !prev);
  };
  const { isLoggedIn, email } = useUserContext();

  return (
    <nav className="py-5 lg:py-8 px-4 lg:px-6 flex justify-between w-full">
      <Link href="https://blessed.fan">
        <Image
          src={"/logo.svg"}
          alt="logo blessed"
          height={36}
          width={100}
          className="w-[100px] h-auto"
        />
      </Link>
      <div className="flex gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 hover:bg-[#EFEFEF] py-3 px-4 rounded-[99px] outline-none">
            Product <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Coming soon</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-2 hover:bg-[#EFEFEF] py-3 px-4 rounded-[99px] outline-none">
            Resources <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Coming soon</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link
          href={"/pricing"}
          className="hover:bg-[#EFEFEF] py-3 px-4 rounded-[99px] outline-none"
        >
          Pricing
        </Link>
      </div>

      <div className="lg:flex gap-4 items-center hidden ">
        <Link
          href={"https://docs.blessed.fan/"}
          className="text-md hover:bg-[#EFEFEF] py-3 px-4 rounded-[99px] outline-none"
        >
          Docs
        </Link>

        {!isLoggedIn && (
          <Suspense>
            <AuthModal authType="login" />
            <AuthModal authType="onboarding" />
          </Suspense>
        )}
        {isLoggedIn && (
          <Button variant="green" className="rounded-full " size="lg" asChild>
            <Link href={`${dashboardUrl}`}>Dashboard</Link>
          </Button>
        )}
      </div>

      <button onClick={onNavToggle} className="lg:hidden text-2xl">
        {isMobileNavOpen ? <X /> : <Menu />}
      </button>
      <MobileNav isOpen={isMobileNavOpen} />
    </nav>
  );
};
