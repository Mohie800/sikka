"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import SeeMoreBtn from "../rev/SeeMoreBtn";
import { Divider } from "@mui/material";
import Typo from "../component/Typo";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import logo from "../rev/logo-white.png";

// Font files can be colocated inside of `pages`
const Index = () => {
  const [deviceSize, changeDeviceSize] = useState(0);
  const [isDesktop, setisDesktop] = useState(false);

  const [isTablet, setisTablet] = useState(false);
  const [isMobilePhone, setisMobilePhone] = useState(false);
  let mounted = "first";
  useEffect(() => {
    const loadScripts = async () => {
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
        await loadScript("/home-war/js/utils.js");
        await loadScript("/home-war/js/imagesloaded.pkgd.min.js");
        await loadScript("/home-war/js/gsap.min.js");
        await loadScript("/home-war/js/ScrollTrigger.min.js");
        await loadScript("/home-war/js/lenis.min.js");
        await loadScript("/home-war/js/index.js");

        // Initialize imagesLoaded after all scripts are loaded
      } catch (error) {
        console.error(error);
      }
    };
    if (mounted == "first" && window) {
      loadScripts();
      changeDeviceSize(window.innerWidth);

      mounted = "second";
    }

    return () => {
      document.querySelectorAll("script").forEach((script) => {
        if (
          script.src.includes("/js/index.js") ||
          script.src.includes("/js/utils.js")
        ) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  useEffect(() => {
    if (deviceSize != 0) {
      setisDesktop(deviceSize > 1025);
      setisTablet(deviceSize < 1024 && deviceSize >= 768);
      setisMobilePhone(deviceSize < 767);
    }
  }, [deviceSize]);

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <main>
      <title>
        {currentLanguage == "ar"
          ? "  الرئيسية - سكة 15 ابريل "
          : "Home - SIKKA 15 April"}
      </title>
      <div>
        <div className="home-war-logo-container">
          <Image
            src={logo}
            width={100}
            height={100}
            className="home-logo-war"
            alt="logo"
          />
        </div>
        <div className="intro-war">
          <Typo
            className="home-hero-font-war"
            fontFamily={
              currentLanguage === "ar" ? "unset" : "'Montserrat', sans-serif"
            }
          >
            Spaces documenting the interaction of artists, cultural, and
            community actors with the April 15th conflict in Sudan, and the
            transformations in cultural and social narratives under these
            circumstances
          </Typo>
          <Divider style={{ height: "2vh" }} />
          {/* <Button href="/home-war" variant="contained" className="home-war-button">Home War</Button> */}
          <Typo className="intro__info-war">Scroll</Typo>
        </div>
      </div>
      <div className="content">
        <svg className="war-svg">
          <clipPath id="clip">
            <text x="0ch" y="0.95em" className="line-1 font-7 size-3">
              S
            </text>
            <text x="1ch" y="0.95em" className="line-1 font-7 size-3">
              I
            </text>
            <text x="2ch" y="0.95em" className="line-1 font-7 size-3">
              K
            </text>
            <text x="3ch" y="0.95em" className="line-1 font-7 size-3">
              K
            </text>
            <text x="4ch" y="0.95em" className="line-1 font-7 size-3">
              A
            </text>
          </clipPath>
          <clipPath id="clip-0">
            <text x="0ch" y="0.95em" className="line-2 font-7 size-3">
              S
            </text>
            <text x="1ch" y="0.95em" className="line-2 font-7 size-3">
              I
            </text>
            <text x="2ch" y="0.95em" className="line-2 font-7 size-3">
              K
            </text>
            <text x="3ch" y="0.95em" className="line-2 font-7 size-3">
              K
            </text>
            <text x="4ch" y="0.95em" className="line-2 font-7 size-3">
              A
            </text>
          </clipPath>
        </svg>
        <div
          className="poster poster--half"
          style={
            {
              clipPath: "url(#clip)",
              "--offset-x": "10%",
              "--offset-y": "10%",
            } as React.CSSProperties
          }
        >
          <div
            className="poster__inner"
            style={{ backgroundImage: "url(/home-war/img/1.jpg)" }}
          ></div>
        </div>
        <div
          className="poster poster--half"
          style={
            {
              clipPath: "url(#clip-0)",
              "--offset-x": "10%",
              "--offset-y": "10%",
            } as React.CSSProperties
          }
        >
          <div
            className="poster__inner"
            style={{ backgroundImage: "url(/home-war/img/2.jpg)" }}
          ></div>
        </div>
      </div>
      <div className="content content--text">
        <p>
          <Typo
            className="home-war-sections-text"
            style={
              currentLanguage == "ar"
                ? { direction: "rtl" }
                : { direction: "ltr" }
            }
          >
            Articles, reports, and literary texts that narrate the chapters of
            interaction between the arts, culture, and activists, and the
            reshaping of narratives in the post-conflict period
          </Typo>
          <br />
          <a
            href="/war/articles"
            style={
              isMobilePhone && currentLanguage == "ar"
                ? { display: "flex", justifyContent: "center" }
                : {}
            }
          >
            <Typo className="home-war-section-btn">Articles</Typo>
          </a>
        </p>
        {/* <SeeMoreBtn text="Articles" /> */}
        {/* <Divider style={{ height: "2vh" }} /> */}
      </div>
      <div className="content">
        <svg className="war-svg">
          <clipPath id="clip-1">
            <text x="0ch" y="0.95em" className="line-1 font-1 size-3">
              X
            </text>
            <text x="1ch" y="0.95em" className="line-1 font-1 size-3">
              o
            </text>
            <text x="2ch" y="0.95em" className="line-1 font-1 size-3">
              g
            </text>
            <text x="3ch" y="0.95em" className="line-1 font-1 size-3">
              o
            </text>
            <text x="4ch" y="0.95em" className="line-1 font-1 size-3">
              x
            </text>
            <text x="5ch" y="0.95em" className="line-1 font-1 size-3">
              y
            </text>
            <text x="6ch" y="0.95em" className="line-1 font-1 size-3">
              e
            </text>
            <text x="7ch" y="0.95em" className="line-1 font-1 size-3">
              n
            </text>
            <text x="8ch" y="0.95em" className="line-1 font-1 size-3">
              u
            </text>
            <text x="9ch" y="0.95em" className="line-1 font-1 size-3">
              x
            </text>
            <text x="10ch" y="0.95em" className="line-1 font-1 size-3">
              X
            </text>
            <text x="11ch" y="0.95em" className="line-1 font-1 size-3">
              o
            </text>
            <text x="12ch" y="0.95em" className="line-1 font-1 size-3">
              g
            </text>
            <text x="13ch" y="0.95em" className="line-1 font-1 size-3">
              o
            </text>
            <text x="14ch" y="0.95em" className="line-1 font-1 size-3">
              x
            </text>
            <text x="15ch" y="0.95em" className="line-1 font-1 size-3">
              y
            </text>
            <text x="16ch" y="0.95em" className="line-1 font-1 size-3">
              e
            </text>
            <text x="17ch" y="0.95em" className="line-1 font-1 size-3">
              n
            </text>
            <text x="18ch" y="0.95em" className="line-1 font-1 size-3">
              u
            </text>
            <text x="19ch" y="0.95em" className="line-1 font-1 size-3">
              x
            </text>
          </clipPath>
          <clipPath id="clip-1-1">
            <text x="0ch" y="0.95em" className="line-2 font-1 size-3">
              X
            </text>
            <text x="1ch" y="0.95em" className="line-2 font-1 size-3">
              o
            </text>
            <text x="2ch" y="0.95em" className="line-2 font-1 size-3">
              g
            </text>
            <text x="3ch" y="0.95em" className="line-2 font-1 size-3">
              o
            </text>
            <text x="4ch" y="0.95em" className="line-2 font-1 size-3">
              x
            </text>
            <text x="5ch" y="0.95em" className="line-2 font-1 size-3">
              y
            </text>
            <text x="6ch" y="0.95em" className="line-2 font-1 size-3">
              e
            </text>
            <text x="7ch" y="0.95em" className="line-2 font-1 size-3">
              n
            </text>
            <text x="8ch" y="0.95em" className="line-2 font-1 size-3">
              u
            </text>
            <text x="9ch" y="0.95em" className="line-2 font-1 size-3">
              x
            </text>
            <text x="10ch" y="0.95em" className="line-2 font-1 size-3">
              X
            </text>
            <text x="11ch" y="0.95em" className="line-2 font-1 size-3">
              o
            </text>
            <text x="12ch" y="0.95em" className="line-2 font-1 size-3">
              g
            </text>
            <text x="13ch" y="0.95em" className="line-2 font-1 size-3">
              o
            </text>
            <text x="14ch" y="0.95em" className="line-2 font-1 size-3">
              x
            </text>
            <text x="15ch" y="0.95em" className="line-2 font-1 size-3">
              y
            </text>
            <text x="16ch" y="0.95em" className="line-2 font-1 size-3">
              e
            </text>
            <text x="17ch" y="0.95em" className="line-2 font-1 size-3">
              n
            </text>
            <text x="18ch" y="0.95em" className="line-2 font-1 size-3">
              u
            </text>
            <text x="19ch" y="0.95em" className="line-2 font-1 size-3">
              x
            </text>
          </clipPath>
        </svg>
        <div
          className="poster poster--half"
          style={
            {
              clipPath: "url(#clip-1)",
              "--offset-x": "10%",
              "--offset-y": "10%",
            } as React.CSSProperties
          }
        >
          <div
            className="poster__inner"
            style={{ backgroundImage: "url(/home-war/img/3.jpg)" }}
          ></div>
        </div>
        <div
          className="poster poster--half"
          style={
            {
              clipPath: "url(#clip-1-1)",
              "--offset-x": "10%",
              "--offset-y": "10%",
            } as React.CSSProperties
          }
        >
          <div
            className="poster__inner"
            style={{ backgroundImage: "url(/home-war/img/4.jpg)" }}
          ></div>
        </div>
      </div>
      <div className="content content--text">
        <h4 style={{ display: "none" }}>Caverns of introspection</h4>

        <p>
          <Typo
            className="home-war-sections-text"
            style={
              currentLanguage == "ar"
                ? { direction: "rtl" }
                : { direction: "ltr" }
            }
          >
            we come together to break the cycle of loss that threatens the goals
            and just hopes of our people for living with dignity, peace, and
            freedom, by documenting the inspiring responses of cultural and
            community activists
          </Typo>
          <br />
          <a
            href="/war/videos"
            style={
              isMobilePhone && currentLanguage == "ar"
                ? { display: "flex", justifyContent: "center" }
                : {}
            }
          >
            <Typo className="home-war-section-btn">Videos</Typo>
          </a>
        </p>
        {/* <Divider style={{ height: "4vh" }} />
        <a href="/videos">
        <SeeMoreBtn text="Videos" />
        </a> */}
      </div>
      <div className="content">
        <svg className="war-svg">
          <clipPath id="clip-6">
            <text
              x="0ch"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-6 size-3"
            >
              S
            </text>
            <text
              x="1ch"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-6 size-3"
            >
              I
            </text>
            <text
              x="2ch"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-6 size-3"
            >
              K
            </text>
            <text
              x="3ch"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-6 size-3"
            >
              K
            </text>
            <text
              x="4ch"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-6 size-3"
            >
              A
            </text>
          </clipPath>
        </svg>
        <div
          className="poster"
          style={{
            clipPath: "url(#clip-6)",
          }}
        >
          <div
            className="poster__inner"
            style={{ backgroundImage: "url(/home-war/img/2.jpg)" }}
          ></div>
        </div>
      </div>
      <div className="content content--text">
        <p>
          <Typo
            className="home-war-sections-text"
            style={
              currentLanguage == "ar"
                ? { direction: "rtl" }
                : { direction: "ltr" }
            }
          >
            A visual stimulation to the heroic resilience of the Sudanese people
            in the face of the conflict imposed upon them
          </Typo>
          <br />
          <a
            href="/war/gallery"
            style={
              isMobilePhone && currentLanguage == "ar"
                ? { display: "flex", justifyContent: "center" }
                : {}
            }
          >
            <Typo className="home-war-section-btn">Gallery</Typo>
          </a>
        </p>
      </div>
      <div className="content">
        <svg className="war-svg">
          <clipPath id="clip-3">
            <text
              x="0ch"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-3 size-2"
            >
              S
            </text>
            <text
              x="1ch"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-3 size-2"
            >
              I
            </text>
            <text
              x="2ch"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-3 size-2"
            >
              K
            </text>
            <text
              x="3ch"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-3 size-2"
            >
              K
            </text>
            <text
              x="4ch"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-3 size-2"
            >
              A
            </text>
          </clipPath>
        </svg>
        <div
          className="poster"
          style={
            {
              clipPath: "url(#clip-3)",
              "--offset-x": "20%",
            } as React.CSSProperties
          }
        >
          <div
            className="poster__inner"
            style={{ backgroundImage: "url(/home-war/img/6.jpg)" }}
          ></div>
        </div>
      </div>
      <div className="content content--text">
        <p>
          <Typo
            className="home-war-sections-text"
            style={
              currentLanguage == "ar"
                ? { direction: "rtl" }
                : { direction: "ltr" }
            }
          >
            An audio record through which we listen to the bright moments of
            cultural and peaceful civil action, and the efforts of our people
            that make them more cohesive in facing the war, its proponents, and
            the destructive machinery of violence
          </Typo>
          <br />
          <a
            href="/war/podcasts"
            style={
              isMobilePhone && currentLanguage == "ar"
                ? { display: "flex", justifyContent: "center" }
                : {}
            }
          >
            <Typo className="home-war-section-btn">Podcasts</Typo>
          </a>
        </p>
      </div>
      <div className="content">
        <svg className="war-svg">
          <clipPath id="clip-4">
            <text
              x="0"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-4 size-2"
            >
              S
            </text>
            <text
              x="1ch"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-4 size-2"
            >
              I
            </text>
            <text
              x="2ch"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-4 size-2"
            >
              K
            </text>
            <text
              x="3ch"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-4 size-2"
            >
              K
            </text>
            <text
              x="4ch"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className="font-4 size-2"
            >
              A
            </text>
          </clipPath>
        </svg>
        <div
          className="poster"
          style={{
            clipPath: "url(#clip-4)",
          }}
        >
          <div
            className="poster__inner"
            style={{ backgroundImage: "url(/home-war/img/7.jpg)" }}
          ></div>
        </div>
      </div>
    </main>
  );
};

export default Index;
