"use client";
import Image from "next/image";
import styles from "./page.module.css";
import HomePage from "./rev/page";
import "./style.css";
import { useEffect, useState } from "react";
import logo from "./rev/logo-white.png";
import Typo from "./component/Typo";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { relative } from "path";
import CookieConsent from "./component/CookieConsent";
export default function Home() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const [revOpen, setrevOpen] = useState(false);
  const [warOpen, setwarOpen] = useState(false);
  const [deviceSize, changeDeviceSize] = useState(0);
  const [isDesktop, setisDesktop] = useState(false);

  const [isTablet, setisTablet] = useState(false);
  const [isMobilePhone, setisMobilePhone] = useState(false);
  let mounted = "first";
  useEffect(() => {
    if (mounted == "first" && window) {
      changeDeviceSize(window.innerWidth);
      mounted = "second";
    }
  }, []);

  useEffect(() => {
    if (deviceSize != 0) {
      setisDesktop(deviceSize > 1025);
      setisTablet(deviceSize < 1024 && deviceSize >= 768);
      setisMobilePhone(deviceSize < 767);
    }
  }, [deviceSize]);
  const [showSettings, setShowSettings] = useState(false);

  const handleSettingsToggle = () => {
    setShowSettings(!showSettings);
  };
  return (
    <div className="home-split-container">
       <title>
        {currentLanguage == "ar"
          ? "سكة"
          : "SIKKA"}
      </title>
      

      <CookieConsent />
      <div
        className="rev-container-relaxed"
        style={
          revOpen
            ? isMobilePhone
              ? { height: "90%" }
              : { width: "90%" }
            : isMobilePhone
            ? { height: "50%" }
            : { width: "50%" }
        }
        onClick={() => {
          setwarOpen(false);
          setrevOpen(true);
        }}
      >
        {revOpen && (
          <div className="home-rev-content">
            <Typo className="home-war-text">
              Archiving and documenting the thought, arts and literature of the
              Sudanese revolution
            </Typo>
            <Button variant="contained" className="home-split-btn" href="/rev">
              <Typo>SIKKA Revolution</Typo>
            </Button>
          </div>
        )}
      </div>
      <div
        className="war-container-relaxed"
        style={
          warOpen
            ? isMobilePhone
              ? { height: "90%" }
              : { width: "90%" }
            : isMobilePhone
            ? { height: "50%" }
            : { width: "50%" }
        }
        onClick={() => {
          setwarOpen(true);
          setrevOpen(false);
        }}
      >
        {warOpen && (
          <div className="home-war-content">
            <Typo className="home-war-text">
              Archiving and documenting the thought, arts and literature of the
              Sudanese revolution
            </Typo>
            <Button
              variant="contained"
              className="home-split-btn"
              href="/war"
            >
              <Typo>SIKKA 15 April</Typo>
            </Button>
          </div>
        )}
      </div>
      <div
        className="home-split-logo-container"
        style={
          revOpen && !warOpen
            ? isMobilePhone
              ? { top: "65%" }
              : { left: "65%" }
            : !revOpen && warOpen
            ? isMobilePhone
              ? {
                  top: "35%",
                }
              : { left: "35%" }
            : { left: "50%" }
        }
      >
        <Image
          width={100}
          height={100}
          src={logo}
          alt="logo"
          className="home-split-logo"
        />
      </div>
    </div>
  );
}
