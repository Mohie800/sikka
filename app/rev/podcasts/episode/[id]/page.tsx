"use client";
import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import demoImg from "./img.png";
import Image from "next/image";
import { CalendarMonth, PlayCircle } from "@mui/icons-material";
import Typo from "@/app/component/Typo";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import AudiotrackOutlinedIcon from "@mui/icons-material/AudiotrackOutlined";
import FormatListNumberedOutlinedIcon from "@mui/icons-material/FormatListNumberedOutlined";
import BottomAudioComponent from "../../BottomAudioComponent";
import AudioPlayer from "react-h5-audio-player";
import PodcastEpisodeCard from "../../PodcastEpisodeCard";
import { useHorizontalScroll } from "@/app/component/useScroll";
import { useGetPodcastEpisodeDetailsMutation } from "@/app/services/podcasts/podcastsApi";
import { CircularProgress, Divider } from "@mui/material";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { MEDIABASEURL } from "@/app/api/end-points";
const test = "/With All My Heart.mp3";

const Page = () => {
  const [open, setopen] = useState(false);
  const handlePlayAudio = () => {
    setopen(true); // Update open to trigger the effect
  };

  const audioRef = useRef<AudioPlayer | null>(null);
  const epiRef = useHorizontalScroll<HTMLDivElement>();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const [deviceSize, changeDeviceSize] = useState(0);
  const [isDesktop, setisDesktop] = useState(false);
  const [isTablet, setisTablet] = useState(false);
  const [isMobilePhone, setisMobilePhone] = useState(false);
  const path = usePathname();
  console.log(path.split("/podcasts/episode/")[1]);

  useEffect(() => {
    if (deviceSize != 0) {
      setisDesktop(deviceSize > 1025);
      setisTablet(deviceSize < 1024 && deviceSize >= 768);
      setisMobilePhone(deviceSize < 767);
    }
  }, [deviceSize]);

  useEffect(() => {
    if (window) changeDeviceSize(window.innerWidth);
    const fetchData = async () => {
      if (path.split("/podcasts/episode/")[1])
        await getPodcastEpisodeDetail({
          id: path.split("/podcasts/episode/")[1],
        });
    };
    fetchData();
  }, []);

  const [
    getPodcastEpisodeDetail,
    { data: episode, isLoading: isLoadingEpisode },
  ] = useGetPodcastEpisodeDetailsMutation();

  if (!path.split("/podcasts/episode/")[1])
    return <CircularProgress color="info" />;

  return (
    <div
      style={
        currentLanguage == "ar" ? { direction: "rtl" } : { direction: "ltr" }
      }
    >
      <title>
        {currentLanguage == "ar"
          ? " بودكاستات - سكة الثورة | سكة"
          : "Podcasts - SIKKA Revolution | SIKKA"}
      </title>
      {isLoadingEpisode || !episode ? (
        <div className="loading-whole-page">
          <CircularProgress color="info" />
        </div>
      ) : (
        <div className="podcast-epid-container">
          <BottomAudioComponent
            audio_title={
              currentLanguage == "ar"
                ? episode.data.title_ar
                : episode.data.title_en
            }
            podcast_title={
              currentLanguage == "ar"
                ? episode.data.title_ar
                : episode.data.title_en
            }
            setOpen={setopen}
            open={open}
            audioRef={audioRef}
            audio={MEDIABASEURL + "/" + episode.data.sound}
          />
          <div className="podcast-epid-hero-container">
            <div className="podcast-epid-hero-img-container">
              <Image
                src={MEDIABASEURL + "/" + episode.data.image}
                className="podcast-epid-hero-img"
                width={100}
                height={100}
                alt="hero"
              />
              <div
                onClick={handlePlayAudio}
                style={
                  !isMobilePhone && currentLanguage == "ar"
                    ? { left: "1vw" }
                    : !isMobilePhone && currentLanguage != "ar"
                    ? {
                        right: "1vw",
                      }
                    : isMobilePhone && currentLanguage == "ar"
                    ? {
                        left: "10vw",
                      }
                    : {
                        right: "10vw",
                      }
                }
                className="play-circle-episode-container"
              >
                <PlayCircle
                  style={
                    !isMobilePhone
                      ? open
                        ? { bottom: "20vh" }
                        : { bottom: "1vh" }
                      : open
                      ? { bottom: "30vh" }
                      : { bottom: "1vh" }
                  }
                  className="podcast-epid-play-icon "
                />
              </div>
            </div>
            <div className="podcast-epid-hero-desc-container">
              <div className="podcast-epid-hero-desc-title-container">
                <Typo className="podcast-epid-title">
                  {currentLanguage == "ar"
                    ? episode.data.title_ar
                    : episode.data.title_en}
                </Typo>
                <div className="podcast-epid-desc-container">
                  <Typo className="podcast-epid-desc-text">
                    {currentLanguage == "ar"
                      ? episode.data.description_ar
                      : episode.data.description_en}
                  </Typo>
                </div>
              </div>
            </div>
          </div>

          <Divider sx={{ height: "10vh" }} />

          <div className="podcast-epid-related-container">
            <Typo className="podcast-epid-related-text">Related Episode</Typo>
            <div
              className="podcast-epid-related-scroll no-scrollbar"
              ref={epiRef}
            >
              {episode.relatedPodcasts.map((related, index) => {
                return (
                  <PodcastEpisodeCard
                    key={index}
                    audio_title={
                      currentLanguage == "ar"
                        ? related.title_ar
                        : related.title_en
                    }
                    audio_url={related.sound}
                    category={related.title_en}
                    image_url={related.image}
                    podcast_title={
                      currentLanguage == "ar"
                        ? related.title_ar
                        : related.title_en
                    }
                    title={
                      currentLanguage == "ar"
                        ? related.title_ar
                        : related.title_en
                    }
                    link={related.serial_link}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
