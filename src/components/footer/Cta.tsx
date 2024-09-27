import { Button } from "flowbite-react";
import Link from "next/link";



export const Cta = () => {
  return <div className="w-full bg-[rgba(239,239,239,1)]">
<div className="flex flex-col gap-8 justify-center py-10 items-center px-4 w-full max-w-[1280px] min-h-[212px]  mx-auto">

    <div className="flex flex-col gap-6 items-center justify-center w-full max-w-[1039px] min-h-[212px] mt-10">
    
        <div className="flex flex-col gap-6 md:flex-row justify-between items-center">
          <div className="flex flex-col gap-4">
            
            <h2 className="font-bold uppercase text-3xl md:text-6xl text-left">How you manage your <span className="text-[#FFA500]">Tickets</span> matters</h2>
          
            <p className="text-left">Join now and start building amazing experiences. Or explore <Link href={"/"} className="underline">our docs</Link>.</p>
          </div>
            <Button pill className="text-black bg-primary-500 hover:!bg-primary-600 !font-bold w-[259px] h-[56px] flex items-center justify-center">View use cases</Button>
      </div>

      </div>


    </div>
  </div>;
};
