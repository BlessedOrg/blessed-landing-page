import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const mediumTiles = [
  {
    title: "Join by contributing",
    description: "Contribute your skills and make an impact.",
    image: "/img/icons/Github.svg",
    colors: {
      general: "bg-[#FFFACD]",
      button: "border-black text-black"
    },
    button: "More on GitHub"
  },
  {
    title: "Want to partner",
    description: "Partner with us to revolutionize event management.",
    image: "/img/icons/Praying-Hand.svg",
    colors: {
      general: "bg-green-500",
      button: "border-black text-black"
    },
    button: "Contact us"
  }
];

export const AboutUsTiles = () => {
  return (
    <div className="flex flex-col gap-4 justify-center py-10 items-center px-4">
      <h2 className="font-bold uppercase text-3xl md:text-6xl text-center">Become a part of the revolution</h2>
      <p className="text-center">Interested in joining the Blessed team or partnering with us?</p>

      <div className="flex flex-col md:flex-row gap-6 justify-between w-full mt-10">
        {mediumTiles.map((tile, index) => (
          <div
            key={tile.title + index}
            className={`flex flex-col gap-4 w-full-[374px] py-6 px-4 md:py-10 md:px-8 ${tile.colors.general} rounded-[1.5rem] w-full`}
          >
            <Image src={tile.image} alt={tile.title} width={150} height={150} className="self-center md:self-end" />
            <div className="flex flex-col gap-4 justify-between h-full">
              <div className="flex flex-col gap-2">
                <h2 className="text-4xl uppercase font-bold">{tile.title}</h2>
                <div className="text-[xl] font-medium">{tile.description}</div>
              </div>
        
              <Button
                variant="outline"
                size="xl"
                className="rounded-[39px] w-[165px] h-[52px]"
              >
                {tile.button}
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full min-h-[374px] py-6 px-4 md:py-10 md:px-8 bg-[rgba(239,239,239,1)] rounded-[1.5rem] justify-between flex-col gap-6 mt-10">
        <div className="flex flex-col gap-6 md:flex-row justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-6xl font-bold uppercase">Bring Awareness</h1>
            <div className="text-[xl] font-medium">
              Help us spread the word of mouth. We only win, when we are united and big as a community.
            </div>
          </div>
          <Image
            src="/img/icons/Chat-Bubble-Oval-Favorite-Heart.svg"
            alt="Festival Icon"
            className="self-center md:self-auto"
            width={200}
            height={200}
          />
        </div>

    
        <div className="flex gap-6">
        <Link href="/contact_us">
        <Button variant="outline" size="xl" className="rounded-[39px] w-[165px] h-[52px]">
            Contact us
          </Button>
          </Link>
          <Link href="https://t.me/blessedsupport" target="_blank" className="underline">
          <Button variant="default" size="xl" className="rounded-[39px] w-[165px] h-[52px]">
            Join our community
          </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
