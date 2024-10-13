"use client";
import Link from "next/link";
import { Accordion } from "flowbite-react";

export const ContactUsQuestions = () => {
return <div className="py-10 flex flex-col gap-6 px-4">
  <div>
    <h2 className="font-bold uppercase text-3xl md:text-6xl text-center">Wondering about something? <br /> Check here!</h2>
    <p className="text-center">Want to know more? Connect with our team via contact. <Link href={"/"} className="underline">contact</Link>.</p>
  </div>

  <Accordion className="max-w-[850px] w-full mt-10 space-y-4 border-none">
        <Accordion.Panel>
          <Accordion.Title className="accordion-title text-2xl font-semibold font-inter">
          What is included in the pay as you go plan?
          </Accordion.Title>
          <Accordion.Content className="accordion-content text-base text-black border-b-2 border-black pb-4">
          The pay as you go plan includes full access to our platform’s features with pricing based on usage. Ideal for flexible and smaller scale events.
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title className="accordion-title text-2xl font-semibold font-inter">
          How do I get a quote for the commitment plan?
          </Accordion.Title>
          <Accordion.Content className="accordion-content text-base text-black border-b-2 border-black pb-4">
          The pay as you go plan includes full access to our platform’s features with pricing based on usage. Ideal for flexible and smaller scale events.
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title className="accordion-title text-2xl font-semibold font-inter">
          Are there any hidden fees?
          </Accordion.Title>
          <Accordion.Content className="accordion-content text-base text-black border-b-2 border-black pb-4">
          The pay as you go plan includes full access to our platform’s features with pricing based on usage. Ideal for flexible and smaller scale events.
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title className="accordion-title text-2xl font-semibold font-inter">
          Can I switch between plans?
          </Accordion.Title>
          <Accordion.Content className="accordion-content text-base text-black border-b-2 border-black pb-4">
          The pay as you go plan includes full access to our platform’s features with pricing based on usage. Ideal for flexible and smaller scale events.
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title className="accordion-title text-2xl font-semibold font-inter">
          Where is my API key?
          </Accordion.Title>
          <Accordion.Content className="accordion-content text-base text-black border-b-2 border-black pb-4">
          The pay as you go plan includes full access to our platform’s features with pricing based on usage. Ideal for flexible and smaller scale events.
          </Accordion.Content>
        </Accordion.Panel>

        <Accordion.Panel>
          <Accordion.Title className="accordion-title text-2xl font-semibold font-inter">
          I have a problem
          </Accordion.Title>
          <Accordion.Content className="accordion-content text-base text-black border-b-2 border-black pb-4">
          The pay as you go plan includes full access to our platform’s features with pricing based on usage. Ideal for flexible and smaller scale events.
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
}