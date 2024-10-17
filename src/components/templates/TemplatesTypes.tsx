import { DetailedHTMLProps, HTMLAttributes } from "react";

export const Card = ({ ...props }: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
  const { children, className, ...rest } = props;
  return (
    <div
      style={{
        background: 'linear-gradient(180deg, rgba(255, 250, 205, 0.40) 0%, #FFFACD 100%)',
      }}
      className={`p-8 rounded-3xl w-[405.33px] h-[180px] ${className ? className : ""}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export const TemplatesTypes = () => {
  const cardData = [
    {
      title: "Conferences",
      text: "Templates tailored for professional and academic conferences.",
    },
    {
      title: "Festivals",
      text: "Manage music, art, and cultural festivals with ease.",
    },
    {
      title: "Gaming",
      text: "Templates for gaming tournaments and eSports events.",
    },
  ];

  return (
    <div className="flex justify-center gap-8">
      {cardData.map((card, index) => (
        <Card key={index}>
          <h2 className="text-6xl uppercase font-bold">{card.title}</h2>
          <p className="mt-2 font-medium">{card.text}</p>
        </Card>
      ))}
    </div>
  );
};
