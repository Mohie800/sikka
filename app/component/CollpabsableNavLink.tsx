"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import { usePathname, useRouter } from "next/navigation";
import InnerCollapsableElement from "./InnerCollapsableElement";
import Typo from "./Typo";
import { useTranslation } from "react-i18next";

export default function CollpsableNavLink({
  options,
  name,
}: {
  options: {
    name: string;
    path: string;
    content_en: string;
    content_ar: string;
  }[];
  name: string;
}) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const pathName = usePathname();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const router = useRouter();

  return (
    <>
      <ButtonGroup
        style={
          currentLanguage == "ar" ? { direction: "rtl" } : { direction: "ltr" }
        }
        variant="contained"
        ref={anchorRef}
        aria-label="Button group with a nested menu"
        sx={{
          boxShadow: "none",
        }}
      >
        <Button
          variant="text"
          sx={{ color: "white", fontSize: "12px", fontWeight: "500" }}
          onClick={handleToggle}
        >
          <Typo>{name}</Typo>
        </Button>
      </ButtonGroup>
      <InnerCollapsableElement
        open={open}
        options={options}
        anchorRef={anchorRef}
        handleClose={handleClose}
        handleMenuItemClick={handleMenuItemClick}
      />
    </>
  );
}
