'use client'
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import Typo from "../component/Typo";
import "./styles.css";
import { useTranslation } from "react-i18next";

const SeeMoreBtn = ({text}:{text:string}) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
 
  return (
    <Button
      className="home-about-btn"
      variant="contained"
      style={{
        direction:"ltr"
      }}
      endIcon={currentLanguage != "ar" ? <ArrowForward /> : <ArrowBack />}
    >
      <Typo>{text}</Typo>
    </Button>
  );
};

export default SeeMoreBtn;
