"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import { useHorizontalScroll } from "@/app/component/useScroll";
import Typo from "@/app/component/Typo";
import { useTranslation } from "react-i18next";
import { useParams } from "next/navigation";
import {
  useGetVideoDetailMutation,
  useGetVideosBySerialMutation,
} from "@/app/services/videos/videosApi";
import LoadingIndicator from "@/app/component/LoadingIndicator";
import { MEDIABASEURL } from "@/app/api/end-points";
import { CircularProgress } from "@mui/material";
import Image from "next/image";
import { PlayCircle } from "@mui/icons-material";
const Page = () => {
  const list = [1, 2, 3, 4, 5, 6];
  const ref = useHorizontalScroll<HTMLDivElement>();

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  let params = useParams();

  const [url, seturl] = useState("");

  const [getVideosBySerial, { data, isLoading }] =
    useGetVideosBySerialMutation();

  const [getVideosDetail, { data: vidDetails, isLoading: isLoadingDetails }] =
    useGetVideoDetailMutation();

  useEffect(() => {
    const fetchData = async () => {
      await getVideosBySerial({ id: params["id"].toString() });
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (data) seturl(data.data[0].serial_link);
    };
    fetchData();
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      if (url) await getVideosDetail({ id: url });
    };
    fetchData();
  }, [url]);

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

  if (isLoading || isLoadingDetails || !data) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      <title>
        {currentLanguage == "ar"
          ? " الفيديوهات - سكة الثورة | سكة"
          : "Videos - SIKKA Revolution | SIKKA"}
      </title>
      <Typo className="videos-category-header">
        {currentLanguage == "ar"
          ? data.category.name_ar
          : data.category.name_en}
      </Typo>
      <div className="videos-id-container">
        {/* videos */}
        <div className="videos-ids-videos-container">
          {/* main */}
          {vidDetails ? (
            <div className="videos-ids-videos-main-container">
              <video
                className="videos-ids-videos-main-video"
                controls
                width={isMobilePhone ? "100%" : "600px"}
                height={isMobilePhone ? "100%" : "400px"}
              >
                <source
                  src={MEDIABASEURL + "/" + vidDetails.data.video}
                  type="video/mp4"
                />
              </video>
            </div>
          ) : (
            <CircularProgress />
          )}
          {/* slider */}
          <div
            className="videos-ids-videos-slider-container no-scrollbar"
            ref={ref}
          >
            {vidDetails &&
              data.data.map((vid, index) => {
                return vid.serial_link == vidDetails.data.serial_link ? null : (
                  <div
                    style={{ cursor: "pointer", position: "relative" }}
                    key={index}
                    onClick={() => seturl(vid.serial_link)}
                  >
                    <Image
                      width={100}
                      height={100}
                      src={MEDIABASEURL + "/" + vid.image}
                      className="videos-ids-videos-slider-video"
                      alt="vid"
                    />
                    <PlayCircle className="videos-ids-videoa-slider-play-icon" />
                  </div>
                );
              })}
          </div>
        </div>
        {/* desc */}
        {vidDetails ? (
          <div
            className="videos-ids-videos-texts-container"
            style={
              currentLanguage == "ar"
                ? { direction: "rtl" }
                : { direction: "ltr" }
            }
          >
            {/* title */}
            <div className="videos-ids-videos-title-container">
              <Typo className="videos-ids-videos-title-title">
                {currentLanguage == "ar"
                  ? vidDetails.data.title_ar
                  : vidDetails.data.title_en}
              </Typo>
            </div>
            {/* desc */}
            <div className="videos-ids-videos-desc-container">
              <Typo className="videos-ids-videos-desc-desc">
                {currentLanguage == "ar"
                  ? vidDetails.data.details_ar
                  : vidDetails.data.details_en}
              </Typo>
            </div>
          </div>
        ) : (
          <CircularProgress />
        )}
      </div>
    </div>
  );
};

export default Page;
