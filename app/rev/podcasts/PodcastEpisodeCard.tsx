import Image from "next/image";
import React, { useRef, useState } from "react";
import Typo from "../../component/Typo";
import {
  Headphones,
  PlayArrow,
  PlayArrowRounded,
  PlayCircle,
} from "@mui/icons-material";
import BottomAudioComponent from "./BottomAudioComponent";
import AudioPlayer from "react-h5-audio-player";
import { MEDIABASEURL } from "../../api/end-points";
const test = "/With All My Heart.mp3";

interface Props {
  podcast_title: string;
  audio_title: string;
  image_url: string;
  category: string;
  title: string;
  audio_url: string;
  link: string;
}

const PodcastEpisodeCard = ({
  audio_title,
  audio_url,
  category,
  image_url,
  podcast_title,
  title,
  link,
}: Props) => {
  const [open, setopen] = useState(false);
  const handlePlayAudio = () => {
    setopen(true); // Update open to trigger the effect
  };
  const audioRef = useRef<AudioPlayer | null>(null);

  return (
    <div className="podcast-latest-card-container">
      <BottomAudioComponent
        audio_title={audio_title}
        podcast_title={podcast_title}
        setOpen={setopen}
        open={open}
        audioRef={audioRef}
        audio={MEDIABASEURL + "/" + audio_url}
      />
      <Image
        className="podcast-latest-card-img"
        src={MEDIABASEURL + "/" + image_url}
        width={100}
        height={100}
        alt="podcast"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "4px",
          width: "fit-content",
        }}
      >
        <Headphones fontSize="small" color="primary" />
        <Typo className="podcast-latest-card-sec-text">{category}</Typo>
      </div>
      <a href={`/rev/podcasts/episode/${link}`}>
        <Typo className="podcast-latest-card-main-text">{title}</Typo>
      </a>
      <div onClick={handlePlayAudio}>
        <PlayCircle className="podcast-latest-play-icon-episodes" />
      </div>
    </div>
  );
};

export default PodcastEpisodeCard;
