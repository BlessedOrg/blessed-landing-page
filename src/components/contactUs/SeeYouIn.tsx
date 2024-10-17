import { Button } from "@/components/ui/button";

export const SeeYouIn = () => {
  return (
    <div className="flex flex-col items-center gap-[56px] w-[1108px] h-[508px] p-[48px]">
      {" "}
      <h1 className="font-bold uppercase text-3xl md:text-6xl text-center">
        See You In...
      </h1>
      <div className="flex flex-col md:flex-row gap-[24px]">
        <div
          className="flex flex-col h-[279px] w-[296px] p-[24px] justify-center items-center gap-[8px] self-stretch 
          border-[2px] rounded-[24px] bg-[#06F881]"
        >
          <div className="text-4xl font-bold">Berlin</div>
          <div className="text-center text-xl font-regular">
            Alexanderplatz 1, 10178 Berlin, Germany
          </div>
          <Button
            variant="outline"
            size="default"
            className="bg-primary-500 hover:!bg-primary-600 rounded-[39px] text-black mt-[24px]"
          >
            Open in maps
          </Button>
        </div>

        <div
          className="flex flex-col h-[279px] w-[296px] p-[24px] justify-center items-center gap-[8px] self-stretch 
          border-[2px] rounded-[24px] border-[#1D1D1B]"
        >
          <div className="text-4xl font-bold">Berlin</div>
          <div className="text-center text-xl font-regular">
            W3 c/o Blessed Möckernstraße 120 10963 Berlin, Germany
          </div>
          <Button
            variant="outline"
            size="default"
            className="bg-primary-500 hover:!bg-primary-600 rounded-[39px] text-black mt-[24px]"
          >
            Open in maps
          </Button>
        </div>
      </div>
    </div>
  );
};
