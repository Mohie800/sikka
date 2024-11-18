"use client";
import React, { useEffect } from "react";
import "./style.css";
import HeroCard from "./HeroCard";
import LatestPodcastsCard from "./LatestPodcastsCard";
import FeaturedShowsComponent from "./FeaturedShowsComponent";
import heroImg from "./podcast-hero.webp";
import Image from "next/image";
import PodcastEpisodeCard from "./PodcastEpisodeCard";
import { useTranslation } from "react-i18next";

import { CircularProgress } from "@mui/material";
import { useHorizontalScroll } from "@/app/component/useScroll";
import {
  useGetPodcastCatMutation,
  useGetPodcastEpisodesMutation,
  useGetPodcastShowsMutation,
} from "@/app/services/podcasts/podcastsApi";
import Typo from "@/app/component/Typo";
import { MEDIABASEURL } from "@/app/api/end-points";
import SeeAllBtn from "@/app/component/SeeAllBtn";
const Page = () => {
  const catRef = useHorizontalScroll<HTMLDivElement>();
  const epiRef = useHorizontalScroll<HTMLDivElement>();
  const fetRef = useHorizontalScroll<HTMLDivElement>();
  const fetRef2 = useHorizontalScroll<HTMLDivElement>();

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  useEffect(() => {
    const fetchData = async () => {
      await getPodcastCat();
      await getPodcastShow();
      await getPodcastEpisodes();
    };
    fetchData();
  }, []);

  const [getPodcastCat, { data: cat, isLoading: isLoadingCat }] =
    useGetPodcastCatMutation();
  const [getPodcastShow, { data: shows, isLoading: isLoadingShows }] =
    useGetPodcastShowsMutation();
  const [getPodcastEpisodes, { data: episodes, isLoading: isLoadingEpisodes }] =
    useGetPodcastEpisodesMutation();

  return (
    <div>
      <title>
        {currentLanguage == "ar"
          ? " بودكاستات - سكة الثورة "
          : "Podcasts - SIKKA Revolution"}
      </title>
      <div className="podcast-bg-image">
        <div
          className="podcast-hero-container"
          style={
            currentLanguage == "ar"
              ? { direction: "rtl" }
              : { direction: "ltr" }
          }
        >
          <div className="podcast-hero-text-container">
            <Typo className="podcast-hero-main-text">
              Sikka Podcasts - Revolution
            </Typo>
            <Typo className="podcast-hero-sec-text">
              Narratives and audio recordings documenting artistic practices and
              social movements in Sudan since the December Revolution
            </Typo>
          </div>

          {/* Hero card */}
          {isLoadingEpisodes || !episodes ? (
            <CircularProgress color="info" />
          ) : (
            <div
              className="podcast-hero-image-container"
              style={
                currentLanguage == "ar" ? { left: "13%" } : { right: "13%" }
              }
            >
              <HeroCard
                category_url={episodes.latest_podcast.category.serial_link}
                audio={MEDIABASEURL + "/" + episodes.latest_podcast.sound}
                category={
                  currentLanguage == "ar"
                    ? episodes.latest_podcast.category.name_ar
                    : episodes.latest_podcast.category.name_en
                }
                imageUrl={MEDIABASEURL + "/" + episodes.latest_podcast.image}
                title={
                  currentLanguage == "ar"
                    ? episodes.latest_podcast.title_ar
                    : episodes.latest_podcast.title_en
                }
              />
            </div>
          )}
        </div>

        {/* categories */}
        <div
          className="podcast-categories-container"
          style={
            currentLanguage == "ar"
              ? { direction: "rtl" }
              : { direction: "ltr" }
          }
        >
          <Typo className="podcast-categories-header">Categories</Typo>
          <div
            ref={catRef}
            className="podcast-latest-outer-container no-scrollbar"
          >
            {isLoadingCat || !cat ? (
              <CircularProgress color="info" />
            ) : (
              cat.data.map((c, index) => {
                return (
                  <LatestPodcastsCard
                    link={c.serial_link}
                    url={MEDIABASEURL + "/" + c.image}
                    name={currentLanguage == "ar" ? c.name_ar : c.name_en}
                    key={index}
                  />
                );
              })
            )}
          </div>
        </div>
        <br />

        {/* Episodes */}
        <div
          className="podcast-categories-container"
          style={
            currentLanguage == "ar"
              ? { direction: "rtl" }
              : { direction: "ltr" }
          }
        >
          <Typo className="podcast-categories-header">Episodes</Typo>
          <div
            className="podcast-latest-outer-container no-scrollbar"
            ref={epiRef}
          >
            {isLoadingEpisodes || !episodes ? (
              <CircularProgress color="info" />
            ) : (
              episodes.latest_podcasts.map((episode, index) => {
                return (
                  <PodcastEpisodeCard
                    audio_title={
                      currentLanguage == "ar"
                        ? episode.title_ar
                        : episode.title_en
                    }
                    audio_url={episode.sound}
                    category={
                      currentLanguage == "ar"
                        ? episode.category.name_ar
                        : episode.category.name_en
                    }
                    image_url={episode.image}
                    podcast_title={
                      currentLanguage == "ar"
                        ? episode.title_ar
                        : episode.title_en
                    }
                    title={
                      currentLanguage == "ar"
                        ? episode.title_ar
                        : episode.title_en
                    }
                    key={index}
                    link={episode.serial_link}
                  />
                );
              })
            )}
          </div>
          <SeeAllBtn
            text_ar="مشاهدة الكل"
            text_en="SEE ALL EPISODES"
            path="/"
            color="white"
            background="black"
          />
        </div>
        <br />
        <Typo
          className="podcast-feature-header"
          style={
            currentLanguage == "ar"
              ? { direction: "rtl" }
              : { direction: "ltr" }
          }
        >
          Featured Shows
        </Typo>
        <div
          className="podcast-featured-container no-scrollbar "
          ref={fetRef}
          style={
            currentLanguage == "ar"
              ? { direction: "rtl" }
              : { direction: "ltr" }
          }
        >
          <div className="podcast-featured-outer-container" ref={fetRef2}>
            {isLoadingShows || !shows ? (
              <CircularProgress color="info" />
            ) : (
              shows.data.map((show, index) => {
                return (
                  <FeaturedShowsComponent
                    desc_ar={show.description_ar}
                    desc_en={show.description_en}
                    imageUrl={show.image}
                    episodes={show.podcasts}
                    key={index}
                    show_url={show.serial_link}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
