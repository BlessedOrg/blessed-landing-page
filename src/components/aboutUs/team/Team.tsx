import { TeamMemberCard } from "@/components/aboutUs/team/TeamMemberCard";
import { teamMembers } from "@/components/aboutUs/team/teamMembers";

export const Team = () => {

  return (
    <div className="max-w-[1440px] h-[1130px] mx-auto py-10">
      <h2 className="font-bold uppercase text-center text-3xl md:text-[80px] md:leading-[73px]">
        Our Blessed Team
      </h2>

      <div className="grid grid-cols-4 gap-6 justify-center mt-10">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            {...member}
          />
        ))}
      </div>
    </div>
  );
};
