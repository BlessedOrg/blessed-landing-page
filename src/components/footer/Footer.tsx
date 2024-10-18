"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="w-full bg-[rgba(239,239,239,1)]">
      <div className="flex flex-col justify-center items-center px-4 w-full max-w-[1280px] mx-auto gap-8 sm:gap-16 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row justify-between items-start w-full border-t-2 border-black pt-8 sm:pt-10 gap-8 sm:gap-0">
          <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-16 lg:gap-64 w-full">
            <Link href="https://blessed.fan" className="mb-4 sm:mb-0">
              <img src="/logo.svg" alt="Logo" className="h-8 sm:h-auto" />
            </Link>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 lg:gap-40">
              <div className="flex flex-col gap-4">
                <span className="font-bold">Product</span>
                <span>
                  <Link href="/use-cases">Use cases</Link>
                </span>
                {/* <span>
                  <Link href="https://docs.blessed.fan/">Developer API</Link>
                </span> */}
                <span>
                  <Link href="https://docs.blessed.fan/">Docs</Link>
                </span>
                <span>
                  <Link href="/pricing">Pricing</Link>
                </span>
              </div>

              <div className="flex flex-col gap-4">
                <span className="font-bold">Company</span>
                <span>
                  <Link href="/about-us">About us</Link>
                </span>
                <span>
                  <Link href="/contact-us">Contact</Link>
                </span>
                <span>
                  <Link href="/terms-and-conditions">Terms & conditions</Link>
                </span>
                <span>
                  <Link href="/privacy-policy">Privacy policy</Link>
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-[4px] mt-4 sm:mt-0">
            <Button
              variant="default"
              size="icon"
              className="bg-primary-500 hover:!bg-primary-600 rounded-[39px] text-black"
            >
              De
            </Button>
            <span className="flex items-center justify-center text-lg leading-none">
              /
            </span>
            <Button
              variant="green"
              size="icon"
              className="rounded-[39px] text-black"
            >
              En
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center w-full gap-6 sm:gap-0">
          <div className="flex items-center gap-4 text-sm sm:text-base">
            <span className="font-medium">© 2077 Blessed</span>
            <span className="font-medium">
              <Link href="/imprint">Imprint</Link>
            </span>
          </div>

          <div className="order-first sm:order-none mb-4 sm:mb-0">
            <span
              className="uppercase font-bold text-xl sm:text-2xl lg:text-[32px] leading-tight sm:leading-[44px] text-center block sm:inline"
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
            {["twitter-x", "linkedin", "telegram-black", "Github"].map(
              (icon, index) => {
                const urls = [
                  "https://x.com/blessedfans",
                  "https://www.linkedin.com/company/blessedfan/",
                  "https://t.me/blessedsupport",
                  "https://github.com/BlessedOrg/",
                ];

                return (
                  <a
                    key={icon}
                    href={urls[index]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex w-8 h-8 sm:w-[36px] sm:h-[36px] p-2 sm:p-[9px] items-start gap-[10px] bg-white rounded-full">
                      <img
                        src={`/img/icons/${icon}.svg`}
                        alt={icon}
                        className="w-full h-full"
                      />
                    </div>
                  </a>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
