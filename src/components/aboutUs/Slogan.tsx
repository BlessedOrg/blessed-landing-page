"use client";

export const Slogan = () => {
  return (
    <div className="flex py-10 w-full max-w-[1280px] px-[80px]">
      <div className="flex flex-col justify-start w-[547px] h-auto gap-6">
        <h2 className="font-bold uppercase text-left text-3xl md:text-[48px] md:leading-[44px]">
          Mission impossible
        </h2>
        <p className="text-left">
          We’re turning the impossible into reality by redefining ticket
          management with simplicity, radical transparency, and fairness. Our
          mission is to empower every event, big or small, to achieve seamless,
          secure, and user-friendly experiences.
        </p>
        <div className="flex flex-col justify-start w-[547px] h-auto gap-4 mt-4">
          <div className="flex items-center">
            <img
              src="/img/icons/Check.svg"
              alt="Check Icon"
              className="w-[40px] h-[40px] mr-2"
            />
            <p className="font-bold text-xl md:text-[20px]">Simplicity</p>
          </div>
          <div className="flex items-center">
            <img
              src="/img/icons/Check.svg"
              alt="Check Icon"
              className="w-[40px] h-[40px] mr-2"
            />
            <p className="font-bold text-xl md:text-[20px]">
              Radical Transparency
            </p>
          </div>
          <div className="flex items-center">
            <img
              src="/img/icons/Check.svg"
              alt="Check Icon"
              className="w-[40px] h-[40px] mr-2"
            />
            <p className="font-bold text-xl md:text-[20px]">Fairness</p>
          </div>
        </div>
      </div>

      <div className="w-[63px]"></div>

      <div
        className="flex flex-row"
        style={{
          width: "400px",
          height: "392.87px",
          top: "41.89px",
          left: "128px",
          gap: "0px",
          opacity: "0px",
        }}
      >
        <div className="flex flex-col items-end space-y-8">
          <h2 className="font-bold uppercase text-3xl md:text-[48px]">Blood</h2>
          <h2 className="font-bold uppercase text-3xl md:text-[48px]">
            Energy
          </h2>
          <h2 className="font-bold uppercase text-3xl md:text-[48px]">Sex</h2>
          <h2 className="font-bold uppercase text-3xl md:text-[48px]">
            Donuts
          </h2>
        </div>

        <div className="flex flex-col items-center mx-4">
          <div className="w-[40px] h-[40px] bg-[#06F881]"></div>
          <div className="w-[40px] h-[40px] bg-[#06F881] mt-8"></div>
          <div className="w-[40px] h-[40px] bg-[#06F881] mt-8"></div>
          <div className="w-[40px] h-[40px] bg-[#06F881] mt-8"></div>
        </div>

        <div className="flex flex-col items-start space-y-8">
          <h2 className="font-bold uppercase text-3xl md:text-[48px]">Love</h2>
          <h2 className="font-bold uppercase text-3xl md:text-[48px]">Sugar</h2>
          <h2 className="font-bold uppercase text-3xl md:text-[48px]">Earth</h2>
        </div>
      </div>
    </div>
  );
};
