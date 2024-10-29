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
    question: "How does Blessed ensure the authenticity of entries?",
    answer:
      "Each entry is secured using advanced blockchain technology, ensuring tamper-proof and verifiable transactions. This guarantees that entries cannot be duplicated or altered.",
  },
  {
    id: "item-2",
    question: "How can I integrate Blessed with my existing systems?",
    answer:
      "Blessed offers easy integration via API, allowing seamless connections with your current systems for event management and tracking.",
  },
  {
    id: "item-3",
    question:
      "What kind of customization options are available for event organizers?",
    answer:
      "Event organizers can customize themes, branding, and engagement features to fit their event's unique needs and audience.",
  },
  {
    id: "item-4",
    question: "Can I track attendee engagement and loyalty?",
    answer:
      "Yes, Blessed provides analytics tools to track attendee participation, engagement, and overall loyalty, helping you optimize future events.",
  },
];

export const QuestionsSection = () => {
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
