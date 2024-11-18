import React from "react";
import "./style.css";
import Typo from "../component/Typo";

const YearsList = ({
  years,
  activeYearIndex,
  setActiveDotIndex,
}: {
  years: number[];
  activeYearIndex: number;
  setActiveDotIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className="years-list">
      {years.map((year, index) => {
        let activeClass = "";
        if (index === activeYearIndex) {
          if (index === 0) {
            activeClass = "active-top";
          } else if (index === years.length - 1) {
            activeClass = "active-bot";
          } else {
            activeClass = "active-mid";
          }
        }

        return (
          <div key={index} className={`year-item ${activeClass}`}>
            {activeYearIndex === index ? (
              <div className="about-timeline-card-item">
                <Typo className="about-timeline-card-year">{year}</Typo>
                <Typo className="about-timeline-card-desc">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
                  aut perspiciatis recusandae quam eos corporis vel, fuga vitae!
                  Recusandae
                </Typo>
              </div>
            ) : (
              <div
              onClick={()=>setActiveDotIndex(index)}
              >
                {year}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default YearsList;
