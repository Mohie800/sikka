"use client";
import { Typography, TypographyProps } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

interface TypoProps extends TypographyProps {
  children: React.ReactNode;
}

const Typo: React.FC<TypoProps> = ({ children, ...props }) => {
  const { t, i18n } = useTranslation();

  return (
    <Typography {...props} fontFamily={"unset"}>
      {t(`${children}`)}
    </Typography>
  );
};

export default Typo;
