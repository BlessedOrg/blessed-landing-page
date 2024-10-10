"use client";
import { HeaderTiles } from "@/components/home/header/HeaderTiles";
import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

export const TemplatesTiles = () => {
  const barHeight = 75;
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: false });

  const leftBars = Array.from({ length: 3 }, (_, index) => {
    const top = index * (barHeight * 2) + barHeight;

    return (
      <div
        key={`left-${index}`}
        className={`absolute w-[60%] bg-green-500 z-[-1]`}
        style={{
          top: `${top}px`,
          left: `${isInView ? 0 : "-100%"}`,
          height: `${barHeight}px`,
          transition: "left 1.5s",
        }}
      ></div>
    );
  });

  const rightBars = Array.from({ length: 4 }, (_, index) => {
    const top = index * (barHeight * 2);

    return (
      <div
        key={`right-${index}`}
        className={`absolute w-[25%] bg-green-500 z-[-1]`}
        style={{
          top: `${top}px`,
          height: `${barHeight}px`,
          right: `${isInView ? 0 : "-100%"}`,
          transition: "right 1.5s",
        }}
      ></div>
    );
  });

  return (
    <header
      ref={headerRef}
      className="relative flex flex-col gap-8 items-center py-10 px-4 bg-cover bg-center overflow-x-hidden overflow-y-hidden max-w-[1440px]"
    >
      <h1 className="text-[107px] leading-[94px] uppercase font-bold text-center">
      See how it works
      </h1>
    
      <HeaderTiles />                                                                                                                    

      {leftBars}                                         
      {rightBars}
      <Button variant="outline" size="xl" className="rounded-[39px]">
       Create your event
      </Button>
    </header>
  );
};
