"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AuthModal } from "@/components/authModal/AuthModal";
import { Bars } from "@/components/ui/bars";

const pricingPlans = [
  {
    title: "Free until 2026",
    price: "$0",
    description: "👋 We waived all fees for you. Perfect for small, mid or one-timer events. We'll rate limit though..",
    features: ["Safe for beginners", "Always updated", "Community support"],
    action: {
      type: "modal",
      label: "Start",
      props: {
        authType: "onboarding",
        className: "w-full h-[52px] rounded-[39px] mt-6 md:mt-14"
      }
    },
    borderColor: "border-[#06F881]"
  },
  {
    title: "Commitment plan",
    price: "$69/mo*",
    description: "Get in touch for tailored pricing. Best for large-scale and recurring events.",
    subDescription: "*Price until 2026.",
    features: ["White-glove service"],
    action: {
      type: "link",
      label: "Contact us",
      props: {
        href: "/contact-us",
        className: "w-full h-[52px] rounded-[39px] mt-6 md:mt-14"
      }
    },
    borderColor: "border-black"
  }
];

const PricingPlan = ({ plan }) => (
  <div className={`flex flex-col items-start gap-4 p-6 md:p-8 w-full md:w-[296px] border-2 ${plan.borderColor} bg-[#FFF] rounded-[24px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.06)] z-10 mb-6 md:mb-0`}>
    <p className="text-lg font-bold text-left">{plan.title}</p>
    <p className="text-2xl md:text-[34px] leading-[1] font-bold tracking-[-0.5px] text-left">
      {plan.price}
    </p>
    <p className="text-sm md:text-[16px] text-left">{plan.description}</p>
    {plan.subDescription && <p className="text-sm md:text-[16px] text-left">{plan.subDescription}</p>}
    {plan.features.map((feature, index) => (
      <div key={index} className="flex items-center">
        <img
          src="/img/icons/Check-Simple.svg"
          alt="Check icon"
          className="mr-2 w-5 h-5 md:w-6 md:h-6"
        />
        <p className="text-sm md:text-[16px] text-left">{feature}</p>
      </div>
    ))}
    {plan.action.type === "modal" ? (
      <AuthModal label={plan.action.label} {...plan.action.props} />
    ) : (
      <Link href={plan.action.props.href}>
        <Button variant="outline" size="default" className={plan.action.props.className}>
          {plan.action.label}
        </Button>
      </Link>
    )}
  </div>
);

export const PricingHeader = () => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: false });

  return (
    <header
      ref={headerRef}
      className="relative flex flex-col gap-6 md:gap-8 items-center py-8 md:py-10 px-4 bg-cover bg-center w-full overflow-hidden max-w-[1440px]"
    >
      <div className="z-1 flex flex-col items-center gap-4">
        <h1 className="text-5xl md:text-8xl uppercase font-bold text-center">
          Radically transparent and
          <br className="hidden md:inline" />
          flexible pricing plans
        </h1>
        <p className="font-regular text-center text-sm md:text-base mb-6 md:mb-12">
          Choose the plan that fits your needs. Try our Dev Environment for
          <br className="hidden md:inline" />
          free.
        </p>
      </div>

      <div className="relative w-full mt-5">
        <div className="hidden md:block">
          <Bars
            leftBars={{ show: true }}
            rightBars={{ show: true }}
            isInView={isInView}
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 items-center md:items-start">
          {pricingPlans.map((plan, index) => (
            <PricingPlan key={index} plan={plan} />
          ))}
        </div>
      </div>
    </header>
  );
};