"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const QuoteCard = () => {
    return (
      <div className="flex flex-col md:flex-row gap-[24px]">
        
        <div className="flex flex-col h-[279px] w-[624.5px] p-[24px] justify-center items-center gap-[8px] self-stretch 
          border-[2px] rounded-[24px] border-[#1D1D1B]"
        >
          <div className="text-4xl font-bold" >Book a free meeting</div>
          <div className="text-xl font-regular" >Schedule a chat with our team.</div>
          <Button variant="outline" size="default" className="rounded-[39px]">
            Book on Calendly
          </Button>
        </div>
  
     
        <div className="flex flex-col h-[279px] w-[624.5px] p-[24px] justify-center items-center gap-[8px] self-stretch 
          border-[2px] rounded-[24px] border-[#1D1D1B]"
        >
          <div className="text-4xl font-bold">Chat with us</div>
          <div className="text-xl font-regular" >Join us on <Link href={"/"} className="underline">Telegram</Link> or connect with our team via contact.</div>
          <Button variant="outline" size="default" className="rounded-[39px]">
            Contact us
          </Button>
        </div>
      </div>
    );
  };
  