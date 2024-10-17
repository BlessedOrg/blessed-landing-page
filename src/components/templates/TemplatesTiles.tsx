"use client";
import { HeaderTiles } from "@/components/home/header/HeaderTiles";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Bars } from "@/components/ui/bars";

export const TemplatesTiles = () => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: false });

  return (
    <header
      ref={headerRef}
      className="relative flex flex-col gap-8 items-center py-10 px-4 bg-cover bg-center overflow-x-hidden overflow-y-hidden max-w-[1440px]"
    >
      <h1 className="text-[107px] leading-[94px] uppercase font-bold text-center">
        See how it works
      </h1>

      <HeaderTiles />

      <Bars leftBars={{ show: true }} rightBars={{ show: true }} isInView={isInView} />
      <Button variant="outline" size="xl" className="rounded-[39px]">
        Create your event
      </Button>
    </header>
  );
};
