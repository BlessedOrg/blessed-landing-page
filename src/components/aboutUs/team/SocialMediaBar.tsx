import { Github, Linkedin, Twitter } from "lucide-react";

export const SocialMediaBar = ({ socials }: { socials: { url, id }[] }) => {
  const iconsPerId = {
    "twitter": <Twitter size={18} />,
    "linkedin": <Linkedin size={18} />,
    "github": <Github size={18} />
  };
  return <div className="absolute top-6 right-6 flex flex-col gap-2 z-0">
    {socials.map((social) => (
      <div className="w-[2.25rem] h-[2.25rem] rounded-full bg-white flex items-center justify-center">
        <a href={social.url} target="_blank" rel="noreferrer">
          {iconsPerId[social.id]}
        </a>
      </div>
    ))}
  </div>;
};