import Image from "next/image";
import React, { useRef, useState } from "react";
import Typo from "../../component/Typo";

const test = "/With All My Heart.mp3";

const LatestPodcastsCard = ({
  name,
  url,
  link,
}: {
  url: string;
  name: string;
  link: string;
}) => {
  return (
    <a href={`/rev/podcasts/${link}`}>
      <div className="podcast-latest-card-container">
        <Image
          className="podcast-latest-card-img"
          src={url}
          width={100}
          height={100}
          alt="podcast"
        />

        <Typo className="podcast-latest-card-main-text">{name}</Typo>
      </div>
    </a>
  );
};

export default LatestPodcastsCard;
