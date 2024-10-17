"use client";

import { Bars } from "@/components/ui/bars";

const aboutUsData = [
  {
    id: 1,
    title: "Frustrating story",
    content: "One late night, after spending 4 hours in a virtual queue only to be denied a ticket to a major concert, Viet had had enough. The system was broken, and it wasn't just a one-off. Every event that fans care about is plagued by the same frustrating process. Something had to change."
  },
  {
    id: 2,
    title: "Seeking a better solution",
    content: "After months of research, the conclusion was obvious—build it yourself. With verifiability, transparency, and fairness as the foundation, Blessed set out to change ticketing for good."
  },
  {
    id: 3,
    title: "Build, Build, Build",
    content: <>From passion to dedication, a group of like-minded people gathered around this idea. With one mission: Build to win. Build to last. Build the change we want to see. Build to value the outcomes.<br /><br /> We strive to win and prove to the market that this is the last product you'll need to solve the problem.</>
  }
];

export const AboutUsCard = () => {
  return (
    <div className="relative w-full bg-gradient-to-r my-5 from-[#FFFACD] to-[#EFEFEF] py-[80px] px-4 flex flex-col items-center gap-8">
      {aboutUsData.map((item, index) => (
        <div key={item.id} className={`flex ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"} w-[1280px] gap-[109px]`}>
          <div className="w-[624px] h-[550px] bg-gray-300"></div>
          <div className={`relative flex flex-col justify-center items-start w-[547px] h-auto z-10`}>
            <h2 className="font-bold uppercase text-left text-3xl md:text-[80px] md:leading-[73px]">
              {item.title}
            </h2>
            <p className="mt-4">{item.content}</p>
            {index === 1 && <Bars rightBars={{ show: true, amount: 4, widthPercentage: 75 }} isInView={true} color="bg-yellow-500" />}
          </div>
        </div>
      ))}
    </div>
  );
};