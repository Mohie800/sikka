import React from "react";
import Typo from "../component/Typo";
import "./style.css";

const SocialMedia = () => {
  return (
    <div className="social-media-container">
      <div className="social-media-second-container">
        <Typo className="social-media-videos-title">Sikka Story</Typo>
        <br />
        <iframe
        className="about-social-vid"
          width="600"
          height="400"
          src="https://www.youtube.com/embed/iqB-30EywPs"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <br />
      <br />
    </div>
  );
};

export default SocialMedia;
