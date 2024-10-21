"use client";

import { useState } from "react";
import Image from "next/image";
import { Bars } from "@/components/ui/bars";

const tabs = [
  {
    id: 0,
    title: "Developer API",
    content: <div>Integrate ticketing seamlessly with our powerful API.</div>,
    image: "/img/screenshots/DeveloperApi.png",
    disabled: false
  },
  {
    id: 1,
    title: "Builder",
    content: (
      <div>
        Create and customize tickets effortlessly in under 5 minutes using our
        no-code solution.
      </div>
    ),
    image: "/img/screenshots/Builder.png",
    disabled: false
  }
  // {
  //   id: 0,
  //   title: "Developer API",
  //   content: (
  //     <div>
  //       Create and customize tickets effortlessly in under 5 minutes using our
  //       no-code solution.
  //     </div>
  //   ),
  //   image: "/img/screenshots/DeveloperApi.png",
  //   disabled: false,
  // },
  // {
  //   id: 1,
  //   title: "Analytics",
  //   content: (
  //     <div>
  //       Gain valuable insights into your ticket sales with real-time data and
  //       reporting.
  //     </div>
  //   ),
  //   image: "/img/screenshots/Analytics.png",
  //   disabled: false,
  // },
  // {
  //   id: 2,
  //   title: "Fee management",
  //   content: (
  //     <div>
  //       Easily allocate a portion of transaction fees to stakeholders or causes
  //       you care about.
  //     </div>
  //   ),
  //   image: "/img/screenshots/Fee.png",
  //   disabled: false,
  // },
  // {
  //   id: 3,
  //   title: (
  //     <span>
  //       Lotteries & auction <span className="text-gray-400">(coming soon)</span>
  //     </span>
  //   ),
  //   content: (
  //     <div>
  //       Enable fair, transparent distribution of limited items through secure
  //       lotteries and auctions.
  //     </div>
  //   ),
  //   image: "/img/screenshots/Lotteries.png",
  //   disabled: false,
  // },
];

export const TabsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const onTabClick = (id: number) => setActiveTab(id);

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="relative w-full bg-gradient-to-r my-5 from-[#FFFACD] to-[#EFEFEF] py-[80px] px-4 flex flex-col items-center gap-8">
      <h2 className="font-bold uppercase text-3xl md:text-6xl text-center">
        Why you'll love blessed
      </h2>
      <div className="flex rounded-full p-2 bg-white overflow-x-auto w-fit md:w-fit">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              disabled={!!tab.disabled}
              key={tab.id}
              onClick={() => onTabClick(tab.id)}
              className={`min-w-fit disabled:cursor-no-drop text-sm font-semibold px-4 py-2 rounded-full ${
                isActive ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              {tab.title}
            </button>
          );
        })}
      </div>

      <div className="text-center mt-4">{activeTabData?.content}</div>

      <div className="relative z-10 min-h-[500px] lg:min-h-[600px] bg-[#EFEFEF] w-full max-w-[800px] flex flex-col items-center p-4">
        <Image
          src={"/logo.svg"}
          alt="logo blessed"
          height={36}
          width={100}
          className="w-[100px] h-auto"
        />

        <div className="mt-4 relative w-full aspect-[802/517]">
          <Image
            src={activeTabData?.image || "/placeholder.png"}
            alt={`${activeTabData?.title} illustration`}
            width={700}
            height={400}
            className="object-contain w-full h-auto"
          />
        </div>
      </div>

      <div
        className="absolute top-[50%] w-full h-[50%] mr-8 hidden lg:flex"
        style={{ transform: "translateY(-50%)" }}
      >
        <Bars rightBars={{ show: true }} color="bg-yellow-500" zIndex={0} />
      </div>
    </div>
  );
};
