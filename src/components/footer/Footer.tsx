"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="w-full bg-[rgba(239,239,239,1)]">
      <div className="flex flex-col justify-center items-center px-4 w-full max-w-[1280px] min-h-[212px] mx-auto gap-[64px] py-10">
        <div className="flex justify-between items-start w-full border-t-2 border-black pt-10">
          <div className="flex items-start gap-64 w-full">
        
          <Link href="https://blessed.fan">
  <img src="/logo.svg" alt="Logo" />
</Link>

   
            <div className="flex gap-40">
            <div className="flex flex-col gap-4">
  <span className="font-bold">Product</span>
  <span>
    <Link href="/">Overview</Link>
  </span>
  <span>
    <Link href="/whats_new">What’s new</Link>
  </span>
  <span>
    <Link href="/guides&tutorials">Guides & tutorials</Link>
  </span>
  <span>
    <Link href={"https://docs.blessed.fan/"}>Developer API</Link>
  </span>
  <span>
    <Link href={"https://docs.blessed.fan/"} >Docs</Link>
  </span>
  <span>
    <Link href="/pricing">Pricing</Link>
  </span>
</div>


             
  <div className="flex flex-col gap-4">
  <span className="font-bold">Company</span>
  <span>
    <Link href="/about_us">About us</Link> 
  </span>
  <span>
    <Link href="/contact_us">Contact</Link>
  </span>
  <span>
    <Link href="/media_kit">Media kit</Link>
  </span>
  <span>
    <Link href="/terms&conditions">Terms & conditions</Link>
  </span>
  <span>
    <Link href="/privacy_policy">Privacy policy</Link>
  </span>
</div>
            </div>
          </div>

       
 <div className="flex flex-row gap-[4px]">
  <Button variant="default" size="icon" className="bg-primary-500 hover:!bg-primary-600 rounded-[39px] text-black">
    De
  </Button>
  <span className="flex items-center justify-center text-lg leading-none">/</span>
  <Button variant="green" size="icon" className="rounded-[39px] text-black">
    En
  </Button>
</div>


        </div>

       
        <div className="flex justify-between items-center w-full pt-10">
    
          <div className="flex items-center gap-4">
            <span className="font-medium">© 2077 Blessed</span>
            <span className="font-medium"> <Link href="/imprint">Imprint</Link> </span>
          </div>


          <div>
          <span
              className="uppercase font-bold text-[32px] leading-[44px] text-center"
              style={{
                color: "#1D1D1B",
                fontFeatureSettings: "'liga' off, 'clig' off",
                fontFamily: '"TT Bluescreens"',
                fontStyle: "normal",
                fontWeight: 700,
              }}
            >
              radical transparency + love 🙏
            </span>
          </div>

      
          <div className="flex gap-4">
  {["twitter-x", "linkedin", "telegram-black", "Github"].map((icon, index) => {
    const urls = [
      "https://x.com/blessedfans",
      "https://www.linkedin.com/company/blessedfan/",
      "https://t.me/blessedsupport", 
      "https://github.com/BlessedOrg/",
    ];

    return (
      <a key={icon} href={urls[index]} target="_blank" rel="noopener noreferrer">
        <div className="flex w-[36px] h-[36px] p-[9px] items-start gap-[10px] bg-white rounded-full">
          <img src={`/img/icons/${icon}.svg`} alt={icon} />
        </div>
      </a>
    );
  })}
</div>


        </div>
      </div>
    </div>
  );
};