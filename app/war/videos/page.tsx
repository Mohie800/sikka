"use client";
import React, { useEffect } from "react";
import "./style.css";
import Link from "next/link";

import { CircularProgress } from "@mui/material";
import LoadingIndicator from "../../component/LoadingIndicator";
import { useTranslation } from "react-i18next";
import { MEDIABASEURL } from "../../api/end-points";
import {
  useGetVideosCatMutation,
  useGetVideosCatWarMutation,
} from "../../services/videos/videosApi";
import { useRouter } from "next/navigation";
import Typo from "@/app/component/Typo";
import SeeAllBtn from "@/app/component/SeeAllBtn";

const Page = () => {
  let mounted = true;
  useEffect(() => {
    const loadScripts = async () => {
      // Helper function to load scripts dynamically
      const loadScript = (src: string, isModule = false) => {
        return new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = src;
          script.async = true;
          script.type = isModule ? "module" : "text/javascript"; // Set type attribute based on isModule flag
          script.onload = resolve;
          script.onerror = () =>
            reject(new Error(`Failed to load script: ${src}`));
          document.body.appendChild(script);
        });
      };

      try {
        // Load scripts sequentially
        await loadScript("/js/imagesloaded.pkgd.min.js");
        await loadScript("/videos/js/utils.js");
        await loadScript("https://unpkg.com/split-type");
        await loadScript("/js/gsap.min.js");
        await loadScript("/about/js/Flip.min.js");
        await loadScript("/js/ScrollTrigger.min.js");
        await loadScript("/videos/js/content.js");
        await loadScript("/videos/js/preview.js");
        await loadScript("/videos/js/textLinesReveal.js");
        await loadScript("/js/lenis.min.js");
        await loadScript("/videos/js/index.js");

        // Initialize imagesLoaded after all scripts are loaded
      } catch (error) {
        console.error(error);
      }
    };

    const fetchData = async () => {
      await getAllVideosCat();
    };
    if (mounted) {
      loadScripts();
      fetchData();
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      mounted = false;
    };
  }, []);

  const [getAllVideosCat, { data: videosCat, isLoading }] =
    useGetVideosCatWarMutation();

  console.log(videosCat);

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const router = useRouter();

  console.log(isLoading);
  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <div id="videos-main">
      <title>
        {currentLanguage == "ar"
          ? "الفيديوهات - سكة 15 ابريل "
          : "Videos - SIKKA 15 April"}
      </title>
      <div className="videos-main-title-container">
        <Typo className="videos-main-title-text">Videos - 15 April</Typo>
      </div>
      <main>
        <section className="preview-wrap">
          {videosCat?.data.map((i, index) => {
            return (
              <div
                key={index}
                className="preview"
                onClick={() => router.push(`/war/videos/${i.serial_link}`)}
              >
                <div className="preview__img-wrap">
                  <div className="preview__img">
                    <div
                      className="preview__img-inner"
                      style={{
                        backgroundImage: `url(${MEDIABASEURL}/${i.image})`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="preview__title">
                  <h2 className="preview__title-main">
                    <span className="oh">
                      <span className="oh__inner">
                        <a href={`/war/videos/${i.serial_link}`}>
                          {currentLanguage == "ar" ? i.name_ar : i.name_en}
                        </a>
                      </span>
                    </span>
                  </h2>
                </div>
              </div>
            );
          })}
        </section>
      </main>
      <SeeAllBtn
        text_ar="مشاهدة الكل"
        text_en="SEE ALL"
        path="/"
        color="white"
        background="black"
      />
    </div>
  );
};

export default Page;
