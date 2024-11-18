import React from "react";
import "./style.css";

const LineWithDots = ({
  numDots = 5,
  activeDotIndex,
  setActiveDotIndex,
}: {
  numDots: number;
  activeDotIndex: number;
  setActiveDotIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="line-with-dots">
      <div className="line"></div>
      {Array.from({ length: numDots }).map((_, index) => {
        let dotClass = "";
        if (index === activeDotIndex) {
          if (index === 0) {
            dotClass = "active-top";
          } else if (index === numDots - 1) {
            dotClass = "active-bot";
          } else {
            dotClass = "active-mid";
          }
        }

        return (
          <div
            key={index}
            className={`dot ${dotClass}`}
            onClick={() => setActiveDotIndex(index)}
          ></div>
        );
      })}
    </div>
  );
};

export default LineWithDots;
