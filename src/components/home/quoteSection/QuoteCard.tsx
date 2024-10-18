"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const QuoteCard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-[24px] pb-20">
      <div
        className="flex flex-col h-[279px] w-[624.5px] p-[24px] justify-center items-center gap-4 self-stretch
        border-[2px] rounded-[24px] border-[#1D1D1B]"
      >
        <div className="text-4xl font-semibold">Book a free meeting</div>
        <div className="text-xl font-regular">
          Schedule a chat with our team.
        </div>
        <Link href="https://calendly.com/viet-blessed" target="_blank">
          <Button variant="outline" size="default" className="rounded-[39px]">
            Book on Calendly
          </Button>
        </Link>
      </div>

      <div
        className="flex flex-col h-[279px] w-[624.5px] p-[24px] justify-center items-center gap-4 self-stretch
        border-[2px] rounded-[24px] border-[#1D1D1B]"
      >
        <div className="text-4xl font-semibold">Chat with us</div>
        <div className="text-xl font-regular">
          Join us on{" "}
          <Link
            href="https://t.me/blessedsupport"
            target="_blank"
            className="underline"
          >
            Telegram
          </Link>{" "}
          or connect with our team via contact.
        </div>
        <Link href="/contact-us">
          <Button variant="outline" size="default" className="rounded-[39px]">
            Contact us
          </Button>
        </Link>
      </div>
    </div>
  );
};
