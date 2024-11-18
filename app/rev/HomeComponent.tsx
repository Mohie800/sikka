"use client";
import { useTranslation } from "react-i18next";
import React from "react";
import ScrollToTopButton from "./ScrollToTopButton";
import Image from "next/image";
import logo from "./logo-white.png";
import Typo from "../component/Typo";
import SeeMoreBtn from "./SeeMoreBtn";
import "./styles.css";
import { Button, Divider } from "@mui/material";

const HomeComponent = ({ isMobilePhone }: { isMobilePhone: boolean }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <div>
      <title>
        {currentLanguage == "ar"
          ? "الرئيسية - سكة الثورة  "
          : "Home - SIKKA Revolution"}
      </title>
      <ScrollToTopButton />
      <main>
        {/* <div className="frame">
         
        </div> */}
        <div className="home-logo-container">
          <Image
            src={logo}
            width={100}
            height={100}
            className="home-logo"
            alt="logo"
          />
        </div>
        <div className="intro">
          <Typo
            className="home-hero-font"
            fontFamily={
              currentLanguage === "ar" ? "unset" : "'Montserrat', sans-serif"
            }
          >
            Archiving and documenting the thought, arts and literature of the
            Sudanese revolution
          </Typo>
          <Divider style={{ height: "2vh" }} />
          {/* <Button href="/rev-war" variant="contained" className="home-war-button">Home War</Button> */}
          <Typo className="intro__info">Scroll</Typo>
        </div>
        {/* about */}
        <section className="content">
          <div className="grid grid--1">
            <div className="grid-wrap">
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/1.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/2.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/3.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/4.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/5.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/6.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/7.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/8.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/9.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/10.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/11.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/12.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/13.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/14.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/15.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/16.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/17.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/18.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/19.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/20.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/21.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/22.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/23.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/24.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/25.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/26.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/27.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/28.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/29.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/30.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/31.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/32.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/33.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/34.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/35.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/36.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/37.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/38.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/39.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/40.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/41.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/42.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/43.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/44.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/45.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/46.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/47.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/48.jpg)" }}
                ></div>
              </div>
            </div>
          </div>
          <div
            className="content__title content__title--right content__title--top"
            style={{
              gap: "1rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
              justifyContent: "center",
            }}
          >
            <Typo
              className="home-about-font"
              style={
                currentLanguage == "ar"
                  ? { textAlign: "right" }
                  : { textAlign: "left" }
              }
            >
              Sikka is a platform that seeks to be a transparent horizon to
              follow the path of the Sudanese and their creativity to derive new
              patterns of freedom
            </Typo>

            <div className="home-button-container">
              <a href="/about">
                <SeeMoreBtn text="About us" />
              </a>
            </div>
          </div>
        </section>

        {/* Articles */}
        <section className="content">
          <div className="grid grid--2">
            <div className="grid-wrap">
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/1.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/2.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/3.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/4.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/5.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/6.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/7.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/8.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/9.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/10.jpg" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/11.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/12.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/13.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/14.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/15.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/16.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/17.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/18.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/19.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/20.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/21.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/22.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/23.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/24.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/25.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/26.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/27.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/28.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/29.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/30.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/31.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/32.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/33.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/34.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/35.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/36.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/37.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/38.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/39.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/40.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/41.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/42.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/43.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/44.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/45.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/46.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/47.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/48.jpg)" }}
                ></div>
              </div>
            </div>
          </div>
          <div
            className="content__title"
            style={
              isMobilePhone
                ? {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem",
                    justifyContent: "center",
                  }
                : {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1em",
                  }
            }
          >
            <Typo className="home-articles-font">
              Writings for Sikka from Various Articles, Reports, and Aesthetic
              Manuscripts
            </Typo>
            <div className="home-button-container-articles">
              <a href="/rev/articles">
                <SeeMoreBtn text="Articles" />
              </a>
            </div>
          </div>
        </section>

        {/* Videos */}
        <section className="content content--spacing">
          <div className="grid grid--3">
            <div className="grid-wrap">
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/18.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/29.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/6.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/37.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/15.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/32.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/41.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/23.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/5.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/12.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/27.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/1.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/46.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/35.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/20.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/39.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/8.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/25.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/2.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/44.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/43.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/17.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/26.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/11.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/14.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/7.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/33.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/30.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/10.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/21.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/16.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/31.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/24.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/36.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/42.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/3.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/38.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/9.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/4.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/40.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/28.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/22.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/34.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/13.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/19.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/47.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/45.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/48.jpg)" }}
                ></div>
              </div>
            </div>
          </div>
          <div
            className="content__title content__title--left content__title--bottom"
            style={
              isMobilePhone
                ? {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "1rem",
                  }
                : {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",
                    gap: "1em",
                    padding: "0 30px",
                  }
            }
          >
            <Typo className="home-videos-font">
              Here we listen to testimonies and get to know the features of the
              actors in the revolutionary movement, and we interrogate the
              actors in cultural and social life
            </Typo>
            <div className="home-button-container-videos">
              <a href="/rev/videos">
                <SeeMoreBtn text="Videos" />
              </a>
            </div>
          </div>
        </section>

        {/* posters */}
        <section className="content content--spacing">
          <div className="grid grid--5">
            <div
              className="grid-wrap"
              style={isMobilePhone ? { marginRight: "10em" } : {}}
            >
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/18.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/29.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/6.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/37.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/15.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/32.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/41.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/23.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/5.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/12.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/27.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/1.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/46.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/35.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/20.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/39.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/8.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/25.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/2.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/44.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/43.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/17.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/26.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/11.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/14.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/7.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/33.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/30.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/10.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/21.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/16.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/31.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/24.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/36.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/42.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/3.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/38.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/9.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/4.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/40.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/28.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/22.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/34.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/13.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/19.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/47.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/45.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/48.jpg)" }}
                ></div>
              </div>
            </div>
          </div>
          <h3
            className="content__title"
            style={
              isMobilePhone
                ? {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem",
                    justifyContent: "center",
                  }
                : {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "end",
                    gap: "1.5rem",
                  }
            }
          >
            <Typo
              className="home-posters-font"
              style={
                currentLanguage == "ar"
                  ? { textAlign: "right" }
                  : { textAlign: "left" }
              }
            >
              Designs and posters that were the mouthpiece of the revolution and
              announcing its temporal and spatial timing
            </Typo>
            <div className="home-button-container-posters">
              <a href="/rev/posters">
                <SeeMoreBtn text="Posters" />
              </a>
            </div>
          </h3>
        </section>

        {/* Gallery */}
        <section className="content content--spacing">
          <div className="grid grid--5">
            <div className="grid-wrap">
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/18.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/29.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/6.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/37.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/15.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/32.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/41.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/23.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/5.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/12.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/27.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/1.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/46.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/35.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/20.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/39.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/8.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/25.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/2.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/44.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/43.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/17.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/26.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/11.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/14.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/7.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/33.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/30.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/10.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/21.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/16.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/31.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/24.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/36.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/42.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/3.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/38.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/9.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/4.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/40.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/28.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/22.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/34.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/13.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/19.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/47.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/45.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/48.jpg)" }}
                ></div>
              </div>
            </div>
          </div>
          <div
            className="content__title"
            style={
              isMobilePhone
                ? {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "1rem",
                  }
                : {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "1em",
                  }
            }
          >
            <Typo className="home-gallery-font">
              Visual stimulation presents a great visual history of the Sudanese
              revolution
            </Typo>
            <div className="home-button-container-videos">
              <a href="/rev/gallery">
                <SeeMoreBtn text="Gallery" />
              </a>
            </div>
          </div>
        </section>

        {/* Podcasts */}
        <section className="content content--spacing">
          <div className="grid grid--6">
            <div className="grid-wrap">
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/18.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/5.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/8.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/43.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/34.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/21.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/39.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/6.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/13.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/47.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/10.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/45.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/27.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/31.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/28.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/30.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/36.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/14.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/23.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/35.jpg)" }}
                ></div>
              </div>
              <div className="grid__item">
                <div
                  className="grid__item-inner"
                  style={{ backgroundImage: "url(img/19.jpg)" }}
                ></div>
              </div>
            </div>
          </div>
          <div
            className="content__title"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "2rem",
            }}
          >
            <Typo className="home-podcasts-font">
              Narratives and audio recordings documenting artistic practices and
              social movements in Sudan since the December Revolution
            </Typo>
            <div className="home-button-container-videos">
              <a href="/rev/podcasts">
                <SeeMoreBtn text="Podcasts" />
              </a>
            </div>
          </div>
        </section>

        <Typo className="credits">Made by @Sikka</Typo>
      </main>
    </div>
  );
};

export default HomeComponent;
