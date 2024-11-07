"use client";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordionItems = [
  {
    id: "item-1",
    question: "Can I customize templates for any type of event?",
    answer:
      "Absolutely! Our templates are designed to be flexible and customizable for any event type.",
  },
  {
    id: "item-2",
    question: "How do I integrate a template with my existing system?",
    answer:
      "Follow our step-by-step guide or contact our support for help with integration.",
  },
  {
    id: "item-3",
    question: "Are there templates for small events?",
    answer: "Yes, we offer templates suitable for both small and large events.",
  },
  {
    id: "item-4",
    question: "I have a template idea, where can I start?",
    answer: (
      <Link
        href={"https://docs.blessed.fan/"}
        className="text-md py-3 px-4 outline-none"
      >
        Docs
      </Link>
    ),
  },
];

export const TemplatesQuestions = () => {
  return (
    <div className="py-10 flex flex-col items-center max-w-[53rem] w-full gap-6 px-4 font-inter">
      <div className="text-center max-w-[850px] w-full flex flex-col gap-6">
        <h2 className="font-bold uppercase text-3xl md:text-6xl">
          Questions? Check here!
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
        {accordionItems.map((item) => (
          <AccordionItem key={item.id} value={item.id} className="w-full">
            <AccordionTrigger className="accordion-title w-full text-base font-semibold font-inter text-left">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="accordion-content w-full text-base text-black border-b-2 border-black pb-4">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
