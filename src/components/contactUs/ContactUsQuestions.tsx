"use client";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const ContactUsQuestions = () => {
  return (
    <div className="py-10 flex flex-col items-center gap-6 px-4 font-inter">
      <div className="text-center max-w-[850px] w-full">
        <h2 className="font-bold uppercase text-3xl md:text-6xl">
          Wondering about something? <br /> Check here!
        </h2>
        <p className="mt-2 text-lg">
          Want to know more? Connect with our team via{" "}
          <Link href={"https://t.me/blessedsupport"} className="underline">
            contact
          </Link>
          .
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="max-w-[850px] w-full mt-10 space-y-4 border-none overflow-hidden"
        // defaultValue="item-1"
      >
        <AccordionItem
          value="item-1"
          className="w-full"
        >
          <AccordionTrigger className="accordion-title w-full text-base font-semibold font-inter text-left">
            What is included in the pay as you go plan?
          </AccordionTrigger>
          <AccordionContent className="accordion-content w-full text-base text-black border-b-2 border-black pb-4">
            The pay as you go plan includes full access to our platform’s
            features with pricing based on usage. Ideal for flexible and smaller
            scale events.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-2"
          className="w-full"
        >
          <AccordionTrigger className="accordion-title w-full text-base font-semibold font-inter text-left">
            How do I get a quote for the commitment plan?
          </AccordionTrigger>
          <AccordionContent className="accordion-content w-full text-base text-black border-b-2 border-black pb-4">
            Simply fill out our contact form, and we’ll get back to you with a
            tailored solution that fits your current stage.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-3"
          className="w-full"
        >
          <AccordionTrigger className="accordion-title w-full text-base font-semibold font-inter text-left">
            Are there any hidden fees?
          </AccordionTrigger>
          <AccordionContent className="accordion-content w-full text-base text-black border-b-2 border-black pb-4">
            No, we dislike hidden fees as much as you do. Everything is
            usage-based, and we only charge for what we get charged for.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-4"
          className="w-full"
        >
          <AccordionTrigger className="accordion-title w-full text-base font-semibold font-inter text-left">
            Can I switch between plans?
          </AccordionTrigger>
          <AccordionContent className="accordion-content w-full text-base text-black border-b-2 border-black pb-4">
            Yes! For now, just use the contact form to request a switch.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-5"
          className="w-full"
        >
          <AccordionTrigger className="accordion-title w-full text-base font-semibold font-inter text-left">
            Can I switch between plans?
          </AccordionTrigger>
          <AccordionContent className="accordion-content w-full text-base text-black border-b-2 border-black pb-4">
            Yes! For now, just use the contact form to request a switch.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-6"
          className="w-full"
        >
          <AccordionTrigger className="accordion-title w-full text-base font-semibold font-inter text-left">
            Where can I find my API key?
          </AccordionTrigger>
          <AccordionContent className="accordion-content w-full text-base text-black border-b-2 border-black pb-4">
            Your API key is generated either through our no-code Builder
            interface or directly via the API.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-7"
          className="w-full"
        >
          <AccordionTrigger className="accordion-title w-full text-base font-semibold font-inter text-left">
            I have an issue, what should I do?
          </AccordionTrigger>
          <AccordionContent className="accordion-content w-full text-base text-black border-b-2 border-black pb-4">
            Reach out through the contact form, and we’ll resolve it quickly.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
