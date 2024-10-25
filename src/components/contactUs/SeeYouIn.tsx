"use client";
import { Button } from "@/components/ui/button";

const locations = [
  {
    city: "Berlin",
    address:
      "Pandr UG c/o Blessed Erich-Weinert-Str. 51, 10439 Berlin, Germany",
    latitude: 52.5505314,
    longitude: 13.421548,
    bgColor: "bg-[#06F881]",
    border: "border-[#06F881]",
  },
  {
    city: "Berlin",
    address: "W3 c/o Blessed Möckernstraße 120 10963 Berlin, Germany",
    latitude: 52.4978887,
    longitude: 13.3804171,
    bgColor: "bg-white",
    border: "border-[#1D1D1B]",
  },
];

const openInMap = (latitude, longitude) => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const url = isIOS
    ? `http://maps.apple.com/?daddr=${latitude},${longitude}`
    : `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

  window.open(url, "_blank");
};

export const SeeYouIn = () => {
  return (
    <div className="flex flex-col items-center gap-8 md:gap-14 w-full max-w-5xl mx-auto p-4 md:p-12">
      <h1 className="font-bold uppercase text-3xl md:text-5xl lg:text-6xl text-center">
        See You In...
      </h1>
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {locations.map((location, index) => (
          <div
            key={index}
            className={`flex flex-col h-auto md:h-[280px] w-full md:w-1/2 p-6 justify-center items-center gap-4 
            border-2 rounded-3xl ${location.bgColor} ${location.border}`}
          >
            <div className="text-3xl md:text-4xl font-bold">
              {location.city}
            </div>
            <div className="text-center text-base md:text-xl font-normal">
              {location.address}
            </div>
            <Button
              variant="outline"
              size="lg"
              className="bg-primary-500 hover:bg-primary-600 rounded-full text-black mt-4 w-full md:w-auto"
              onClick={() => openInMap(location.latitude, location.longitude)}
            >
              Open in maps
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};
