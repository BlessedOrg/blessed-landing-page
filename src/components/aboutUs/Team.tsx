import Image from "next/image";
import { DetailedHTMLProps, HTMLAttributes } from "react";


export const Card = ({...props}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  const { children, className, ...rest } = props;
  return (
    <div className={`bg-white p-6 rounded-3xl w-[296px] h-[405px] ${className ? className : ""}`} {...rest}>
      {children}
    </div>
  );
};


export const TeamMember = ({ name, role, imgSrc }: { name: string, role: string, imgSrc: string }) => {
  return (
    <Card className="flex flex-col items-left gap-4">
      <div className="w-[296px] h-[307px] overflow-hidden ">
        <img src={imgSrc} alt={name} className="w-full h-full object-cover" />
      </div>

      <div className="flex flex-col items-left gap-2">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-sm text-black">{role}</p>
      </div>
    </Card>
  );
};


export const Team = () => {

  const teamMembers = [
    { name: "Viet Nguyen", role: "Head of Vision & Technology", imgSrc: "/img/icons/Viet.png" },
    { name: "Daud Zulfacar", role: "Product Innovation Lead", imgSrc: "/img/icons/Daud.png" },
    { name: "Frank Bartels", role: "Chief Operations Specialist", imgSrc: "/img/icons/Frank.png" },
    { name: "James Forrester", role: "Growth & Strategy Director", imgSrc: "/img/icons/James.png" },
    { name: "Filip Namysł", role: "Full-Stack Engineer", imgSrc: "/img/icons/Filip.png" },
    { name: "Adam Leszczyński", role: "Full-Stack Engineer", imgSrc: "/img/icons/Adam.png" },
    { name: "Alper Çilingir", role: "Interaction & Strategic Designer", imgSrc: "/img/icons/Alper.png" },
    { name: "Alex Voinovsky", role: "Designer & Frontend Developer", imgSrc: "/img/icons/Alex.jpg" },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 justify-center">
      
      {teamMembers.map((member, index) => (
        <TeamMember
          key={index}
          name={member.name}
          role={member.role}
          imgSrc={member.imgSrc}
        />
      ))}
    </div>
  );
};
