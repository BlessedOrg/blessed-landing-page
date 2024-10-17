"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";


export const WhatsNews = () => {
  return (
    <div className="w-[842px] h-auto flex flex-col gap-6">
      
    
      <div className="flex items-start gap-4 p-6 bg-white rounded-[24px] border border-gray-300">
        <div className="w-[175px] h-[99px] bg-gray-200 rounded-[16px] overflow-hidden">
          <img
            src="/img/icons/News3.png"
            alt="Image3"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between w-[794px] h-[99px] gap-2">
          <p className="text-sm text-gray-500">Update</p>
          <p className="text-sm">
            <strong>Version 1.3: Gain deeper insights into your event performance with our new analytics dashboard.</strong>
          </p>
          <p className="text-sm text-gray-500">August 20, 2024</p>
        </div>
      </div>

    
      <div className="flex items-start gap-4 p-6 bg-white rounded-[24px] border border-gray-300">
        <div className="w-[175px] h-[99px] bg-gray-200 rounded-[16px] overflow-hidden">
          <img
            src="/img/icons/News2.png"
            alt="Image2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between w-[794px] h-[99px] gap-2">
          <p className="text-sm text-gray-500">Update</p>
          <p className="text-sm">
            <strong>Version 1.2: Enhanced API integration for smoother and faster event management</strong>
          </p>
          <p className="text-sm text-gray-500">September 10, 2024</p>
        </div>
      </div>

      
      <div className="flex items-start gap-4 p-6 bg-white rounded-[24px] border border-gray-300">
        <div className="w-[175px] h-[99px] bg-gray-200 rounded-[16px] overflow-hidden">
          <img
            src="/img/icons/News1.png"
            alt="Image1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between w-[794px] h-[99px] gap-2">
          <p className="text-sm text-gray-500">Update</p>
          <p className="text-sm">
            <strong>Version 1.5: Don't miss our upcoming events and announcements!</strong>
          </p>
          <p className="text-sm text-gray-500">October 1, 2024</p>
        </div>
      </div>

   
      <div className="mt-10 flex justify-center">
        <Button variant="outline" size="xl" className="rounded-[39px]">
          See more
        </Button>
      </div>
    </div>
  );
};
