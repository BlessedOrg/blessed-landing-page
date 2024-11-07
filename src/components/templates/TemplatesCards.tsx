"use client";
import { useState, DetailedHTMLProps, HTMLAttributes } from "react";
import { Button } from "@/components/ui/button";

export const Cards = ({
  leftIcon,
  rightIcon,
  ...props
}: { leftIcon: string; rightIcon: string } & DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={`flex flex-col items-start p-8 w-[296px] h-[281px] rounded-[24px] border-2 border-[#1D1D1B] bg-[var(--Lunar-Glow, #FFF)] ${
        className ? className : ""
      }`}
      {...rest}
    >
      <div className="flex justify-between w-full mb-4">
        <img src={leftIcon} alt="Left Icon" className="w-[56px] h-[56px]" />
        <div className="flex w-[48px] h-[48px] p-[9px] items-center justify-center bg-[#EFEFEF] rounded-full">
          <img src={rightIcon} alt="Right Icon" className="w-6 h-6" />
        </div>
      </div>
      {children}
    </div>
  );
};

export const CustomCard = ({
  leftIcon,
  rightIcon,
  ...props
}: { leftIcon: string; rightIcon: string } & DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={`flex flex-col items-start p-8 w-[296px] h-[281px] rounded-[24px] bg-[#FFFACD] ${
        className ? className : ""
      }`}
      {...rest}
    >
      <div className="flex justify-between w-full mb-4">
        <img src={leftIcon} alt="Left Icon" className="w-[56px] h-[56px]" />
        <div className="flex w-[48px] h-[48px] p-[9px] items-center justify-center bg-[#EFEFEF] rounded-full">
          <img src={rightIcon} alt="Right Icon" className="w-6 h-6" />
        </div>
      </div>
      {children}
    </div>
  );
};

export const TemplatesCards = () => {
  const [activeTab, setActiveTab] = useState(0);
  const onTabClick = (id: number) => setActiveTab(id);

  const templateTabs = [
    { id: 0, title: "All" },
    { id: 1, title: "Conferences" },
    { id: 2, title: "Festivals" },
    { id: 3, title: "Gaming" },
  ];

  const cardData = [
    {
      type: "secondary",
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Custom template",
      description: "Let us know, and we’ll help you out!",
    },
    {
      type: "primary",
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Conference C",
      description:
        "Template tailored for relaxed professional and academic conferences.",
    },
    {
      type: "primary",
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Conference D",
      description:
        "Template tailored for relaxed professional and academic conferences.",
    },
    {
      type: "primary",
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Conference E",
      description:
        "Template tailored for relaxed professional and academic conferences.",
    },
    {
      type: "primary",
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Conference F",
      description:
        "Template tailored for relaxed professional and academic conferences.",
    },
    {
      type: "primary",
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Conference G",
      description:
        "Template tailored for relaxed professional and academic conferences.",
    },
    {
      type: "primary",
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Conference H",
      description:
        "Template tailored for relaxed professional and academic conferences.",
    },
    {
      type: "primary",
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Conference I",
      description:
        "Template tailored for relaxed professional and academic conferences.",
    },
  ];

  return (
    <div className="flex flex-col mt-[5rem]">
      {/* Header with tab bar */}
      <div className="w-[1280px] h-[120px] flex flex-col items-start mt-[80px] mb-[56px] pl-[10px]">
        <h1 className="text-5xl font-bold">Templates</h1>
        <div className="flex gap-4 mt-4">
          {templateTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabClick(tab.id)}
              className={`px-4 py-2 text-sm font-semibold rounded-full ${
                activeTab === tab.id
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      {/* Top row of 4 cards */}
      <div className="flex justify-between gap-8 mb-8">
        <CustomCard
          leftIcon={cardData[0].leftIcon}
          rightIcon={cardData[0].rightIcon}
        >
          <h2 className="text-3xl font-bold">{cardData[0].title}</h2>
          <p className="mt-2 text-medium">{cardData[0].description}</p>
          <Button variant="default" className="mt-auto">
            Contact us
          </Button>
        </CustomCard>

        {cardData.slice(1, 4).map((card, index) => (
          <Cards
            key={index + 1}
            leftIcon={card.leftIcon}
            rightIcon={card.rightIcon}
          >
            <h2 className="text-3xl font-bold">{card.title}</h2>
            <p className="mt-2 text-medium">{card.description}</p>
            <Button variant="default" className="mt-auto">
              Use as template
            </Button>
          </Cards>
        ))}
      </div>

      {/* Middle row of 4 cards */}
      <div className="flex justify-between gap-8 mb-8">
        {cardData.slice(4, 8).map((card, index) => (
          <Cards
            key={index + 4}
            leftIcon={card.leftIcon}
            rightIcon={card.rightIcon}
          >
            <h2 className="text-3xl font-bold">{card.title}</h2>
            <p className="mt-2 text-medium">{card.description}</p>
            <Button variant="default" className="mt-auto">
              Use as template
            </Button>
          </Cards>
        ))}
      </div>

      {/* Bottom row of 2 cards aligned to the left */}
      <div className="flex gap-8 mb-12">
        {cardData.slice(0, 2).map((card, index) => (
          <Cards
            key={index + 8}
            leftIcon={card.leftIcon}
            rightIcon={card.rightIcon}
          >
            <h2 className="text-3xl font-bold">{card.title}</h2>
            <p className="mt-2 text-medium">{card.description}</p>
            <Button variant="default" className="mt-auto">
              Use as template
            </Button>
          </Cards>
        ))}
      </div>

      {/* Center button */}
      <div className="flex justify-center mb-12">
        <Button variant="outline" size="xl" className="rounded-[39px]">
          See more
        </Button>
      </div>
    </div>
  );
};
