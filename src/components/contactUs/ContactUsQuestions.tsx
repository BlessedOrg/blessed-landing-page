"use client";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const ContactUsQuestions = () => {
  return (
    <div className="py-10 flex flex-col gap-6 px-4">
      <div>
        <h2 className="font-bold uppercase text-3xl md:text-6xl text-center">
          Wondering about something? <br /> Check here!
        </h2>
        <p className="text-center">
          Want to know more? Connect with our team via {" "}
          <Link href={"https://t.me/blessedsupport"} className="underline">
            contact
          </Link>
          .
        </p>
      </div>

      <Accordion
        type="single"
        collapsible
        className="max-w-[850px] w-full mt-10 space-y-4 border-none"
        defaultValue="item-1"
      >
        <AccordionItem value="item-1" className="w-full">
          <AccordionTrigger className="accordion-title w-full text-base font-semibold font-inter">
            What is included in the pay as you go plan?
          </AccordionTrigger>
          <AccordionContent className="accordion-content w-full text-base text-black border-b-2 border-black pb-4">
            The pay as you go plan includes full access to our platform’s
            features with pricing based on usage. Ideal for flexible and smaller
            scale events.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2" className="w-full">
          <AccordionTrigger className="accordion-title w-full text-base font-semibold font-inter">
            How do I get a quote for the commitment plan?
          </AccordionTrigger>
          <AccordionContent className="accordion-content w-full text-base text-black border-b-2 border-black pb-4">
            The commitment plan offers a fixed price for a set period, ensuring
            predictable costs and access to all features.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3" className="w-full">
          <AccordionTrigger className="accordion-title w-full text-base font-semibold font-inter">
            Are there any hidden fees?
          </AccordionTrigger>
          <AccordionContent className="accordion-content w-full text-base text-black border-b-2 border-black pb-4">
            No, we believe in transparent pricing. All costs are clearly
            outlined in your plan.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4" className="w-full">
          <AccordionTrigger className="accordion-title w-full text-base font-semibold font-inter">
            Can I switch between plans?
          </AccordionTrigger>
          <AccordionContent className="accordion-content w-full text-base text-black border-b-2 border-black pb-4">
            Yes, you can switch between plans at any time with no additional
            fees.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5" className="w-full">
          <AccordionTrigger className="accordion-title w-full text-base font-semibold font-inter">
            Where is my API key?
          </AccordionTrigger>
          <AccordionContent className="accordion-content w-full text-base text-black border-b-2 border-black pb-4">
            Your API key can be found in your account settings under the API
            section.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6" className="w-full">
          <AccordionTrigger className="accordion-title w-full text-base font-semibold font-inter">
            I have a problem
          </AccordionTrigger>
          <AccordionContent className="accordion-content w-full text-base text-black border-b-2 border-black pb-4">
            If you have a problem, please contact our support team for
            assistance.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
