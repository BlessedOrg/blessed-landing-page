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
    button: "More on GitHub",
    link: "https://github.com/BlessedOrg/"
  },
  {
    title: "Want to partner",
    description: "Partner with us to revolutionize event management.",
    image: "/img/icons/Praying-Hand.svg",
    colors: {
      general: "bg-green-500",
      button: "border-black text-black"
    },
    button: "Contact us",
    link: "/contact-us"
  }
];

export const AboutUsTiles = () => {
  return (
    <div className="flex flex-col gap-4 justify-center py-8 md:py-10 items-center px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="font-bold uppercase text-4xl md:text-6xl lg:text-6xl text-center">
        Become a part of the revolution
      </h2>
      <p className="text-center text-sm md:text-base">
        Interested in joining the Blessed team or partnering with us?
      </p>

      <div className="flex flex-col md:flex-row gap-6 justify-between w-full mt-8 md:mt-10">
        {mediumTiles.map((tile, index) => (
          <div
            key={tile.title + index}
            className={`flex flex-col gap-4 py-6 px-4 md:py-8 md:px-6 lg:py-10 lg:px-8 ${tile.colors.general} rounded-2xl w-full`}
          >
            <Image
              src={tile.image}
              alt={tile.title}
              width={100}
              height={100}
              className="self-center md:self-end w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
            />
            <div className="flex flex-col gap-4 justify-between h-full">
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl uppercase font-bold">{tile.title}</h2>
                <div className="text-base md:text-lg font-medium">{tile.description}</div>
              </div>

              <Link href={tile.link} target="_blank">
                <Button
                  variant="outline"
                  className="rounded-full w-full md:w-auto px-6 py-2 md:py-3"
                >
                  {tile.button}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full py-6 px-4 md:py-8 md:px-6 lg:py-10 lg:px-8 bg-[rgba(239,239,239,1)] rounded-2xl justify-between flex-col gap-6 mt-8 md:mt-10">
        <div className="flex flex-col gap-6 md:flex-row justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold uppercase">Bring Awareness</h1>
            <div className="text-base md:text-lg font-medium">
              Help us spread the word of mouth. We only win, when we are united
              and big as a community.
            </div>
          </div>
          <Image
            src="/img/icons/Chat-Bubble-Oval-Favorite-Heart.svg"
            alt="Festival Icon"
            className="self-center md:self-auto w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48"
            width={200}
            height={200}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Link href="/contact-us" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="rounded-full w-full px-6 py-2 md:py-3"
            >
              Contact us
            </Button>
          </Link>
          <Link
            href="https://t.me/blessedsupport"
            target="_blank"
            className="underline w-full sm:w-auto"
          >
            <Button
              variant="default"
              className="rounded-full w-full px-6 py-2 md:py-3"
            >
              Join our community
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};