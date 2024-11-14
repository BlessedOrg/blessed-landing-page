"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Bars } from "@/components/ui/bars";
import { AuthModal } from "@/components/authModal/AuthModal";

const tabs = [
  {
    id: 0,
    title: "Developer API",
    content: <div>Integrate ticketing seamlessly with our powerful API.</div>,
    iframeSrc:
      "https://drive.google.com/file/d/1CofHsz2iPCLGi-_ALf1cfKM3nRJfslhJ/preview",
    disabled: false,
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
    disabled: false,
  },
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

      <div className="relative z-10 min-h-[500px] lg:min-h-[600px] bg-[#EFEFEF] w-full max-w-[800px] flex flex-col items-center p-4 rounded-[24px]">
        <Image
          src={"/logo.svg"}
          alt="logo blessed"
          height={36}
          width={100}
          className="w-[100px] h-auto"
        />

        <div className="mt-8 mb-5 relative w-full max-w-[624px] rounded-lg overflow-hidden mx-auto">
          {activeTabData?.iframeSrc ? (
            <div
              className="w-full max-w-[624px] aspect-[624/400] rounded-lg overflow-hidden mx-auto"
              style={{
                border: "8px solid",
                borderImage: "linear-gradient(to right, #FFFACD, #06F881) 1",
              }}
            >
              <iframe
                src={activeTabData.iframeSrc}
                width="640"
                height="480"
                allow="autoplay"
                allowFullScreen
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <Image
              src={activeTabData?.image || "/placeholder.png"}
              alt={`${activeTabData?.title} illustration`}
              width={700}
              height={400}
              className="object-contain w-full h-auto"
            />
          )}
        </div>

        {activeTab === 0 && (
          <div className="flex flex-row items-center gap-0 mt-2 md:mt-2">
            <AuthModal
              label="Start for free"
              authType="onboarding"
              className="w-full h-[52px] rounded-[39px]"
            />

            <Link
              href={"https://docs.blessed.fan/"}
              className="text-md hover:bg-[#EFEFEF] py-3 px-4 rounded-[99px] outline-none"
            >
              Docs
            </Link>
          </div>
        )}
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
