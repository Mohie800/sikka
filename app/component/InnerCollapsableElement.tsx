import React from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Typo from "./Typo";
import Link from "next/link";
import Image from "next/image";
import logo from "../rev/logo-white.png";
import { useTranslation } from "react-i18next";
const InnerCollapsableElement = ({
  open,
  anchorRef,
  handleClose,
  options,
  handleMenuItemClick,
}: {
  open: boolean;
  anchorRef: React.RefObject<HTMLDivElement>;
  options: {
    name: string;
    path: string;
    content_en: string;
    content_ar: string;
  }[];
  handleClose: () => void;
  handleMenuItemClick: (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => void;
}) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <Popper
      style={
        currentLanguage == "ar" ? { direction: "rtl" } : { direction: "ltr" }
      }
      sx={{
        zIndex: 1,
        left: "50% !important",
        top: "4vw !important",

        transform: "translateX(-50%)",
      }}
      open={open}
      role={undefined}
      transition
      disablePortal
      className="popper-header-container"
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom" ? "center " : "center bottom",
          }}
        >
          <Paper className="header-menu-container">
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                id="split-button-menu"
                autoFocusItem
                className="header-outer-elements-container"
              >
                {options.map((option, index) => (
                  <a
                    key={option.name + name}
                    href={`${option.path}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <MenuItem
                      style={{ cursor: "pointer" }}
                      className="header-inner-elements-container"
                      onClick={(event) => handleMenuItemClick(event, index)}
                    >
                      <div>
                        <Typo className="header-inner-elements-font">
                          {option.name}
                        </Typo>
                        <Typo className="header-inner-elements-sub-font">
                          {currentLanguage == "ar"
                            ? option.content_ar
                            : option.content_en}
                        </Typo>
                      </div>
                      <Image
                        className="header-inner-elements-img"
                        width={100}
                        height={100}
                        alt="img"
                        src={"/img/1.jpg"}
                      />
                    </MenuItem>
                  </a>
                ))}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export default InnerCollapsableElement;
