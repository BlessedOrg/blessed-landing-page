import Image from "next/image";

const sections = [
  {
    title: "Conferences",
    icon: "/img/icons/coffe.svg",
    backgroundColor: "#EFEFEF",
    features: [
      {
        title: "Easy integration and management",
        description: "Seamlessly integrate our platform into your existing systems. Manage ticket with ease, allowing you to focus on delivering a great experience while we handle the back-end complexities."
      },
      {
        title: "Radical transparency",
        description: "Ensure transparency in how access is granted. Our platform uses fair methods like lotteries and auctions, so participants trust the process and feel assured that everyone has an equal chance."
      },
      {
        title: "Fair access for all",
        description: "Break down traditional barriers like location or timing. Our system ensures that every participant has a fair shot at ticket, regardless of where they are or how fast they can act."
      }
    ]
  },
  {
    title: "Music & Festival Events",
    icon: "/img/icons/party-popper.svg",
    backgroundColor: "#FFFACD",
    features: [
      {
        title: "Effortless integration",
        description: "Add our platform as an extra service to your current setup without disruption. Simplify how you manage ticketing, letting you deliver an exceptional event experience while we take care of the logistics."
      },
      {
        title: "Radical transparency",
        description: "Offer your audience a transparent and fair way to gain a ticket. Our methods ensure everyone knows the process is unbiased and equitable."
      },
      {
        title: "Fair access for all",
        description: "Level the playing field by ensuring fair access to your events, regardless of audience location or other potential barriers. Our system is designed to be inclusive and equitable."
      }
    ]
  },
  {
    title: "Gaming Events",
    icon: "/img/icons/pacman-white.svg",
    backgroundColor: "#000000",
    features: [
      {
        title: "Seamless integration and management",
        description: "Easily integrate our platform with your current systems to enhance your ticket management. Focus on creating great gaming experiences while we handle the technical side."
      },
      {
        title: "Radical transparency",
        description: "Provide your gaming community with a clear and transparent ticket process. Our fair methods, like auctions and lotteries, build trust and ensure everyone has an equal opportunity to participate."
      },
      {
        title: "Fair access for all",
        description: "Ensure that access isn't determined by external factors like location or speed. Our platform offers a fair chance for everyone to participate, making your events more inclusive and engaging."
      }
    ]
  }
];

const Feature = ({ title, description }) => (
  <div className="flex items-start mb-6 md:mb-10">
    <Image
      src="/img/icons/Check.svg"
      alt="Check Icon"
      width={24}
      height={24}
      className="mr-4 flex-shrink-0"
    />
    <div>
      <h4 className="text-lg md:text-xl font-semibold mb-2">{title}</h4>
      <p className="text-sm md:text-base text-gray-600">{description}</p>
    </div>
  </div>
);

const Section = ({ title, icon, backgroundColor, features, isReverse }) => (
  <div className={`flex flex-col-reverse ${isReverse ? "xl:flex-row-reverse" : "xl:flex-row"} items-center mb-16 w-full max-w-[75rem] px-4`}>
    <div
      className="rounded-lg flex xl:items-center justify-center xl:w-1/2 xl:h-[32rem] mb-8 md:mb-0 py-5"
      style={{ backgroundColor }}
    >
      <Image
        src={icon}
        alt="Event Icon"
        width={100}
        height={100}
        className="md:w-[200px] xl:h-[200px]"
      />
    </div>
    <div className={`w-full md:w-[547px] ${isReverse ? "md:mr-16" : "md:ml-16"} px-4 md:px-0`}>
      <h2 className="font-bold uppercase text-5xl md:text-6xl text-center mb-6 md:mb-10">
        {title}
      </h2>
      {features.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </div>
  </div>
);

export const UseCases = () => {
  return (
    <section
      className="flex flex-col justify-center items-center py-16 px-4 md:px-0 w-full"
      style={{
        background: "linear-gradient(247.1deg, #FFFACD 0%, #FFFFFF 67%)"
      }}
    >
      {sections.map((section, index) => (
        <Section key={index} {...section} isReverse={index % 2 === 0} />
      ))}
    </section>
  );
};