"use client";
import React, { useEffect } from "react";
import "./style.css";
import Typo from "../../../../component/Typo";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";
import { useGetArticlesBySerialMutation } from "@/app/services/articles/articlesApi";
import LoadingIndicator from "@/app/component/LoadingIndicator";
import DisplayHtmlContent from "@/app/component/DisplayHtmlContent";
import { MEDIABASEURL } from "@/app/api/end-points";
const Page = () => {
  const params = useParams();
  let mounted = true;
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [getArticles, { data, isLoading }] = useGetArticlesBySerialMutation();

  useEffect(() => {
    const loadScripts = async () => {
      // Helper function to load scripts dynamically
      const loadScript = (src: string): Promise<void> => {
        return new Promise<void>((resolve, reject) => {
          const script = document.createElement("script");
          script.src = src;
          script.async = true;
          script.onload = () => resolve();
          script.onerror = () =>
            reject(new Error(`Failed to load script: ${src}`));
          document.body.appendChild(script);
        });
      };

      try {
        // Load scripts sequentially
        await loadScript("/articles/js/imagesloaded.pkgd.min.js");
        await loadScript("/articles/js/gsap.min.js");
        await loadScript("/articles/js/Observer.min.js");
        await loadScript("/articles/js/utils.js");
        await loadScript("/articles/js/demo2/slideshow.js");
        await loadScript("/articles/js/demo2/index.js");

        // Initialize imagesLoaded after all scripts are loaded
      } catch (error) {
        console.error(error);
      }
    };
    if (mounted && data) {
      loadScripts();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      mounted = false;
    }
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      await getArticles({ id: params["id"].toString() });
    };
    fetchData();
  }, []);

  if (isLoading || !data) {
    return <LoadingIndicator />;
  }

  return (
    <div className="demo-11">
      <title>
        {currentLanguage == "ar"
          ? " المقالات - سكة 15 ابريل | سكة"
          : "Articles - SIKKA 15 April | SIKKA"}
      </title>
      <main>
        <div className="slides">
          {data.data.map((short, index) => {
            return (
              <div className="slide" key={index}>
                <div
                  style={{
                    backgroundImage: `url(${MEDIABASEURL}/${short.image})`,
                  }}
                  className="slide__img"
                ></div>
                <div className="articles-sub-container">
                  <Typo
                    className="articles-sub-short-title"
                    style={
                      currentLanguage === "ar"
                        ? { justifyContent: "end" }
                        : { justifyContent: "start" }
                    }
                  >
                    {currentLanguage == "ar" ? short.title_ar : short.title_en}
                  </Typo>
                  <Typo
                    className="articles-sub-short-author"
                    style={
                      currentLanguage === "ar"
                        ? { justifyContent: "end" }
                        : { justifyContent: "start" }
                    }
                  >
                    {currentLanguage == "ar"
                      ? short.author.name_ar
                      : short.author.name_en}
                  </Typo>

                  <div className="articles-sub-short-text-container">
                    <DisplayHtmlContent
                      htmlContent={
                        currentLanguage == "ar"
                          ? short.content_ar
                          : short.content_en
                      }
                      color="white"
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <div className="mouse_scroll">
            <div>
              <span className="m_scroll_arrows unu"></span>
              <span className="m_scroll_arrows doi"></span>
              <span className="m_scroll_arrows trei"></span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
