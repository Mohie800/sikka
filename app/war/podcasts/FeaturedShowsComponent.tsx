import Image from "next/image";
import React, { useRef, useState } from "react";
import Typo from "../../component/Typo";
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Headphones,
  PlayArrow,
  PlayArrowRounded,
  PlayCircle,
} from "@mui/icons-material";
import BottomAudioComponent from "./BottomAudioComponent";
import AudioPlayer from "react-h5-audio-player";
import { Button } from "@mui/material";
import { MEDIABASEURL } from "../../api/end-points";
import { useTranslation } from "react-i18next";
import { PodcastShow } from "../../types/Podcasts";
const test = "/With All My Heart.mp3";

interface Props {
  imageUrl: string;
  desc_ar: string;
  desc_en: string;
  episodes: PodcastShow[];
  show_url: string;
}

const FeaturedShowsComponent = ({
  imageUrl,
  desc_ar,
  desc_en,
  episodes,
  show_url,
}: Props) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [open, setopen] = useState(false);
  const [audio, setaudio] = useState("");
  const handlePlayAudio = (a: string, title: string) => {
    setopen(true);
    setaudio(a);
    setpodTitle(title);
  };
  const audioRef = useRef<AudioPlayer | null>(null);

  const [podTitle, setpodTitle] = useState("");

  return (
    <div className="podcast-featured-card-container">
      <BottomAudioComponent
        audio_title={podTitle}
        podcast_title={podTitle}
        setOpen={setopen}
        open={open}
        audioRef={audioRef}
        audio={MEDIABASEURL + "/" + audio}
      />
      <Image
        className="podcast-featured-card-img"
        src={MEDIABASEURL + "/" + imageUrl}
        width={100}
        height={100}
        alt="podcast"
      />

      <div className="podcast-featured-inner-container">
        <Typo className="podcast-featured-card-main-text">
          {currentLanguage == "ar" ? desc_ar : desc_en}
        </Typo>
        <br />
        {episodes.map((episode, index) => {
          return (
            <div key={index} className="podcast-featured-episodes-container">
              <div
                onClick={() =>
                  handlePlayAudio(
                    episode.sound,
                    currentLanguage == "ar"
                      ? episode.title_ar
                      : episode.title_en
                  )
                }
              >
                <PlayCircle
                  color="primary"
                  className="podcast-featured-episodes-btn"
                />
              </div>
              <div>
                <Typo className="podcast-featured-episodes-episode-number">
                  {currentLanguage == "ar"
                    ? episode.title_ar
                    : episode.title_en}
                </Typo>
                <Typo className="podcast-featured-episodes-episode-title">
                  {currentLanguage == "ar"
                    ? episode.title_ar
                    : episode.title_en}
                </Typo>
              </div>
            </div>
          );
        })}
      </div>
      <div className="seperator-container">
        <div className="seperator" />
      </div>
      <div className="podcast-featured-browse-all-container">
        <a href={`/war/podcasts/show/${show_url}`}>
          <Button
            variant="text"
            className="podcast-featured-browse-all-btn"
            endIcon={<ChevronRight />}
          >
            Browse All
          </Button>
        </a>
      </div>
    </div>
  );
};

export default FeaturedShowsComponent;
