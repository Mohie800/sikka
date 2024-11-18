"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import "./style.css";
import { Button } from "@mui/material";
import Typo from "@/app/component/Typo";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import { useGetArticlesBySerialMutation } from "@/app/services/articles/articlesApi";
import LoadingIndicator from "@/app/component/LoadingIndicator";
import { MEDIABASEURL } from "@/app/api/end-points";
const Page = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  let params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      await getArticlesBySerial({ id: params["id"].toString() });
    };
    fetchData();
  }, []);

  const [getArticlesBySerial, { data, isLoading }] =
    useGetArticlesBySerialMutation();
  if (isLoading || !data) {
    return <LoadingIndicator />;
  }

  console.log("data +++++++++", data);

  return (
    <div
      className="article-id-outer-container"
      style={
        currentLanguage == "ar" ? { direction: "rtl" } : { direction: "ltr" }
      }
    >
      <title>
        {currentLanguage == "ar"
          ? "المقالات - سكة الثورة | سكة"
          : "Articles - SIKKA Revolution | SIKKA"}
      </title>
      <div className="article-id-container">
        <Typo className="article-id-container-text">
          {currentLanguage == "ar"
            ? data.category.name_ar
            : data.category.name_en}
        </Typo>
      </div>
      <div className="container">
        <main className="grid">
          {data.data.map((art, index) => {
            return (
              <article key={index}>
                <Image
                  width={100}
                  height={100}
                  src={MEDIABASEURL + "/" + art.image}
                  alt="Sample photo"
                  className="articles-id-img"
                />
                <div
                  className="text"
                  style={
                    currentLanguage == "ar"
                      ? { direction: "rtl" }
                      : { direction: "ltr" }
                  }
                >
                  <h3 className="articles-id-header-text">
                    {currentLanguage == "ar" ? art.title_ar : art.title_en}
                  </h3>
                  <p className="articles-id-desc-text">
                    {currentLanguage == "ar" ? art.summary_ar : art.summary_en}
                  </p>

                  <Button
                    variant="contained"
                    href={`/rev/articles-sub/${art.serial_link}`}
                    className="article-id-btn"
                  >
                    <Typo>See More</Typo>
                  </Button>
                </div>
              </article>
            );
          })}
        </main>
      </div>
    </div>
  );
};

export default Page;
