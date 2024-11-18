"use client";
import React from "react";
import goteh from "./GoetheWhiteLogo.svg";
import FFO from "./FFO.png";
import NXT from "./NXT.png";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import logo from "../rev/logo-white.png";
import Typo from "./Typo";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import X from "./twitter-x-seeklogo-3.svg";
import tiktok from "./7693325_tiktok_social media_logo_apps_icon.svg";
import facebook from "./5279111_network_fb_social media_facebook_facebook logo_icon.svg";
import telegram from "./telegram-svgrepo-com.svg";
import insta from "./5279112_camera_instagram_social media_instagram logo_icon.svg";
import linkedin from "./5279114_linkedin_network_social network_linkedin logo_icon.svg";

const Footer = () => {
  const router = useRouter();
  const path = usePathname();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  if (path.includes("/articles-sub") || path == "/") {
    return null;
  }
  return (
    <div
      className="footer-main-container"
      style={
        currentLanguage === "ar" ? { direction: "rtl" } : { direction: "ltr" }
      }
    >
      {/* first row */}
      <div className="footer-first-row-container">
        {/* sikka */}
        <div className="footer-sikka-container">
          <div className="footer-logo-img-container">
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              className="footer-logo-img"
            />
          </div>
          <Typo className="footer-sikka-text">
            Sikka is a platform that seeks to be a transparent horizon to follow
            the path of the Sudanese and their creativity to derive new
            patterns of freedom
          </Typo>
          <div className="footer-social-media-container">
            <div
              className="footer-social-media-wrapper"
              onClick={() => router.push("https://www.instagram.com/sikkasd")}
            >
              <Image
                className="footer-social-media-img"
                src={insta}
                width={50}
                height={50}
                alt="X"
              />
            </div>
            <div
              className="footer-social-media-wrapper"
              onClick={() => router.push("https://t.me/sikka_sd")}
            >
              <Image
                className="footer-social-media-img"
                src={telegram}
                width={50}
                height={50}
                alt="X"
              />
            </div>
            <div
              className="footer-social-media-wrapper"
              onClick={() => router.push("https://www.facebook.com/sikkaasd")}
            >
              <Image
                className="footer-social-media-img"
                src={facebook}
                width={50}
                height={50}
                alt="X"
              />
            </div>

            <div
              className="footer-social-media-wrapper"
              onClick={() => router.push("https://x.com/sikkasd")}
            >
              <Image
                className="footer-social-media-img-x"
                src={X}
                width={100}
                height={100}
                alt="X"
              />
            </div>
            <div
              className="footer-social-media-wrapper"
              onClick={() => router.push("https://www.tiktok.com/@sikkasd")}
            >
              <Image
                className="footer-social-media-img"
                src={tiktok}
                width={50}
                height={50}
                alt="tiktok"
              />
            </div>
            <div
              className="footer-social-media-wrapper"
              onClick={() =>
                router.push(
                  "https://www.linkedin.com/company/sikka-%D8%B3%D9%83%D8%A9/"
                )
              }
            >
              <Image
                className="footer-social-media-img"
                src={linkedin}
                width={50}
                height={50}
                alt="tiktok"
              />
            </div>
          </div>
        </div>
        {/* links */}
        <div className="footer-links-outer-container">
          <Typo className="footer-links-title">Links :</Typo>
          <div className="footer-links-container-outer">
            <div className="footer-links-container">
              <Typo style={{ textWrap: "nowrap", fontWeight: "bold" }}>
                Sikka Links:
              </Typo>

              <a className="footer-link-item" href="/privacy">
                <Typo>Privacy Policy</Typo>
              </a>
              <a className="footer-link-item" href="/terms">
                <Typo>Terms of use</Typo>
              </a>
              <a className="footer-link-item" href="/claim">
                <Typo>Claim your copyright</Typo>
              </a>
            </div>
            <div className="footer-links-container">
              <Typo style={{ textWrap: "nowrap", fontWeight: "bold" }}>
                Revolution Links:
              </Typo>
              <a className="footer-link-item" href="/rev/articles">
                <Typo>Articles</Typo>
              </a>
              <a className="footer-link-item" href="/rev/videos">
                <Typo>Videos</Typo>
              </a>
              <a className="footer-link-item" href="/rev/posters">
                <Typo>Posters</Typo>
              </a>
              <a className="footer-link-item" href="/rev/gallery">
                <Typo>Gallery</Typo>
              </a>
              <a className="footer-link-item" href="/rev/podcasts">
                <Typo>Podcasts</Typo>
              </a>
            </div>
            <div className="footer-links-container">
              <Typo style={{ textWrap: "nowrap", fontWeight: "bold" }}>
                War Links:
              </Typo>
              <a className="footer-link-item" href="/war/articles">
                <Typo>Articles</Typo>
              </a>
              <a className="footer-link-item" href="/war/videos">
                <Typo>Videos</Typo>
              </a>
              <a className="footer-link-item" href="/war/gallery">
                <Typo>Gallery</Typo>
              </a>
              <a className="footer-link-item" href="/war/podcasts">
                <Typo>Podcasts</Typo>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* second row */}
      <div>
        {/* logos */}
        <div className="footer-logo-container">
          <Image
            className="footer-img"
            src={NXT}
            alt="nxt"
            width={100}
            height={100}
          />
          <Image
            unoptimized
            className="footer-img"
            src={FFO}
            alt="nxt"
            width={100}
            height={100}
          />
          <Image
            className="footer-img"
            src={goteh}
            alt="nxt"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
