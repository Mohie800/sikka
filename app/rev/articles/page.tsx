"use client";
import React, { useEffect } from "react";
import "./style.css";
import { Button, CircularProgress } from "@mui/material";
import Image from "next/image";
import test from "./test.png";
import { useTranslation } from "react-i18next";
import { useGetArticlesCatMutation } from "@/app/services/articles/articlesApi";
import LoadingIndicator from "@/app/component/LoadingIndicator";
import Typo from "@/app/component/Typo";
import SeeAllBtn from "@/app/component/SeeAllBtn";
const Page = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  useEffect(() => {
    const fetchData = async () => {
      await getArticlesCat();
    };
    fetchData();
  }, []);

  const [getArticlesCat, { data, isLoading }] = useGetArticlesCatMutation();
  console.log(data);
  if (isLoading || !data) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div
      style={
        currentLanguage == "ar" ? { direction: "rtl" } : { direction: "ltr" }
      }
    >
      <title>
        {currentLanguage == "ar"
          ? "المقالات - سكة الثورة | سكة"
          : "Articles - SIKKA Revolution | SIKKA"}
      </title>
      <div className="articles-title-container">
        <Typo className="articles-title-text">Articles - Revolution</Typo>
      </div>
      <br />
      <div className="grid-no-gap">
        {data.data.map((art, index) => {
          return (
            <div
              key={index}
              className="grid-item"
              style={{ backgroundColor: art.background_color }}
            >
              <Typo className="articles-title-category-text">
                {currentLanguage == "ar" ? art.name_ar : art.name_en}
              </Typo>
              <Typo className="articles-title-category-sub-text">
                {currentLanguage == "ar" ? art.detail_ar : art.detail_en}
              </Typo>
              <a
                href={
                  art.article_display_type_id
                    ? `/rev/articles-sub/short-stories/${art.serial_link}`
                    : `/rev/articles/${art.serial_link}`
                }
              >
                <Button variant="contained" className="articles-see-more-btn">
                  <Typo>See More</Typo>
                </Button>
              </a>
            </div>
          );
        })}
      </div>
      <SeeAllBtn
        text_ar="مشاهدة الكل"
        text_en="SEE ALL"
        path="/"
        color="white"
        background="black"
      />{" "}
    </div>
  );
};

export default Page;
