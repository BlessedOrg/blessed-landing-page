"use client";
import { Bars } from "@/components/ui/bars";
import Image from "next/image";

const aboutUsData = [
  {
    id: 1,
    title: "Frustrating story",
    content:
      "One late night, after spending 4 hours in a virtual queue only to be denied a ticket to a major concert, Viet had had enough. The system was broken, and it wasn't just a one-off. Every event that fans care about is plagued by the same frustrating process. Something had to change.",
    icons: [
      "/img/icons/about-us/Ticket-Star.svg",
      "/img/icons/about-us/Delete-2.svg",
      "/img/icons/about-us/Smiley-Grumpy.svg",
      "/img/icons/about-us/Watch-Circle-Time.svg",
    ],
  },
  {
    id: 2,
    title: "Seeking a better solution",
    content:
      "After months of research, the conclusion was obvious—build it yourself. With verifiability, transparency, and fairness as the foundation, Blessed set out to change ticketing for good.",
    icons: [
      "/img/icons/about-us/Flash-1.svg",
      "/img/icons/about-us/Magnifying-Glass.svg",
      "/img/icons/about-us/User-Feedback-Heart.svg",
      "/img/icons/about-us/Eye-Optic.svg",
    ],
  },
  {
    id: 3,
    title: "Build, Build, Build",
    content: (
      <>
        From passion to dedication, a group of like-minded people gathered
        around this idea. With one mission: Build to win. Build to last. Build
        the change we want to see. Build to value the outcomes.
        <br />
        <br /> We strive to win and prove to the market that this is the last
        product you'll need to solve the problem.
      </>
    ),
    icons: [
      "/img/icons/about-us/Share.svg",
      "/img/icons/about-us/Ai-Health-Spark.svg",
      "/img/icons/about-us/No-Poverty.svg",
      "/img/icons/Praying-Hand.svg",
    ],
  },
];

export const AboutUsCard = () => {
  return (
    <div className="relative w-full bg-gradient-to-r my-5 from-[#FFFACD] to-[#EFEFEF] py-[80px] px-4 flex flex-col items-center gap-8">
      {aboutUsData.map((item, index) => (
        <div
          key={item.id}
          className={`flex ${
            index % 2 === 0 ? "flex-row-reverse" : "flex-row"
          } w-[1280px] gap-[109px] relative`}
        >
          <div className="relative w-[624px] h-[550px] flex flex-col items-center justify-center">
            {item.icons.map((icon, iconIndex) => (
              <Image
                key={iconIndex}
                src={icon}
                alt={`Icon ${iconIndex + 1}`}
                width={iconIndex === 0 ? 200 : iconIndex === 1 ? 150 : 100}
                height={iconIndex === 0 ? 200 : iconIndex === 1 ? 150 : 100}
                className="absolute"
                style={{
                  left:
                    iconIndex === 0
                      ? "50%"
                      : iconIndex === 1
                      ? "auto"
                      : iconIndex === 2
                      ? "64px"
                      : "auto",
                  right:
                    iconIndex === 1
                      ? "157px"
                      : iconIndex === 2
                      ? "auto"
                      : iconIndex === 3
                      ? "64px"
                      : "auto",
                  bottom: iconIndex === 3 ? "64px" : "auto",
                  top:
                    iconIndex === 0
                      ? "50%"
                      : iconIndex === 1
                      ? "120px"
                      : iconIndex === 2
                      ? "64px"
                      : "auto",
                  transform:
                    iconIndex === 0
                      ? "translate(-50%, -50%)"
                      : iconIndex === 1 || iconIndex === 2
                      ? "translateY(-50%)"
                      : "translate(-50%, 0)",
                }}
              />
            ))}
          </div>

          <div
            className={`relative flex flex-col justify-center items-start w-[547px] h-auto z-10`}
          >
            <h2 className="font-bold uppercase text-left text-3xl md:text-[80px] md:leading-[73px]">
              {item.title}
            </h2>
            <p className="mt-4">{item.content}</p>
            {index === 1 && (
              <Bars
                rightBars={{ show: true, amount: 4, widthPercentage: 75 }}
                isInView={true}
                color="bg-yellow-500"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
