import { Button } from "flowbite-react";
import Link from "next/link";

export const WhatsNewCard = () => {
    return (
      <div className="flex flex-col md:flex-row gap-[24px]">
        
        <div className="flex flex-col h-[279px] w-[624.5px] p-[24px] justify-center items-center gap-[8px] self-stretch 
          border-[2px] rounded-[24px] border-[#1D1D1B]"
        >
          <div className="text-4xl font-bold" >Newsletter</div>
          <div className="text-xl font-regular" >Sign up for our newsletter to get the latest updates.</div>
          <Button pill className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white">
          Subscribe free
            </Button>
        </div>
  
     
        <div className="flex flex-col h-[279px] w-[624.5px] p-[24px] justify-center items-center gap-[8px] self-stretch 
          border-[2px] rounded-[24px] border-[#1D1D1B]"
        >
          <div className="text-4xl font-bold">Missing a desired feature?</div>
          <div className="text-xl font-regular" >We’re listening. Tell us what you need to improve your experience.</div>
          <Button pill className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white">
              Contact us
            </Button>
        </div>
      </div>
    );
  };
  