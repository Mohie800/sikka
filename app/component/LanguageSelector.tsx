"use client";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { setLanguagePreference } from "../internationalization/i18";
import "./style.css";
import { usePathname } from "next/navigation";
const LanguageSelector = () => {
  const lngs: Record<string, { nativeName: string }> = {
    en: { nativeName: "عربي" },
    ar: { nativeName: "English" },
  };
  const { i18n } = useTranslation();
  const pathName = usePathname();

  const currentLanguage = i18n.language;
  const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage);

  const handleLanguageChange = () => {
    const languages = Object.keys(lngs);
    const currentIndex = languages.indexOf(selectedLanguage);
    const nextIndex = (currentIndex + 1) % languages.length;
    const nextLanguage = languages[nextIndex];

    setSelectedLanguage(nextLanguage);
    setLanguagePreference(nextLanguage);
  };

  const [deviceSize, changeDeviceSize] = useState(0);
  const [isDesktop, setisDesktop] = useState(false);
  const [isTablet, setisTablet] = useState(false);
  const [isMobilePhone, setisMobilePhone] = useState(false);

  useEffect(() => {
    if (deviceSize != 0) {
      setisDesktop(deviceSize > 1025);
      setisTablet(deviceSize < 1024 && deviceSize >= 768);
      setisMobilePhone(deviceSize < 767);
    }
  }, [deviceSize]);

  useEffect(() => {
    if (window) changeDeviceSize(window.innerWidth);
  }, []);

  return (
    <div
      className="lang-container"
      style={
        !isMobilePhone
          ? pathName == "/rev/articles" || pathName == "/war/articles"
            ? currentLanguage == "ar"
              ? { left: "10px", color: "black" }
              : { left: "10px", color: "black" }
            : currentLanguage == "ar"
            ? { left: "10px" }
            : { left: "10px" }
          : { right: "0", left: "0" }
      }
      onClick={handleLanguageChange}
    >
      <Button className="header-language-btn" color="info">
        {lngs[selectedLanguage].nativeName}
      </Button>
    </div>
  );
};

export default LanguageSelector;
