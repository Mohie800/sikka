import React, { useEffect, useState } from "react";
import LineWithDots from "./LineWithDots";
import YearsList from "./Years";

export const AboutTimeline = () => {
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const years = [2015, 2016, 2017, 2018];
  const numDots = years.length; // Number of dots should match number of years

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveDotIndex((prevIndex) => (prevIndex + 1) % numDots);
    }, 5000); // Change active dot every 2 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [numDots]);
  return (
    <div className="about-timeline-container">
      <LineWithDots activeDotIndex={activeDotIndex} numDots={numDots} setActiveDotIndex={setActiveDotIndex} />
      <YearsList years={years} activeYearIndex={activeDotIndex} setActiveDotIndex={setActiveDotIndex} />
      </div>
  );
};
