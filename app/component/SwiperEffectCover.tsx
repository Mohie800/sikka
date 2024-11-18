"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";

// import required modules
import {
  Scrollbar,
  HashNavigation,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Typo from "./Typo";
import { Button } from "@mui/material";
import { GalleryCatData } from "../types/Gallery";
import { MEDIABASEURL } from "../api/end-points";

export default function SwiperEffectCover({
  isMobile,
  data,
  url,
}: {
  isMobile: boolean;
  data: GalleryCatData[] | undefined;
  url:string
}) {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  console.log(data)
  return (
    <>
      <Swiper
        // cssMode={true}
        direction={"horizontal"}
        dir={currentLanguage == "ar" ? "rtl" : "ltr"}
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={isMobile ? 0 : 100}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel]}
        className="mySwiper"
        navigation={true}
        keyboard={true}
        mousewheel={true}
        style={
          !isMobile
            ? currentLanguage == "ar"
              ? { padding: "0 0 0 4vw" }
              : { padding: "0 4vw 0 0vw" }
            : currentLanguage == "ar"
            ? { padding: "0 0 0 4vw", gap: "1rem" }
            : { padding: "0 4vw 0 0vw", gap: "1rem" }
        }
      >
        {data?.map((gal, index) => {
          return (
            <SwiperSlide
              key={index}
              style={
                currentLanguage == "ar"
                  ? { marginRight: "0" }
                  : { marginRight: "90px" }
              }
            >
              <Image
                className="swiper-effect-cover-image"
                width={100}
                height={100}
                alt="img"
                src={MEDIABASEURL + "/" + gal.image}
              />
              <div
                className="gallery-categories-text-container"
                style={
                  currentLanguage == "ar"
                    ? { left: "0", right: "2vw" }
                    : { left: "2vw", right: "0" }
                }
              >
                <Typo className="gallery-categories-text">
                  {currentLanguage == "ar" ? gal.name_ar : gal.name_en}
                </Typo>
                <Typo className="gallery-categories-subtext">
                  {currentLanguage == "ar" ? gal.subtitle_ar : gal.subtitle_en}
                </Typo>
                <Button
                  href={`/${url}/gallery/${gal.serial_link}`}
                  variant="contained"
                  className="gallery-categories-button"
                >
                  <Typo>See More</Typo>
                </Button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
