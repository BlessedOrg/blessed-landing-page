"use client";
import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bars } from "@/components/ui/bars";

export const Header404 = () => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: false });

  return (
    <header
      ref={headerRef}
      className="relative flex flex-col gap-8 items-center py-10 px-4 bg-cover bg-center overflow-x-hidden w-full mx-auto"
    >
      <div className="relative bg-white w-[624px] h-[509px] flex flex-col items-center justify-center  ">
        <div className="flex gap-6 mb-6">
          <Image
            src={"/img/icons/pacman.svg"}
            alt="pacman"
            width={100}
            height={100}
            className="absolute left-[46px] top-[10%] transform -translate-y-[50%]"
          />
          <Image
            src={"/img/icons/ghost.svg"}
            alt="ghost"
            width={200}
            height={200}
            className="z-10"
          />
          <Image
            src={"/img/icons/Broken-Heart.png"}
            alt="heart"
            width={100}
            height={100}
            className="absolute right-[106px] top-[10%] transform -translate-y-[50%]"
          />
        </div>

        <h1
          className="text-4xl md:text-7xl uppercase font-bold md:leading-[73px] text-center mb-4"
          style={{ color: "rgba(97, 87, 255, 1)" }}
        >
          Page not found...
        </h1>
        <p
          className="font-bold text-xl text-center mb-12"
          style={{ color: "rgba(97, 87, 255, 1)" }}
        >
          The page you're looking for isn't available. Try to search again or
          use the go back button below.
        </p>
        <div className="flex flex-row">
          <Button
            variant="outline"
            size="default"
            className="bg-primary-500 hover:!bg-primary-600 rounded-[39px] text-black"
          >
            Go back home
          </Button>
          <Button
            variant="default"
            size="default"
            className="bg-primary-500 hover:!bg-primary-600 rounded-[39px] text-black"
          >
            Contact us
          </Button>
        </div>
      </div>
      <Bars
        leftBars={{ show: true }}
        rightBars={{ show: true }}
        color="bg-black"
        isInView={isInView}
      />
    </header>
  );
};
