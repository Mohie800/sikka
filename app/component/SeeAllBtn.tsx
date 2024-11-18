"use client";
import React from "react";
import Typo from "./Typo";
import { useTranslation } from "react-i18next";
interface Props {
  color: string;
  background: string;
  text_ar: string;
  text_en: string;
  path: string;
}
const SeeAllBtn = ({ color, background, path, text_ar, text_en }: Props) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div className="see-all-btn-container">
      <button
        className="see-all-btn"
        style={{
          color: color,
          background: background,
          fontFamily: "unset",
        }}
      >
        <Typo>{currentLanguage == "ar" ? text_ar : text_en}</Typo>
      </button>
    </div>
  );
};

export default SeeAllBtn;
