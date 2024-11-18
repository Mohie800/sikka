"use client";
import React, { useEffect } from "react";
import "./style.css";
import { useTranslation } from "react-i18next";
import Typo from "../component/Typo";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Flip from "gsap/Flip";
import Teams from "../Team/Teams";
import SocialMedia from "../SocialMedia/SocialMedia";
import BasicTimeline from "./LineWithDots";
import { AboutTimeline } from "./AboutTimeline";
import { Divider } from "@mui/material";

const Page = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  let mounted = true;
  useEffect(() => {
    const loadScripts = async () => {
      // Helper function to load scripts dynamically
      const loadScript = (src: string): Promise<void> => {
        return new Promise<void>((resolve, reject) => {
          const script = document.createElement("script");
          script.src = src;
          script.async = true;
          script.onload = () => resolve();
          script.onerror = () =>
            reject(new Error(`Failed to load script: ${src}`));
          document.body.appendChild(script);
        });
      };

      try {
        // Load scripts sequentially
        // await loadScript("/js/imagesloaded.pkgd.min.js");
        await loadScript("/about/js/utils.js");
        await loadScript("/about/js/gsap.min.js");
        await loadScript("/about/js/ScrollTrigger.min.js");
        await loadScript("/about/js/lenis.min.js");
        await loadScript("/about/js/Flip.min.js");
        await loadScript("/about/js/item.js");
        await loadScript("/about/js/index.js");

        // Initialize imagesLoaded after all scripts are loaded
      } catch (error) {
        console.error(error);
      }
    };

    if (mounted) {
      loadScripts();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      mounted = false;
    }
  }, []);
  return (
    <div
      className="loading"
      style={
        currentLanguage === "ar" ? { direction: "rtl" } : { direction: "ltr" }
      }
    >
      <title>
        {currentLanguage == "ar" ? "من نحن | سكة" : "About us | SIKKA"}
      </title>
      <div className="about-stepper-container">
        <AboutTimeline />
      </div>
      <div className="about-title-header-add-container">
        <Typo className="about-title-header-add-text">
          At Sikka, we aspire to portray the beauty within the chaos
        </Typo>
      </div>
      <main>
        <div className="content-wrap">
          <div className="content">
            <div className="title-wrap">
              <Typo className="title title--up">About</Typo>
              <Typo className="title title--down">Sikka</Typo>
            </div>
          </div>

          <div className="content content--layout content--layout-3">
            <svg
              className="content__img content__img--3"
              width="1000"
              height="560"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 560"
            >
              <defs>
                <filter id="displacementFilter3">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.02"
                    numOctaves="3"
                    result="noise"
                  />
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    scale="80"
                    result="displacement"
                    xChannelSelector="R"
                    yChannelSelector="G"
                  />
                </filter>
                <mask id="pathMask">
                  <path
                    d="M 0 280 Q 500 280 1000 280 Q 500 280 0 280"
                    data-value-final="M 0 280 Q 500 800 1000 280 Q 500 -200 0 280"
                    fill="white"
                    className="mask"
                    style={{ filter: "url(#displacementFilter3)" }}
                  />
                </mask>
              </defs>
              <image
                href="about/img/3.jpg"
                width="1000"
                height="560"
                mask="url(#pathMask)"
              />
            </svg>
            <Typo className="content__text">
              Sikka is a platform whose entire purpose is to document with an
              essence of archiving memorable, iconic moments and events that
              have truly shaped the feel of the revolution
            </Typo>
          </div>
        </div>
        <div className="content-wrap">
          <div className="content">
            <div className="title-wrap">
              <Typo className="title title--up">Our</Typo>
              <Typo className="title title--down">Work</Typo>
            </div>
          </div>
          <div className="content content--layout content--layout-2">
            <svg
              className="content__img content__img--2"
              width="1000"
              height="450"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 450"
            >
              <defs>
                <filter id="displacementFilter2">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.1"
                    numOctaves="1"
                    result="noise"
                  />
                  <feDisplacementMap
                    in="SourceGraphic"
                    in2="noise"
                    result="displacement"
                    scale="100"
                    xChannelSelector="R"
                    yChannelSelector="G"
                  />
                  <feMorphology
                    operator="dilate"
                    radius="2"
                    result="morph"
                    in="displacement"
                  />
                </filter>
                <mask id="circleMask2">
                  <circle
                    cx="50%"
                    cy="50%"
                    r="0"
                    data-value-final="950"
                    fill="white"
                    className="mask"
                    style={{ filter: "url(#displacementFilter2)" }}
                  />
                </mask>
              </defs>
              <image
                href="about/img/2.jpg"
                width="1000"
                height="450"
                mask="url(#circleMask2)"
              />
            </svg>
            <Typo fontSize={15} className="content__text">
              We document, with an archive feel and go in-depth in every aspect,
              whether its artistic, cultural, economic, and more analyzing and
              illustrating the soul of the revolution through a website that
              takes the user through a journey of exploring different time
              stations
            </Typo>
          </div>
        </div>
        <Teams />
        <br />
        <SocialMedia />
        <Divider sx={{ border: "none", height: "10vh" }} />
      </main>
    </div>
  );
};

export default Page;
