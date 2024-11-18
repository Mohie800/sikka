"use client";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Typo from "../../component/Typo";
import "./style.css";
import SwiperEffectCover from "../../component/SwiperEffectCover";
import { useTranslation } from "react-i18next";
import {
  useGetGalleryCatMutation,
  useGetGalleryCatWarMutation,
} from "../../services/gallery/galleryApi";
import LoadingIndicator from "../../component/LoadingIndicator";
const Index = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [deviceSize, changeDeviceSize] = useState(0);
  const [isDesktop, setisDesktop] = useState(false);

  const [isTablet, setisTablet] = useState(false);
  const [isMobilePhone, setisMobilePhone] = useState(false);

  useEffect(() => {
    changeDeviceSize(window.innerWidth);
    if (deviceSize != 0) {
      setisDesktop(deviceSize > 1025);
      setisTablet(deviceSize < 1024 && deviceSize >= 768);
      setisMobilePhone(deviceSize < 767);
    }
  }, [deviceSize]);

  useEffect(() => {
    const fetchData = async () => {
      await getGalleryCat();
    };
    fetchData();
  }, []);

  const [getGalleryCat, { data, isLoading }] = useGetGalleryCatWarMutation();

  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <div
      className="gallery-container"
      style={
        currentLanguage === "ar" ? { direction: "rtl" } : { direction: "ltr" }
      }
    >
      <title>
        {currentLanguage == "ar"
          ? " معرض الصور - سكة 15 ابريل  "
          : "Gallery - SIKKA 15 April"}
      </title>
      <div
        className="gallery-main-text-container"
        style={
          currentLanguage === "ar"
            ? isMobilePhone
              ? {}
              : {
                  right: "5%",
                }
            : isMobilePhone
            ? { left: 0 }
            : { left: "5%" }
        }
      >
        <Typo className="gallery-header-text">Sikka Gallery - 15 April</Typo>
      </div>
      <div
        className="gallery-images-outer-container"
        style={currentLanguage === "ar" ? { left: "0" } : { right: "0" }}
      >
        <div className="gallery-images-slider-container">
          <SwiperEffectCover
            url="war"
            isMobile={isMobilePhone}
            data={data?.data}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
