"use client";
import React, { useEffect } from "react";
import "./style.css";
import PodcastEpisodeCard from "../PodcastEpisodeCard";
import Typo from "@/app/component/Typo";
import { useTranslation } from "react-i18next";
import { useGetPodcastCategoryEpisodesMutation } from "@/app/services/podcasts/podcastsApi";
import { usePathname } from "next/navigation";
import { CircularProgress } from "@mui/material";
const Page = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const path = usePathname();
  console.log(path.split("/podcasts/")[1]);

  useEffect(() => {
    const fetchData = async () => {
      if (path.split("/podcasts/")[1])
        await getPodcastCatEpisodes({ id: path.split("/podcasts/")[1] });
    };
    fetchData();
  }, []);

  const [getPodcastCatEpisodes, { data: cat, isLoading: isLoadingCat }] =
    useGetPodcastCategoryEpisodesMutation();

  if (!path.split("/podcasts/")[1]) return <CircularProgress color="info" />;

  return (
    <div>
      <title>
        {currentLanguage == "ar"
          ? " بودكاستات - سكة الثورة | سكة"
          : "Podcasts - SIKKA Revolution | SIKKA"}
      </title>
      {isLoadingCat || !cat ? (
        <div className="loading-whole-page">
          <CircularProgress color="info" />
        </div>
      ) : (
        <div className="podcasts-list-hero-container">
          <div className="podcast-list-hero-wrapper">
            <Typo className="podcasts-list-hero-title">
              {currentLanguage == "ar"
                ? cat.category.name_ar
                : cat.category.name_en}
            </Typo>
            <Typo className="podcasts-list-hero-subtitle">
              {currentLanguage == "ar"
                ? cat.category.description_ar
                : cat.category.description_en}
            </Typo>
          </div>
        </div>
      )}
      <div className="podcasts-list-episodes-container">
        {isLoadingCat || !cat ? (
          <div className="loading-whole-para">
            <CircularProgress color="info" />
          </div>
        ) : (
          cat.data.map((episode, index) => {
            return (
              <div key={index} className="podcasts-list-episode">
                <PodcastEpisodeCard
                  audio_title={
                    currentLanguage == "ar"
                      ? episode.title_ar
                      : episode.title_en
                  }
                  podcast_title={
                    currentLanguage == "ar"
                      ? episode.title_ar
                      : episode.title_en
                  }
                  category={
                    currentLanguage == "ar"
                      ? episode.category.name_ar
                      : episode.category.name_en
                  }
                  title={
                    currentLanguage == "ar"
                      ? episode.title_ar
                      : episode.title_en
                  }
                  image_url={episode.image}
                  audio_url={episode.sound}
                  key={index}
                  link={episode.serial_link}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Page;
