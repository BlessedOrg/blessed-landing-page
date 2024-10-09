"use client";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useInView } from "framer-motion";

export const PricingHeader = () => {
  const barHeight = 75;
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: false });

  const leftBars = Array.from({ length: 3 }, (_, index) => {
    const top = index * (barHeight * 2) + barHeight;

    return (
      <div
        key={`left-${index}`}
        className="absolute w-[60%] bg-green-500 z-[-1]" 
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
        className="absolute w-[25%] bg-green-500 z-[-1]" 
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
    <header ref={headerRef} className="relative flex flex-col gap-8 items-center py-10 px-4 bg-cover bg-center overflow-x-hidden max-w-[1440px]">
  
      <div className="z-10 flex flex-col items-center">
        <h1 className="text-[107px] leading-[94px] uppercase font-bold text-center">
          Radically transparent and<br />flexible pricing plans
        </h1>
        <p className="font-regular text-xl text-center mb-12">
        Choose the plan that fits your needs. Try our Dev Environment for free.
        </p>
      </div>

    
      <div className="relative w-full mt-16">
        {leftBars}
        {rightBars}

        
        <div className="flex justify-center gap-8 mt-8">

<div className="flex flex-col items-start gap-4 p-8 w-[296px] h-[520px] border-2 border-[#06F881] bg-[#FFF] rounded-[24px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.06)] z-10">
  <p className="text-lg font-bold text-left">Pay as you go</p>
  <p className="text-[34px] leading-[1] font-bold tracking-[-0.5px] text-left">$12/mo</p> 
  <p className="text-[16px] text-left">Only pay for what you use. Perfect for small events and variable needs.</p>
  <p className="text-[16px] text-left">Transparent pricing</p>
  <p className="text-[16px] text-left">No hidden fees</p>
  <p className="text-[16px] text-left">Ideal for super teams</p>
  <p className="text-[16px] text-left">Regular updates</p>
  <p className="text-[16px] text-left">Premium support</p>
  <Button variant="green" size="default" className="rounded-[39px]"> 
    Started for free 
  </Button>
</div>

<div className="flex flex-col items-start gap-4 p-8 w-[296px] h-[520px] border-2 border-black bg-[#FFF] rounded-[24px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.06)] z-10">
  <p className="text-lg font-bold text-left">Commitment plan</p>
  <p className="text-[34px] leading-[1] font-bold tracking-[-0.5px] text-left">$80/mo</p> 
  <p className="text-[16px] text-left">Get in touch for tailored pricing. Best for large-scale and recurring events.</p>
  <p className="text-[16px] text-left">Custom solutions</p>
  <p className="text-[16px] text-left">Dedicated support</p>
  <p className="text-[16px] text-left">Scalable pricing</p>
  <p className="text-[16px] text-left">Regular updates</p>
  <p className="text-[16px] text-left">Premium support</p>
  <Button variant="outline" size="default" className="rounded-[39px]">
    Contact us 
  </Button>
</div>
</div>

      </div>
    </header>
  );
};

