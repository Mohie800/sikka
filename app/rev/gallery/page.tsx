"use client";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import { useGetGalleryCatMutation } from "@/app/services/gallery/galleryApi";
import LoadingIndicator from "@/app/component/LoadingIndicator";
import SwiperEffectCover from "@/app/component/SwiperEffectCover";
import Typo from "@/app/component/Typo";
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

  const [getGalleryCat, { data, isLoading }] = useGetGalleryCatMutation();

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
          ? "معرض الصور - سكة الثورة "
          : "SIKKA Gallery - Revolution"}
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
        <Typo className="gallery-header-text">Sikka Gallery - Revolution</Typo>
      </div>
      <div
        className="gallery-images-outer-container"
        style={currentLanguage === "ar" ? { left: "0" } : { right: "0" }}
      >
        <div className="gallery-images-slider-container">
          <SwiperEffectCover
            url="rev"
            isMobile={isMobilePhone}
            data={data?.data}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
