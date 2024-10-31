type Bar = {
  show?: boolean;
  amount?: number;
  widthPercentage?: number;
};

interface IBars {
  barHeight?: number;
  isInView?: boolean;
  color?: string;
  leftBars?: Bar;
  rightBars?: Bar;
  zIndex?: number;
}
export const Bars = ({
  barHeight = 75,
  isInView = true,
  color = "bg-green-500",
  rightBars,
  leftBars,
  zIndex = -1,
}: IBars) => {
  const values = {
    leftBars: {
      amount: leftBars?.amount ?? 3,
      widthPercentage: leftBars?.widthPercentage || 55,
      show: leftBars?.show ?? false,
    },
    rightBars: {
      amount: rightBars?.amount ?? 4,
      widthPercentage: rightBars?.widthPercentage || 37,
      show: rightBars?.show ?? false,
    },
  };

  const leftBarsGenerate = Array.from(
    { length: values.leftBars.amount },
    (_, index) => {
      const top = index * (barHeight * 2) + barHeight;

      return (
        <div
          key={`left-${index}`}
          className={`absolute ${color}`}
          style={{
            top: `${top}px`,
            left: `${isInView ? 0 : "-100%"}`,
            height: `${barHeight}px`,
            transition: "left 1.5s",
            width: `${values.leftBars.widthPercentage}%`,
            zIndex: `${zIndex}`,
          }}
        ></div>
      );
    }
  );

  const rightBarsGenerate = Array.from(
    { length: values.rightBars.amount },
    (_, index) => {
      const top = index * (barHeight * 2);

      return (
        <div
          key={`right-${index}`}
          className={`absolute ${color}`}
          style={{
            top: `${top}px`,
            height: `${barHeight}px`,
            right: `${isInView ? 0 : "-100%"}`,
            transition: "right 1.5s",
            width: `${values.rightBars.widthPercentage}%`,
            zIndex: `${zIndex}`,
          }}
        ></div>
      );
    }
  );
  return (
    <>
      {values.leftBars?.show && leftBarsGenerate}
      {values.rightBars?.show && rightBarsGenerate}
    </>
  );
};
