"use client";
import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import Typo from "../../component/Typo";
import Image from "next/image";
import { Button, IconButton } from "@mui/material";
import { PlayCircle } from "@mui/icons-material";
import ReactAudioPlayer from "react-audio-player";
import AudioPlayer from "react-h5-audio-player";
import BottomAudioComponent from "./BottomAudioComponent";

const test = "/With All My Heart.mp3";

interface Props {
  imageUrl: string;
  category: string;
  title: string;
  audio: string;
  category_url:string
}

const HeroCard = ({ category, imageUrl, title, audio,category_url }: Props) => {
  const audioRef = useRef<AudioPlayer | null>(null);
  const [open, setopen] = useState(false);
  const handlePlayAudio = () => {
    setopen(true); // Update open to trigger the effect
  };

  return (
    <div className="hero-card-container">
      <Typo className="hero-card-feature-text">Recent Episode</Typo>

      <BottomAudioComponent
        audio_title={title}
        podcast_title={title}
        setOpen={setopen}
        open={open}
        audioRef={audioRef}
        audio={audio}
      />

      <div className="hero-card-inner-container">
        <Image
          src={imageUrl}
          alt="logo"
          width={100}
          height={100}
          className="hero-card-img"
        />
        <div>
          <Typo className="hero-card-season-font">{category}</Typo>
          <Typo className="hero-card-season-font-title">{title}</Typo>
        </div>
      </div>
      <div className="hero-card-listen-btns-container">
        <div
          className="hero-card-listen-now-container"
          onClick={handlePlayAudio}
        >
          <PlayCircle className="hero-card-play-btn" />
          <Typo className="hero-card-listen-now-text">Listen Now</Typo>
        </div>
        <div className="podcast-browse-all-div">
          <a href={`/war/podcasts/${category_url}`}>
            <Button variant="contained" className="hero-card-browse-all-btn">
              Browse All
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
