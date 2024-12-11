import Link from "next/link";
import { Button } from "@/components/ui/button";

export const TemplatesModal = ({
  isOpen,
  onClose,
  title = "",
  subtitle = "",
  description = "",
  features = [],
  onTemplateUse,
  onPrev,
  onNext,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  onTemplateUse: () => void;
  onPrev: () => void;
  onNext: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-[684px] h-[510px] p-6 rounded-lg shadow-lg relative flex flex-col">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="flex flex-col items-center mb-6">
          <h1 className="text-5xl font-bold mb-4">{title}</h1>
        </div>

        <div className="w-full h-[280px] flex gap-x-4">
          <div className="w-[50%]">
            <p className="text-sm font-bold mb-2">{subtitle}</p>
            <p className="text-sm ">{description}</p>
          </div>

          <div className="w-[50%] flex flex-col gap-y-4">
            {features.length > 0 ? (
              features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center bg-yellow-100 p-3 rounded-md w-[314px] h-[88px]"
                >
                  <span className="flex-1">{feature}</span>
                  <img
                    src="/img/icons/Check.svg"
                    alt="Check Icon"
                    className="w-10 h-10 text-green-500"
                  />
                </div>
              ))
            ) : (
              <p className="text-gray-500">No features available.</p>
            )}
          </div>
        </div>

        <div className="w-[652px] h-[2px] bg-[#EFEFEF] mt-2" />

        <div className="flex justify-between items-center mt-6">
          <button className="text-lg font-bold text-black" onClick={onPrev}>
            ←
          </button>
          <button className="text-lg font-bold text-black " onClick={onNext}>
            →
          </button>

          <Button variant="green" className="rounded-full" size="lg" asChild>
            <Link href={"https://dashboard.blessed.fan/create-ticket"}>
              Use as template
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
