"use client";
import HubSpotForm from "react-hubspot-form";

export const GetInTouch = () => {
  return (
    <div className="flex flex-col p-4 md:p-6 rounded-lg w-full items-center">
      <div className="py-6 md:py-10">
        <h2 className="font-bold uppercase text-2xl md:text-4xl lg:text-6xl text-center">
          Get in touch
        </h2>
        <p className="text-center mt-2">We'd love to hear from you!</p>
      </div>

      <div className="w-full max-w-[50rem] my-10">
        <HubSpotForm
          portalId="145418239"
          formId="8bc59663-1a9a-4fd3-9d56-a7106034082f"
          onSubmit={() => console.log("Submit!")}
          onReady={(form) => console.log("Form ready!")}
          loading={<div>Loading...</div>}
        />
      </div>
    </div>
  );
};