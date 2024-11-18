"use client";
import React, { useEffect } from "react";
import "../../[list]/style.css";
import PodcastEpisodeCard from "../../PodcastEpisodeCard";
import Typo from "@/app/component/Typo";
import { useTranslation } from "react-i18next";
import {
  useGetPodcastCategoryEpisodesMutation,
  useGetPodcastShowDetailsMutation,
} from "@/app/services/podcasts/podcastsApi";
import { usePathname } from "next/navigation";
import { CircularProgress } from "@mui/material";
const Page = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const path = usePathname();
  console.log(path.split("/podcasts/show/")[1]);

  useEffect(() => {
    const fetchData = async () => {
      if (path.split("/podcasts/show/")[1])
        await getPodcastShowDetail({ id: path.split("/podcasts/show/")[1] });
    };
    fetchData();
  }, []);

  const [getPodcastShowDetail, { data: show, isLoading: isLoadingshow }] =
    useGetPodcastShowDetailsMutation();

  if (!path.split("/podcasts/show/")[1])
    return <CircularProgress color="info" />;

  return (
    <div>
      <title>
        {currentLanguage == "ar"
          ? " بودكاستات - سكة الثورة | سكة"
          : "Podcasts - SIKKA Revolution | SIKKA"}
      </title>
      {isLoadingshow || !show ? (
        <div className="loading-whole-page">
          <CircularProgress color="info" />
        </div>
      ) : (
        <div className="podcasts-list-hero-container">
          <div className="podcast-list-hero-wrapper">
            <Typo className="podcasts-list-hero-title">
              {currentLanguage == "ar" ? show.data.name_ar : show.data.name_en}
            </Typo>
            <Typo className="podcasts-list-hero-subtitle">
              {currentLanguage == "ar"
                ? show.data.description_ar
                : show.data.description_en}
            </Typo>
          </div>
        </div>
      )}
      <div className="podcasts-list-episodes-container">
        {isLoadingshow || !show ? (
          <CircularProgress color="info" />
        ) : (
          show.data.podcasts.map((episode, index) => {
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
                      ? episode.title_ar
                      : episode.title_en
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
