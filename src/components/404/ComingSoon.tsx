"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";

export const ComingSoon = () => {
  const barHeight = 75;
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: false });

  const leftBars = Array.from({ length: 3 }, (_, index) => {
    const top = index * (barHeight * 2) + barHeight;

    return (
      <div
        key={`left-${index}`}
        className="absolute w-[60%] bg-black z-[-1]" 
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
        className="absolute w-[35%] bg-black z-[-1]"
        style={{
          top: `${top}px`,
          right: `${isInView ? 0 : "-100%"}`,
          height: `${barHeight}px`,
          transition: "right 1.5s",
        }}
      ></div>
    );
  });

  return (
    <header ref={headerRef} className="relative flex flex-col gap-8 items-center py-10 px-4 bg-cover bg-center overflow-x-hidden max-w-[1440px] w-full mx-auto">
      <div className="relative bg-white w-[624px] h-[509px] flex flex-col items-center justify-center  ">
        <div className="flex gap-6 mb-6">


  <Image
    src={"/img/icons/Broken-Heart.svg"}
    alt="ghost"
    width={200}
    height={200}
    className="z-10"
  />

  
        </div>

        <h1 className="text-4xl md:text-7xl uppercase font-bold md:leading-[73px] text-center mb-4" style={{ color: 'rgba(97, 87, 255, 1)' }}>
        Coming Soon!
        </h1>
      
        <div className="flex flex-row" >
        <Link href="https://blessed.fan/">
        <Button variant="outline" size="default" className="bg-primary-500 hover:!bg-primary-600 rounded-[39px] text-black">
          Go back home
        </Button>
        </Link>
        <Button variant="default" size="default" className="bg-primary-500 hover:!bg-primary-600 rounded-[39px] text-black">
          Contact us
        </Button>
        </div>
      </div>

    
      {leftBars}
      {rightBars}
    </header>
  );
};
