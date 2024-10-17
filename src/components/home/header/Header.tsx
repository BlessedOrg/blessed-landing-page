"use client";
import { HeaderTiles } from "@/components/home/header/HeaderTiles";
import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { AuthModal } from "@/components/authModal/AuthModal";
import { Bars } from "@/components/ui/bars";

export const Header = () => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: false });

  return (
    <header
      ref={headerRef}
      className="relative flex flex-col gap-8 items-center py-10 px-4 bg-cover bg-center overflow-x-hidden max-w-[1440px]"
    >
      <h1 className="text-[107px] leading-[94px] uppercase font-bold text-center">
        Build, manage, and distribute <br /> <span className="text-[#FFA500]">Tickets</span> quickly and fairly
      </h1>
      <p className="font-bold text-xl text-center mb-12">Start quickly in just three steps with easy integrations…</p>
      <HeaderTiles />
      <Image
        src={"/img/icons/pacman.svg"}
        alt="pacman"
        width={100}
        height={100}
        className="absolute left-[1%] bottom-[0px] md:top-[30%]"
      />

      <Bars barHeight={75} isInView={isInView} leftBars={{ show: true }} rightBars={{ show: true }} />
      <AuthModal label="Get started for free" authType="onboarding" />
    </header>
  );
};
