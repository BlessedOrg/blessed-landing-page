"use client";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import { AuthModal } from "@/components/authModal/AuthModal";
import { Bars } from "@/components/ui/bars";

export const PricingHeader = () => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: false });

  return (
    <header
      ref={headerRef}
      className="relative flex flex-col gap-8 items-center py-10 px-4 bg-cover bg-center w-full overflow-hidden max-w-[1440px]"
    >
      <div className="z-1 flex flex-col items-center gap-4">
        <h1 className="text-[107px] leading-[94px] uppercase font-bold text-center">
          Radically transparent and
          <br />
          flexible pricing plans
        </h1>
        <p className="font-regular text-center mb-12">
          Choose the plan that fits your needs. Try our Dev Environment for
          <br />
          free.
        </p>
      </div>

      <div className="relative w-full mt-5">
        <Bars
          leftBars={{ show: true }}
          rightBars={{ show: true }}
          isInView={isInView}
        />
        <div className="flex justify-center gap-8 items-start">
          <div className="flex flex-col items-start gap-4 p-8 w-[296px]  border-2 border-[#06F881] bg-[#FFF] rounded-[24px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.06)] z-10">
            <p className="text-lg font-bold text-left">Free until 2026</p>
            <p className="text-[34px] leading-[1] font-bold tracking-[-0.5px] text-left">
              $0
            </p>
            <p className="text-[16px] text-left">
              👋 We waived all fees for you. Perfect for small, mid or one-timer
              events. We'll rate limit though..
            </p>
            <div className="flex items-center">
              <img
                src="/img/icons/Check-Simple.svg"
                alt="Check icon"
                className="mr-2 w-6 h-6"
              />
              <p className="text-[16px] text-left">Safe for beginners</p>
            </div>
            <div className="flex items-center">
              <img
                src="/img/icons/Check-Simple.svg"
                alt="Check icon"
                className="mr-2 w-6 h-6"
              />
              <p className="text-[16px] text-left">Always updated</p>
            </div>
            <div className="flex items-center">
              <img
                src="/img/icons/Check-Simple.svg"
                alt="Check icon"
                className="mr-2 w-6 h-6"
              />
              <p className="text-[16px] text-left">Community support</p>
            </div>
            <AuthModal
              label="Start"
              authType="onboarding"
              className="w-[232px] h-[52px] rounded-[39px] mt-14"
            />
          </div>

          <div className="flex flex-col items-start gap-4 p-8 w-[296px] border-2 border-black bg-[#FFF] rounded-[24px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.06)] z-10">
            <p className="text-lg font-bold text-left">Commitment plan</p>
            <p className="text-[34px] leading-[1] font-bold tracking-[-0.5px] text-left">
              $69/mo*
            </p>
            <p className="text-[16px] text-left">
              Get in touch for tailored pricing. Best for large-scale and
              recurring events.
            </p>
            <p className="text-[16px] text-left">*Price until 2026.</p>
            <div className="flex items-center">
              <img
                src="/img/icons/Check-Simple.svg"
                alt="Check icon"
                className="mr-2 w-6 h-6"
              />
              <p className="text-[16px] text-left">White-glove service</p>
            </div>
            <Link href="/contact-us">
              <Button
                variant="outline"
                size="default"
                className="w-[232px] h-[52px] rounded-[39px] mt-14"
              >
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
