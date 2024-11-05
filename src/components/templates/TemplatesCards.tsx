"use client";
import { DetailedHTMLProps, HTMLAttributes } from "react";
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

export const TemplatesCards = () => {
  const cardData = [
    {
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Conference B",
      description:
        "Template tailored for relaxed professional and academic conferences.",
    },
    {
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Conference C",
      description:
        "Template tailored for relaxed professional and academic conferences.",
    },
    {
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Conference D",
      description:
        "Template tailored for relaxed professional and academic conferences.",
    },
    {
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Conference E",
      description:
        "Template tailored for relaxed professional and academic conferences.",
    },
    {
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Conference F",
      description:
        "Template tailored for relaxed professional and academic conferences.",
    },
    {
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Conference G",
      description:
        "Template tailored for relaxed professional and academic conferences.",
    },
    {
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Conference H",
      description:
        "Template tailored for relaxed professional and academic conferences.",
    },
    {
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Conference I",
      description:
        "Template tailored for relaxed professional and academic conferences.",
    },
  ];

  return (
    <div className="flex flex-col mt-[5rem]">
      {/* Top row of 4 cards */}
      <div className="flex justify-between gap-8 mb-8">
        {cardData.slice(0, 4).map((card, index) => (
          <Cards
            key={index}
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
            key={index}
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
            key={index}
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
