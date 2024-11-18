"use client";
import React, { useEffect } from "react";
import "./style.css";
import testImg from "./sunset-tranquil-water-nautical-vessel-sails-into-dusk-generated-by-artificial-intelligence.jpg";
import Image from "next/image";
import Typo from "@/app/component/Typo";
import ReactAudioPlayer from "react-audio-player";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import ShareBtn from "./ShareBtn";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import { useGetArticleDetailMutation } from "@/app/services/articles/articlesApi";
import LoadingIndicator from "@/app/component/LoadingIndicator";
import { MEDIABASEURL } from "@/app/api/end-points";
import DisplayHtmlContent from "@/app/component/DisplayHtmlContent";

const test = "/With All My Heart.mp3";
const formatTime = (seconds: number) => {
  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = date.getUTCSeconds().toString().padStart(2, "0");
  if (hh) {
    return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
  }
  return `${mm}:${ss}`;
};
const Page = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  let params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      await getArticleDetail({ id: params["id"].toString() });
    };
    fetchData();
  }, []);

  const [getArticleDetail, { data, isLoading }] = useGetArticleDetailMutation();
  if (isLoading || !data) {
    return <LoadingIndicator />;
  }

  console.log("data +++++++++", data);

  return (
    <div className="article-sub-id-container">
      <title>
        {currentLanguage == "ar"
          ? " المقالات - سكة 15 ابريل | سكة"
          : "Articles - SIKKA 15 April | SIKKA"}
      </title>
      <div
        className="articles-sub-id-img-title-container"
        style={
          currentLanguage == "ar" ? { direction: "rtl" } : { direction: "ltr" }
        }
      >
        <div className="articles-sub-id-hero-text-container">
          <Typo className="article-header">
            {currentLanguage == "ar" ? data.data.title_ar : data.data.title_en}
          </Typo>
          <Typo className="article-auther-name">
            {currentLanguage == "ar"
              ? data.data.author.name_ar
              : data.data.author.name_en}
          </Typo>
          <Typo className="article-category">
            {currentLanguage == "ar"
              ? data.data.category.name_ar
              : data.data.category.name_en}
          </Typo>
          <div style={{ margin: "10px 0 10px 0" }}></div>
        </div>
        <div className="articles-sub-id-hero-container">
          <Image
            src={MEDIABASEURL + "/" + data.data.image}
            alt="img"
            className="articles-sub-id-hero-img"
            width={1000}
            height={1000}
            unoptimized
          />
        </div>
      </div>
      <div className="articles-sub-id-text-container">
        <div className="articles-sub-id-audio-container">
          {/* <AudioPlayer
            progressJumpStep={10000}
            layout="horizontal-reverse"
            showSkipControls={false}
            showJumpControls={false}
            customAdditionalControls={[]}
            className="custom-audio-player"
            src={test}
          /> */}
          <audio
            controls
            className="audio-player-article"
            style={{
              borderRadius: "0",
            }}
          >
            <source
              src={MEDIABASEURL + "/" + data.data.sound}
              type="audio/mpeg"
            />
            Your browser does not support the audio element.
          </audio>
          <div className="articles-share-icon-container">
            <ShareBtn />
          </div>
        </div>
        <div style={{ margin: "10px 0 10px 0" }}></div>

        <div style={{ margin: "10px 0 10px 0" }}></div>

        <DisplayHtmlContent
          htmlContent={
            currentLanguage == "ar"
              ? data.data.content_ar
              : data.data.content_en
          }
          color="black"
        />

        {/* <Typo className="articles-sub-id-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          condimentum in libero eu vulputate. Suspendisse potenti. Nunc et
          accumsan enim, ac malesuada sem. Maecenas rutrum ante vulputate nulla
          sollicitudin, quis aliquet quam tincidunt. Quisque faucibus nibh nisi,
          sed tincidunt turpis sollicitudin nec. Vestibulum sed elit tempus,
          sollicitudin velit in, scelerisque lacus. Proin a enim molestie,
          iaculis elit vel, rhoncus urna. Pellentesque molestie ex leo, at
          dignissim turpis facilisis ut. Nam vitae nisl id enim fermentum
          convallis.
        </Typo>
        <div style={{ margin: "10px 0 10px 0" }}></div> */}
      </div>
    </div>
  );
};

export default Page;
