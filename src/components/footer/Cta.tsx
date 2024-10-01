"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { dashboardUrl } from "@/variables/varaibles";



export const Cta = () => {
  return <div className="w-full bg-[rgba(239,239,239,1)]">
<div className="flex flex-col gap-8 justify-center py-10 items-center px-4 w-full max-w-[1280px] min-h-[212px]  mx-auto">

    <div className="flex flex-col gap-6 items-center justify-center w-full max-w-[1039px] min-h-[212px] mt-10">
    
        <div className="flex flex-col gap-6 md:flex-row justify-between items-center">
          <div className="flex flex-col gap-4">
            
          <h2 className="font-bold uppercase text-[96px] leading-[88px] md:text-6xl text-left">
  How you manage your <span className="text-[#FFA500]">Tickets</span> matters
            </h2>

          
            <p className="text-left">Join now and start building amazing experiences. Or explore <Link href={"/"} className="underline">our docs</Link>.</p>
          </div>
         
           <Button variant="green" className="rounded-full" size="lg" asChild>
            <Link href={`${dashboardUrl}`}>Try Blessed today</Link>
          </Button>
      </div>

      </div>


    </div>
  </div>;
};
