import { ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const TemplatesModal = ({
  isOpen,
  onClose,
  title = "",
  description = "",
  features = [],
  onTemplateUse,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  features: string[];
  onTemplateUse: () => void;
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

        {/* Заголовок и описание */}
        <div className="flex flex-col mb-6">
          <h1 className="text-2xl font-bold mb-4">{title}</h1>
        </div>

        {/* Список фичей */}
        <div className="w-full h-[280px] flex gap-x-4">
          {/* Описание слева */}
          <div className="w-[50%]">
            <p className="text-sm text-gray-600">{description}</p>
          </div>

          {/* Фичи справа */}
          <div className="w-[50%] flex flex-col gap-y-4">
            {features.length > 0 ? (
              features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center bg-yellow-100 p-3 rounded-md"
                >
                  <span className="flex-1">{feature}</span>
                  <span className="text-green-500 font-bold text-xl">✔</span>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No features available.</p>
            )}
          </div>
        </div>

        {/* Нижняя часть с кнопками */}
        <div className="flex justify-between items-center mt-6">
          <button className="text-lg font-bold text-black" onClick={onClose}>
            ←
          </button>
          <button className="text-lg font-bold text-black" onClick={onClose}>
            →
          </button>

          <Button variant="green" className="rounded-full " size="lg" asChild>
            <Link href={"https://docs.blessed.fan/"}>Use as template</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
