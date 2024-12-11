"use client";
import { useState, DetailedHTMLProps, HTMLAttributes, useMemo } from "react";
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
          onClick={onButtonClick}
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
          onClick={onButtonClick}
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onTabClick = (id: number) => setActiveTab(id);

  const openModal = (template: any, index: number) => {
    setSelectedTemplate(template);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const templateTabs = [
    { id: 0, title: "All" },
    { id: 1, title: "Conferences" },
    { id: 2, title: "Festivals" },
    { id: 3, title: "Gaming" },
  ];

  const cardData = [
    {
      type: "secondary",
      leftIcon: "/img/icons/Lock-Rotation.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Custom template",
      description: "Let us know, and we'll help you out!",
      category: "All",
      modalContent: {
        title: "Custom Template",
        subtitle:
          "Enhance your event experience with blockchain-powered ticketing, offering secure, transparent, and efficient solutions for both organizers and attendees.",
        description:
          "Enhance your event experience with blockchain-powered ticketing, offering secure, transparent, and efficient solutions for both organizers and attendees.",
        features: [
          "Personalized Consultation",
          "Customized Features",
          "Dedicated Support",
        ],
      },
    },
    {
      type: "primary",
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Conference B",
      description:
        "Template tailored for relaxed professional and academic conferences.",
      category: "Conferences",
      modalContent: {
        title: "Professional Conference Template",
        subtitle:
          "Enhance your event experience with blockchain-powered ticketing, offering secure, transparent, and efficient solutions for both organizers and attendees.",
        description:
          "Streamline your conference management with our comprehensive solution.",
        features: [
          "Session Scheduling",
          "Speaker Management",
          "Attendee Networking",
        ],
      },
    },
    {
      type: "primary",
      leftIcon: "/img/icons/coffe.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Conference C",
      description:
        "Template tailored for relaxed professional and academic conferences.",
      category: "Conferences",
      modalContent: {
        title: "Festival Experience Template",
        subtitle:
          "Enhance your event experience with blockchain-powered ticketing, offering secure, transparent, and efficient solutions for both organizers and attendees.",
        description:
          "Create unforgettable festival moments with our feature-rich template.",
        features: [
          "Artist Lineup Management",
          "Interactive Festival Map",
          "Real-time Schedule Updates",
        ],
      },
    },
    {
      type: "primary",
      leftIcon: "/img/icons/party-popper.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Festival A",
      description:
        "Template tailored for relaxed professional and academic conferences.",
      category: "Conferences",
      modalContent: {
        title: "Festival Experience Template",
        subtitle:
          "Enhance your event experience with blockchain-powered ticketing, offering secure, transparent, and efficient solutions for both organizers and attendees.",
        description:
          "Create your own festival tokens—your branded currency. Offer your attendees an unforgettable experience.",
        features: [
          "Lower Payment Fees",
          "Independent Publishing",
          "Engagement & Perks",
        ],
      },
    },
    {
      type: "primary",
      leftIcon: "/img/icons/party-popper.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Festival B",
      description:
        "Template tailored for exciting and vibrant festival experiences.",
      category: "Festivals",
      modalContent: {
        title: "Festival Experience Template",
        subtitle:
          "Enhance your event experience with blockchain-powered ticketing, offering secure, transparent, and efficient solutions for both organizers and attendees.",
        description:
          "Create your own festival tokens—your branded currency. Offer your attendees an unforgettable experience.",
        features: [
          "Lower Payment Fees",
          "Independent Publishing",
          "Engagement & Perks",
        ],
      },
    },
    {
      type: "primary",
      leftIcon: "/img/icons/party-popper.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Festival C",
      description:
        "Template tailored for exciting and vibrant festival experiences.",
      category: "Festivals",
      modalContent: {
        title: "Festival Experience Template",
        subtitle:
          "Enhance your event experience with blockchain-powered ticketing, offering secure, transparent, and efficient solutions for both organizers and attendees.",
        description:
          "Create your own festival tokens—your branded currency. Offer your attendees an unforgettable experience.",
        features: [
          "Lower Payment Fees",
          "Independent Publishing",
          "Engagement & Perks",
        ],
      },
    },
    {
      type: "primary",
      leftIcon: "/img/icons/pacman.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Gaming A",
      description:
        "Template tailored for immersive gaming events and tournaments.",
      category: "Gaming",
      modalContent: {
        title: "Gaming Event Template",
        subtitle:
          "Enhance your event experience with blockchain-powered ticketing, offering secure, transparent, and efficient solutions for both organizers and attendees.",
        description:
          "Create your own game tokens—your branded in-game currency. Elevate player engagement and brand loyalty while enhancing the in-game experience.",
        features: [
          "Lower Transaction Fees",
          "Brand Loyalty & Engagement",
          "In-Game Rewards & Perks",
        ],
      },
    },
    {
      type: "primary",
      leftIcon: "/img/icons/pacman.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Gaming B",
      description:
        "Template tailored for immersive gaming events and tournaments.",
      category: "Gaming",
      modalContent: {
        title: "Gaming Event Template",
        subtitle:
          "Enhance your event experience with blockchain-powered ticketing, offering secure, transparent, and efficient solutions for both organizers and attendees.",
        description:
          "Create your own game tokens—your branded in-game currency. Elevate player engagement and brand loyalty while enhancing the in-game experience.",
        features: [
          "Lower Transaction Fees",
          "Brand Loyalty & Engagement",
          "In-Game Rewards & Perks",
        ],
      },
    },
    {
      type: "primary",
      leftIcon: "/img/icons/pacman.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Gaming C",
      description:
        "Template tailored for immersive gaming events and tournaments.",
      category: "Gaming",
      modalContent: {
        title: "Gaming Event Template",
        subtitle:
          "Enhance your event experience with blockchain-powered ticketing, offering secure, transparent, and efficient solutions for both organizers and attendees.",
        description:
          "Create your own game tokens—your branded in-game currency. Elevate player engagement and brand loyalty while enhancing the in-game experience.",
        features: [
          "Lower Transaction Fees",
          "Brand Loyalty & Engagement",
          "In-Game Rewards & Perks",
        ],
      },
    },
    {
      type: "primary",
      leftIcon: "/img/icons/pacman.svg",
      rightIcon: "/img/icons/add1plus.svg",
      title: "Gaming D",
      description:
        "Template tailored for immersive gaming events and tournaments.",
      category: "Gaming",
      modalContent: {
        title: "Gaming Event Template",
        subtitle:
          "Enhance your event experience with blockchain-powered ticketing, offering secure, transparent, and efficient solutions for both organizers and attendees.",
        description:
          "Create your own game tokens—your branded in-game currency. Elevate player engagement and brand loyalty while enhancing the in-game experience.",
        features: [
          "Lower Transaction Fees",
          "Brand Loyalty & Engagement",
          "In-Game Rewards & Perks",
        ],
      },
    },
  ];

  const filteredCards = useMemo(() => {
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

    return filtered;
  }, [activeTab, searchQuery]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedTemplate(filteredCards[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedTemplate(filteredCards[currentIndex + 1]);
    }
  };

  const renderCards = (cards: any[]) => {
    return cards.map((card, index) =>
      card.type === "secondary" ? (
        <CustomCard
          key={index}
          leftIcon={card.leftIcon}
          rightIcon={card.rightIcon}
          onButtonClick={() => openModal(card, index)}
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
          onButtonClick={() => openModal(card, index)}
        >
          <h2 className="text-3xl font-bold">{card.title}</h2>
          <p className="mt-2 text-medium">{card.subtitle}</p>
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
      {selectedTemplate && (
        <TemplatesModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedTemplate.modalContent.title}
          subtitle={selectedTemplate.modalContent.subtitle}
          description={selectedTemplate.modalContent.description}
          features={selectedTemplate.modalContent.features}
          onTemplateUse={() => {
            alert(`Template ${selectedTemplate.title} used!`);
            closeModal();
          }}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

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

      <div className="grid grid-cols-4 gap-8 mb-8 mt-[3.5rem]">
        {renderCards(filteredCards)}
      </div>

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
