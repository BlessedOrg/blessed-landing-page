"use client";
import { Button } from "@/components/ui/button";

export const WhatsNewCard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-[24px]">

      <div className="flex flex-col h-[279px] w-full max-w-[39rem] p-[24px] justify-center items-center gap-[8px] self-stretch
          border-[2px] rounded-[24px] border-[#1D1D1B]"
      >
        <div className="text-4xl font-bold">Newsletter</div>
        <div className="text-xl font-regular">Sign up for our newsletter to get the latest updates.</div>
        <Button variant="outline" size="default" className="rounded-[39px] text-black">
          Subscribe free
        </Button>
      </div>


      <div className="flex flex-col h-[279px] w-full max-w-[39rem] p-[24px] justify-center items-center gap-[8px] self-stretch
          border-[2px] rounded-[24px] border-[#1D1D1B]"
      >
        <div className="text-4xl font-bold">Missing a desired feature?</div>
        <div className="text-xl font-regular">We’re listening. Tell us what you need to improve your experience.</div>
        <Button variant="outline" size="default" className="rounded-[39px]">
          Contact us
        </Button>
      </div>
    </div>
  );
};
  