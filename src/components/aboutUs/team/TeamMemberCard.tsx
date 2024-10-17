"use client";
import { SocialMediaBar } from "@/components/aboutUs/team/SocialMediaBar";
import Image from "next/image";
import { useState } from "react";

export const TeamMemberCard = ({
  name,
  role,
  imgSrc,
  socials,
  description
}: {
  name: string,
  role: string,
  imgSrc: string,
  socials: { id: string, url: string }[],
  description?: JSX.Element
}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex flex-col items-left gap-4 relative"
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}>
      <div className="w-[296px] h-[307px] overflow-hidden bg-yellow-500">
        <Image src={imgSrc} alt={name} height={400} width={400} className="w-full h-full object-cover object-top" />
      </div>

      {description && (
        <div
          className={`z-10 absolute bottom-0 left-0 right-0 bg-white p-4 transition-all duration-300 ease-in-out ${
            isHovered ? "-translate-y-[4rem] opacity-100" : "translate-y-full opacity-0 -z-10"
          }`}
        >
          {description}
        </div>
      )}

      <div className="flex flex-col items-left gap-2 px-4">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm text-black">{role}</p>
      </div>

      <SocialMediaBar socials={socials} />
    </div>
  );
};