"use client";
import { Button } from "@/components/ui/button";

export const PartnersClients = () => {
  return (
    <div className="flex py-10 w-full max-w-[1280px] px-[80px] bg-[#EFEFEF]">
      <div className="flex flex-col justify-start">
        <h2 className="font-bold uppercase text-left text-3xl md:text-[48px] md:leading-[44px]">
          Partners and clients
        </h2>
        <p className="text-left">Notable clients and partners using Blessed.</p>
        <Button
          variant="default"
          size="default"
          className="rounded-[39px] self-start"
        >
          Want to become part of it?
        </Button>
      </div>

      <div className="w-[63px]"></div>

      <div
        className="flex flex-col"
        style={{
          width: "594px",
          height: "184px",
          padding: "20px 0px 20px 122.49px",
        }}
      >
        <div className="flex justify-between mb-16">
          <img src="/img/icons/Nike.svg" alt="Logo 1" className="h-[40px]" />
          <img src="/img/icons/Hush.svg" alt="Logo 2" className="h-[40px]" />
          <img src="/img/icons/Puma.svg" alt="Logo 3" className="h-[40px]" />
        </div>
        <div className="flex justify-between">
          <img src="/img/icons/Shoei.svg" alt="Logo 4" className="h-[40px]" />
          <img src="/img/icons/Marc.svg" alt="Logo 5" className="h-[40px]" />
          <img src="/img/icons/Supreme.svg" alt="Logo 6" className="h-[40px]" />
        </div>
      </div>
    </div>
  );
};
