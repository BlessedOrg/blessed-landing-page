"use client";
import Link from "next/link";
import { Accordion } from 'flowbite-react';

export const QuestionsSection = () => {
  return (
    <div className="py-10 flex flex-col items-center gap-6 px-4 font-inter"> 
      <div className="text-center">
        <h2 className="font-bold uppercase text-3xl md:text-6xl">Questions? Check here!</h2>
        <p className="mt-2 text-lg">
          Want to know more? Connect with our team via{" "}
          <Link href={"/"} className="underline">
            contact
          </Link>
          .
        </p>
      </div>

    
      <Accordion className="max-w-[850px] w-full mt-10 space-y-4 border-none">
        <Accordion.Panel>
          <Accordion.Title className="accordion-title text-2xl font-semibold font-inter">
            How does Blessed ensure the authenticity of entries?
          </Accordion.Title>
          <Accordion.Content className="accordion-content text-base text-black border-b-2 border-black pb-4">
            Each entry is secured using advanced blockchain technology, ensuring tamper-proof and verifiable transactions. This guarantees that entries cannot be duplicated or altered.
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title className="accordion-title text-2xl font-semibold font-inter">
            How can I integrate Blessed with my existing systems?
          </Accordion.Title>
          <Accordion.Content className="accordion-content text-base text-black border-b-2 border-black pb-4">
            Blessed offers easy integration via API, allowing seamless connections with your current systems for event management and tracking.
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title className="accordion-title text-2xl font-semibold font-inter">
            What kind of customization options are available for event organizers?
          </Accordion.Title>
          <Accordion.Content className="accordion-content text-base text-black border-b-2 border-black pb-4">
            Event organizers can customize themes, branding, and engagement features to fit their event's unique needs and audience.
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title className="accordion-title text-2xl font-semibold font-inter">
            Can I track attendee engagement and loyalty?
          </Accordion.Title>
          <Accordion.Content className="accordion-content text-base text-black border-b-2 border-black pb-4">
            Yes, Blessed provides analytics tools to track attendee participation, engagement, and overall loyalty, helping you optimize future events.
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};
