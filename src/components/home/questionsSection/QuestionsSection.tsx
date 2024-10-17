"use client";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const QuestionsSection = () => {
  return (
    <div className="py-10 flex flex-col items-center gap-6 px-4 font-inter">
      <div className="text-center max-w-[850px] w-full">
        <h2 className="font-bold uppercase text-3xl md:text-6xl">
          Questions? Check here!
        </h2>
        <p className="mt-2 text-lg">
          Want to know more? Connect with our team via{" "}
          <Link href={"/"} className="underline">
            contact
          </Link>
          .
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="max-w-[850px] w-full mt-10 space-y-4 border-none overflow-hidden"
        defaultValue="item-1"
        style={{ flex: "1 0 auto", minWidth: "850px" }} // Минимальная ширина
      >
        <AccordionItem value="item-1" className="w-full" style={{ flex: "1 0 auto", minWidth: "850px" }}>
          <AccordionTrigger className="accordion-title w-full text-base font-semibold font-inter text-left">
            How does Blessed ensure the authenticity of entries?
          </AccordionTrigger>
          <AccordionContent className="accordion-content w-full text-base text-black border-b-2 border-black pb-4">
            Each entry is secured using advanced blockchain technology, ensuring tamper-proof and verifiable transactions. This guarantees that entries cannot be duplicated or altered.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="w-full" style={{ flex: "1 0 auto", minWidth: "850px" }}>
          <AccordionTrigger className="accordion-title w-full text-base font-semibold font-inter text-left">
            How can I integrate Blessed with my existing systems?
          </AccordionTrigger>
          <AccordionContent className="accordion-content w-full text-base text-black border-b-2 border-black pb-4">
            Blessed offers easy integration via API, allowing seamless connections with your current systems for event management and tracking.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="w-full" style={{ flex: "1 0 auto", minWidth: "850px" }}>
          <AccordionTrigger className="accordion-title w-full text-base font-semibold font-inter text-left">
            What kind of customization options are available for event organizers?
          </AccordionTrigger>
          <AccordionContent className="accordion-content w-full text-base text-black border-b-2 border-black pb-4">
            Event organizers can customize themes, branding, and engagement features to fit their event's unique needs and audience.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="w-full" style={{ flex: "1 0 auto", minWidth: "850px" }}>
          <AccordionTrigger className="accordion-title w-full text-base font-semibold font-inter text-left">
            Can I track attendee engagement and loyalty?
          </AccordionTrigger>
          <AccordionContent className="accordion-content w-full text-base text-black border-b-2 border-black pb-4">
            Yes, Blessed provides analytics tools to track attendee participation, engagement, and overall loyalty, helping you optimize future events.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
