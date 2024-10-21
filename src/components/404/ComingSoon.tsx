"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bars } from "@/components/ui/bars";

export const ComingSoon = () => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: false });

  return (
    <header
      ref={headerRef}
      className="relative flex flex-col gap-8 items-center py-10 px-4 bg-cover bg-center overflow-x-hidden max-w-[1440px] w-full mx-auto"
    >
      <div className="bg-white w-[624px] h-[509px] flex flex-col items-center justify-center  ">
        <div className="flex gap-6 mb-6">
          <Image
            src={"/img/icons/Broken-Heart.svg"}
            alt="ghost"
            width={200}
            height={200}
          />
        </div>

        <h1
          className="text-4xl md:text-7xl uppercase font-bold md:leading-[73px] text-center mb-4"
          style={{ color: "rgba(97, 87, 255, 1)" }}
        >
          Coming Soon!
        </h1>

        <div className="flex flex-row">
          <Link href="/">
            <Button
              variant="outline"
              size="default"
              className="bg-primary-500 hover:!bg-primary-600 rounded-[39px] text-black"
            >
              Go back home
            </Button>
          </Link>
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
