"use client";

export const AboutUsCard = () => {
  const barHeight = 75;


  const rightBars = Array.from({ length: 4 }, (_, index) => {
    const bottom = index * (barHeight * 2) + barHeight;

    return (
      <div
        key={`right-${index}`}
        className="absolute right-0 w-[25%] bg-[#FFFACD] z-0"
        style={{
          bottom: `${bottom}px`,
          height: `${barHeight}px`,
        }}
      ></div>
    );
  });

  return (
    <div className="relative w-full bg-gradient-to-r my-5 from-[#FFFACD] to-[#EFEFEF] py-[80px] px-4 flex flex-col items-center gap-8">
     
      <div className="relative flex w-[1280px] gap-[109px]">
        <div className="flex flex-col justify-center items-start w-[547px] h-auto z-10">
          <h2 className="font-bold uppercase text-3xl md:text-6xl">Frustrating story</h2>
          <p className="mt-4">
            One late night, after spending 4 hours in a virtual queue only to be
            denied a ticket to a major concert, Viet had had enough. The system was
            broken, and it wasn’t just a one-off. Every event that fans care about
            is plagued by the same frustrating process. Something had to change.
          </p>
        </div>
        <div className="w-[624px] h-[550px] bg-gray-300"></div>
      </div>

      
      <div className="relative flex w-[1280px] gap-[109px]">
        <div className="w-[624px] h-[550px] bg-gray-300"></div>
        <div className="relative flex flex-col justify-center items-start w-[547px] h-auto z-10">
          <h2 className="font-bold uppercase text-3xl md:text-6xl">Seeking a better solution</h2>
          <p className="mt-4">
            After months of research, the conclusion was obvious—build it yourself. 
            With verifiability, transparency, and fairness as the foundation, Blessed set out to change ticketing for good.
          </p>
        </div>
        {rightBars}
      </div>

  
      <div className="relative flex w-[1280px] gap-[109px]">
        <div className="flex flex-col justify-center items-start w-[547px] h-auto z-10">
          <h2 className="font-bold uppercase text-3xl md:text-6xl">Build, Build, Build</h2>
          <p className="mt-4">
            From passion to dedication, a group of like-minded people gathered around this idea. 
            With one mission: Build to win. Build to last. Build the change we want to see. Build to value the outcomes.
            We strive to win and prove to the market that this is the last product you'll need to solve the problem.
          </p>
        </div>
        <div className="w-[624px] h-[550px] bg-gray-300"></div>
      </div>
    </div>
  );
};
