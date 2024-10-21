"use client";

import Image from "next/image";

const missionPoints = ["Simplicity", "Radical Transparency", "Fairness"];

export const Slogan = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col xl:flex-row py-10 my-10 px-4 md:px-8 lg:px-16 gap-8 md:gap-16 items-center">
      <div className="flex flex-col justify-start w-full md:w-1/2 gap-6">
        <h2 className="font-bold uppercase text-left text-3xl md:text-4xl lg:text-5xl leading-tight">
          Mission impossible
        </h2>
        <p className="text-left text-base md:text-lg">
          We're turning the impossible into reality by redefining ticket
          management with simplicity, radical transparency, and fairness. Our
          mission is to empower every event, big or small, to achieve seamless,
          secure, and user-friendly experiences.
        </p>
        <div className="flex flex-col justify-start w-full gap-4 mt-4">
          {missionPoints.map((point, index) => (
            <div key={index} className="flex items-center">
              <Image
                src="/img/icons/Check.svg"
                alt="Check Icon"
                width={40}
                height={40}
                className="w-8 h-8 md:w-10 md:h-10 mr-2"
              />
              <p className="font-bold text-lg md:text-xl">{point}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
        <Image
          src="/img/other/mission.svg"
          alt="Mission Illustration"
          width={500}
          height={500}
          className="h-auto w-[90%] max-w-md md:max-w-full"
        />
      </div>
    </div>
  );
};