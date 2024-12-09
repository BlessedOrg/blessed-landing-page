"use client";
import { useState, DetailedHTMLProps, HTMLAttributes, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TemplatesModal } from "@/components/templates/TemplatesModal";

export const Cards = ({
  leftIcon,
  rightIcon,
  onButtonClick,
  ...props
}: {
  leftIcon: string;
  rightIcon: string;
  onButtonClick: () => void;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={`flex flex-col items-start p-8 w-[296px] h-[281px] rounded-[24px] border-2 border-[#1D1D1B] bg-[var(--Lunar-Glow, #FFF)] ${
        className ? className : ""
      }`}
      {...rest}
    >
      <div className="flex justify-between w-full mb-4">
        <img src={leftIcon} alt="Left Icon" className="w-[56px] h-[56px]" />
        <div
          className="flex w-[48px] h-[48px] p-[9px] items-center justify-center bg-[#EFEFEF] rounded-full cursor-pointer"
          onClick={onButtonClick} // Добавляем обработчик клика
        >
          <img src={rightIcon} alt="Right Icon" className="w-6 h-6" />
        </div>
      </div>
      {children}
    </div>
  );
};

export const CustomCard = ({
  leftIcon,
  rightIcon,
  onButtonClick,
  ...props
}: {
  leftIcon: string;
  rightIcon: string;
  onButtonClick: () => void;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={`flex flex-col items-start p-8 w-[296px] h-[281px] rounded-[24px] bg-[#FFFACD] ${
        className ? className : ""
      }`}
      {...rest}
    >
      <div className="flex justify-between w-full mb-4">
        <img src={leftIcon} alt="Left Icon" className="w-[56px] h-[56px]" />
        <div
          className="flex w-[48px] h-[48px] p-[9px] items-center justify-center bg-[#EFEFEF] rounded-full cursor-pointer"
          onClick={onButtonClick} // Добавляем обработчик клика
        >
          <img src={rightIcon} alt="Right Icon" className="w-6 h-6" />
        </div>
      </div>
      {children}
    </div>
  );
};

export const TemplatesCards = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCards, setFilteredCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна

  const onTabClick = (id: number) => setActiveTab(id);

  const openModal = () => setIsModalOpen(true); // Функция для открытия модального окна
  const closeModal = () => setIsModalOpen(false); // Функция для закрытия модального окна

  const templateTabs = [
    { id: 0, title: "All" },
    { id: 1, title: "Conferences" },
    { id: 2, title: "Festivals" },
    { id: 3, title: "Gaming" },
  ];

  const cardData = [
    {
      type: "secondary",
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Custom template",
      description: "Let us know, and we'll help you out!",
      category: "All",
    },
    {
      type: "primary",
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Conference B",
      description:
        "Template tailored for relaxed professional and academic conferences.",
      category: "Conferences",
    },
    {
      type: "primary",
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Conference C",
      description:
        "Template tailored for relaxed professional and academic conferences.",
      category: "Conferences",
    },
    {
      type: "primary",
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Conference E",
      description:
        "Template tailored for relaxed professional and academic conferences.",
      category: "Conferences",
    },
    {
      type: "primary",
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Festival F",
      description:
        "Template tailored for exciting and vibrant festival experiences.",
      category: "Festivals",
    },
    {
      type: "primary",
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Festival G",
      description:
        "Template tailored for exciting and vibrant festival experiences.",
      category: "Festivals",
    },
    {
      type: "primary",
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Gaming H",
      description:
        "Template tailored for immersive gaming events and tournaments.",
      category: "Gaming",
    },
    {
      type: "primary",
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Gaming I",
      description:
        "Template tailored for immersive gaming events and tournaments.",
      category: "Gaming",
    },
    {
      type: "primary",
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Gaming M",
      description:
        "Template tailored for immersive gaming events and tournaments.",
      category: "Gaming",
    },
    {
      type: "primary",
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Gaming V",
      description:
        "Template tailored for immersive gaming events and tournaments.",
      category: "Gaming",
    },
  ];

  useEffect(() => {
    filterCards();
  }, [activeTab, searchQuery]);

  const filterCards = () => {
    let filtered = cardData;

    if (activeTab !== 0) {
      const activeCategory = templateTabs[activeTab].title;
      filtered = filtered.filter((card) => card.category === activeCategory);
    }

    if (searchQuery) {
      const lowercaseQuery = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (card) =>
          card.title.toLowerCase().includes(lowercaseQuery) ||
          card.description.toLowerCase().includes(lowercaseQuery)
      );
    }

    setFilteredCards(filtered);
  };

  const renderCards = (cards) => {
    return cards.map((card, index) =>
      card.type === "secondary" ? (
        <CustomCard
          key={index}
          leftIcon={card.leftIcon}
          rightIcon={card.rightIcon}
          onButtonClick={openModal} // Передаем функцию открытия модального окна
        >
          <h2 className="text-3xl font-bold">{card.title}</h2>
          <p className="mt-2 text-medium">{card.description}</p>
          <Button variant="default" className="mt-auto">
            Contact us
          </Button>
        </CustomCard>
      ) : (
        <Cards
          key={index}
          leftIcon={card.leftIcon}
          rightIcon={card.rightIcon}
          onButtonClick={openModal} // Передаем функцию открытия модального окна
        >
          <h2 className="text-3xl font-bold">{card.title}</h2>
          <p className="mt-2 text-medium">{card.description}</p>
          <Button variant="default" className="mt-auto">
            Use as template
          </Button>
        </Cards>
      )
    );
  };

  return (
    <div className="flex flex-col mt-[5rem]">
      {/* Модальное окно */}
      <TemplatesModal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-xl font-bold">Modal Content</h2>
        <p>This is the content of the modal window.</p>
      </TemplatesModal>

      {/* Заголовок и фильтрация */}
      <div className="w-[1280px] h-[120px] flex items-center justify-between mt-[80px] mb-14 pl-[10px]">
        <h1 className="text-5xl font-bold">Templates</h1>
        <div className="w-[300px]">
          <Input
            type="search"
            placeholder="Search templates"
            className="w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Табуляция */}
      <div className="flex gap-4 mt-4">
        {templateTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabClick(tab.id)}
            className={`px-4 py-2 text-sm font-semibold rounded-full ${
              activeTab === tab.id
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Карточки */}
      <div className="grid grid-cols-4 gap-8 mb-8 mt-[3.5rem]">
        {renderCards(filteredCards)}
      </div>

      {/* Кнопка "See more" */}
      {filteredCards.length > 8 && (
        <div className="flex justify-center mb-12">
          <Button variant="outline" size="xl" className="rounded-[39px]">
            See more
          </Button>
        </div>
      )}
    </div>
  );
};
