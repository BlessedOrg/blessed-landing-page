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
    question: " What is included in the pay as you go plan?",
    answer:
      "The pay as you go plan includes full access to our platform’s features with pricing based on usage. Ideal for flexible and smaller scale events.",
  },
  {
    id: "item-2",
    question: "How do I get a quote for the commitment plan?",
    answer:
      " Simply fill out our contact form, and we’ll get back to you with a tailored solution that fits your current stage.",
  },
  {
    id: "item-3",
    question: " Are there any hidden fees?",
    answer:
      "No, we dislike hidden fees as much as you do. Everything is usage-based, and we only charge for what we get charged for.",
  },
  {
    id: "item-4",
    question: "Can I switch between plans?",
    answer: "Yes! For now, just use the contact form to request a switch.",
  },
  {
    id: "item-5",
    question: "Can I switch between plans?",
    answer: "Yes! For now, just use the contact form to request a switch.",
  },
  {
    id: "item-6",
    question: "Where can I find my API key?",
    answer:
      "Your API key is generated either through our no-code Builder interface or directly via the API.",
  },
  {
    id: "item-7",
    question: "I have an issue, what should I do?",
    answer: "Reach out through the contact form, and we’ll resolve it quickly.",
  },
];

export const ContactUsQuestions = () => {
  return (
    <div className="py-10 flex flex-col items-center max-w-[53rem] w-full gap-6 px-4 font-inter">
      <div className="text-center max-w-[850px] w-full flex flex-col gap-6">
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

// export const ContactUsQuestions = () => {
//   return (
//     <div className="py-10 flex flex-col items-center max-w-[53rem] w-full gap-6 px-4 font-inter">
//       <div className="text-center max-w-[850px] w-full">
//         <h2 className="font-bold uppercase text-3xl md:text-6xl">
//           Wondering about something? <br /> Check here!
//         </h2>
//         <p className="mt-2 text-lg">
//           Want to know more? Connect with our team via{" "}
//           <Link href={"https://t.me/blessedsupport"} className="underline">
//             contact
//           </Link>
//           .
//         </p>
//       </div>

//       <Accordion
//         type="single"
//         collapsible
//         className="max-w-[850px] w-full mt-10 space-y-4 border-none overflow-hidden"
//         // defaultValue="item-1"
//       >

//     </div>
//   );
// };
