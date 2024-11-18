"use client";
import React, { useEffect } from "react";
import "./style.css";
import Link from "next/link";

import { CircularProgress } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { useGetVideosCatMutation } from "@/app/services/videos/videosApi";
import LoadingIndicator from "@/app/component/LoadingIndicator";
import { MEDIABASEURL } from "@/app/api/end-points";
import Typo from "@/app/component/Typo";
import SeeAllBtn from "@/app/component/SeeAllBtn";

const Page = () => {
  let mounted = true;
  useEffect(() => {
    const loadScripts = async () => {
      // Helper function to load scripts dynamically
      const loadScript = (src: string, isModule = false) => {
        return new Promise((resolve, reject) => {
          const script = document.createElement("script");
          script.src = src;
          script.async = true;
          script.type = isModule ? "module" : "text/javascript"; // Set type attribute based on isModule flag
          script.onload = resolve;
          script.onerror = () =>
            reject(new Error(`Failed to load script: ${src}`));
          document.body.appendChild(script);
        });
      };

      try {
        // Load scripts sequentially
        await loadScript("/js/imagesloaded.pkgd.min.js");
        await loadScript("/videos/js/utils.js");
        await loadScript("https://unpkg.com/split-type");
        await loadScript("/js/gsap.min.js");
        await loadScript("/about/js/Flip.min.js");
        await loadScript("/js/ScrollTrigger.min.js");
        await loadScript("/videos/js/content.js");
        await loadScript("/videos/js/preview.js");
        await loadScript("/videos/js/textLinesReveal.js");
        await loadScript("/js/lenis.min.js");
        await loadScript("/videos/js/index.js");

        // Initialize imagesLoaded after all scripts are loaded
      } catch (error) {
        console.error(error);
      }
    };

    const fetchData = async () => {
      await getAllVideosCat();
    };
    if (mounted) {
      loadScripts();
      fetchData();
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      mounted = false;
    };
  }, []);

  const [getAllVideosCat, { data: videosCat, isLoading }] =
    useGetVideosCatMutation();

  console.log(videosCat);

  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const router = useRouter();

  console.log(isLoading);
  if (isLoading) {
    return <LoadingIndicator />;
  }

  return (
    <div id="videos-main">
      <title>
        {currentLanguage == "ar"
          ? " الفيديوهات - سكة الثورة "
          : "Videos - Revolution | SIKKA"}
      </title>
      <div className="videos-main-title-container">
        <Typo className="videos-main-title-text">Videos - Revolution</Typo>
      </div>
      <main>
        <section className="preview-wrap">
          {videosCat?.data.map((i, index) => {
            return (
              <div
                key={index}
                className="preview"
                onClick={() => router.push(`/rev/videos/${i.serial_link}`)}
              >
                <div className="preview__img-wrap">
                  <div className="preview__img">
                    <div
                      className="preview__img-inner"
                      style={{
                        backgroundImage: `url(${MEDIABASEURL}/${i.image})`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="preview__title">
                  <h2 className="preview__title-main">
                    <span className="oh">
                      <span className="oh__inner">
                        <a href={`/rev/videos/${i.serial_link}`}>
                          {currentLanguage == "ar" ? i.name_ar : i.name_en}
                        </a>
                      </span>
                    </span>
                  </h2>
                </div>
              </div>
            );
          })}
        </section>
        {/* <section className="content-wrap">
          <div className="content">
            <div className="content__group">
              <div className="content__title">
                <span className="oh">
                  <span className="oh__inner">Andesite</span>
                </span>
                <span className="oh">
                  <span className="oh__inner">aphanitic</span>
                </span>
              </div>
              <div className="content__meta oh">
                <span className="oh__inner">By James Maurice Rojo</span>
              </div>
              <div className="content__text">
                Andesite (/ˈændəzaɪt/) is a volcanic rock of intermediate
                composition. In a general sense, it is the intermediate type
                between silica-poor basalt and silica-rich rhyolite.
              </div>
            </div>
            <div className="content__thumbs">
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/1_1.jpg)" }}
              ></div>
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/1_2.jpg)" }}
              ></div>
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/1_3.jpg)" }}
              ></div>
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/1_4.jpg)" }}
              ></div>
            </div>
          </div>
          <div className="content">
            <div className="content__group">
              <div className="content__title">
                <span className="oh">
                  <span className="oh__inner">Batholith</span>
                </span>
                <span className="oh">
                  <span className="oh__inner">plutonic</span>
                </span>
              </div>
              <div className="content__meta oh">
                <span className="oh__inner">By Anna Walters</span>
              </div>
              <div className="content__text">
                A batholith (from Ancient Greek bathos depth, and lithos rock)
                is a large mass of intrusive igneous rock (also called plutonic
                rock), larger than 100 km2 (40 sq mi) in area, that forms from
                cooled magma deep in Earts crust.
              </div>
            </div>
            <div className="content__thumbs">
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/2_1.jpg)" }}
              ></div>
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/2_2.jpg)" }}
              ></div>
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/2_3.jpg)" }}
              ></div>
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/2_4.jpg)" }}
              ></div>
            </div>
          </div>
          <div className="content">
            <div className="content__group">
              <div className="content__title">
                <span className="oh">
                  <span className="oh__inner">Pumicite</span>
                </span>
                <span className="oh">
                  <span className="oh__inner">vesicular</span>
                </span>
              </div>
              <div className="content__meta oh">
                <span className="oh__inner">By Walter Green</span>
              </div>
              <div className="content__text">
                Pumice ( /ˈpʌmɪs/), called pumicite in its powdered or dust
                form, is a volcanic rock that consists of highly vesicular
                rough-textured volcanic glass, which may or may not contain
                crystals. It is typically light-colored.
              </div>
            </div>
            <div className="content__thumbs">
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/3_1.jpg)" }}
              ></div>
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/3_2.jpg)" }}
              ></div>
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/3_3.jpg)" }}
              ></div>
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/3_4.jpg)" }}
              ></div>
            </div>
          </div>
          <div className="content">
            <div className="content__group">
              <div className="content__title">
                <span className="oh">
                  <span className="oh__inner">Latite</span>
                </span>
                <span className="oh">
                  <span className="oh__inner">aphyric</span>
                </span>
              </div>
              <div className="content__meta oh">
                <span className="oh__inner">By Nora Gilberts</span>
              </div>
              <div className="content__text">
                Latite is an igneous, volcanic rock, with aphanitic-aphyric to
                aphyric-porphyritic texture. Its mineral assemblage is usually
                alkali feldspar and plagioclase in approximately equal amounts.
              </div>
            </div>
            <div className="content__thumbs">
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/4_1.jpg)" }}
              ></div>
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/4_2.jpg)" }}
              ></div>
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/4_3.jpg)" }}
              ></div>
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/4_4.jpg)" }}
              ></div>
            </div>
          </div>
          <div className="content">
            <div className="content__group">
              <div className="content__title">
                <span className="oh">
                  <span className="oh__inner">Rhomb</span>
                </span>
                <span className="oh">
                  <span className="oh__inner">porphyry</span>
                </span>
              </div>
              <div className="content__meta oh">
                <span className="oh__inner">By Bobby D. May</span>
              </div>
              <div className="content__text">
                Rhomb porphyry is a volcanic rock with gray-white large
                porphyritic rhombus-shaped phenocrysts of feldspar (commonly
                anorthoclase) embedded in a very fine-grained red-brown matrix.
              </div>
            </div>
            <div className="content__thumbs">
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/5_1.jpg)" }}
              ></div>
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/5_2.jpg)" }}
              ></div>
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/5_3.jpg)" }}
              ></div>
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/5_4.jpg)" }}
              ></div>
            </div>
          </div>
          <div className="content">
            <div className="content__group">
              <div className="content__title">
                <span className="oh">
                  <span className="oh__inner">Bytownite</span>
                </span>
                <span className="oh">
                  <span className="oh__inner">triclinic</span>
                </span>
              </div>
              <div className="content__meta oh">
                <span className="oh__inner">By Maria Kilkenny</span>
              </div>
              <div className="content__text">
                Bytownite is a calcium rich member of the plagioclase solid
                solution series of feldspar minerals with composition between
                anorthite and labradorite. Like others of the series, bytownite
                forms grey to white triclinic crystals.
              </div>
            </div>
            <div className="content__thumbs">
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/6_1.jpg)" }}
              ></div>
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/6_2.jpg)" }}
              ></div>
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/6_3.jpg)" }}
              ></div>
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/6_4.jpg)" }}
              ></div>
            </div>
          </div>
          <div className="content">
            <div className="content__group">
              <div className="content__title">
                <span className="oh">
                  <span className="oh__inner">Oligoclase</span>
                </span>
                <span className="oh">
                  <span className="oh__inner">plagioclase</span>
                </span>
              </div>
              <div className="content__meta oh">
                <span className="oh__inner">By Lauren Kraft</span>
              </div>
              <div className="content__text">
                Oligoclase is a rock-forming mineral belonging to the
                plagioclase feldspars. In chemical composition and in its
                crystallographic and physical characters it is intermediate
                between albite and anorthite.
              </div>
            </div>
            <div className="content__thumbs">
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/7_1.jpg)" }}
              ></div>
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/7_2.jpg)" }}
              ></div>
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/7_3.jpg)" }}
              ></div>
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/7_4.jpg)" }}
              ></div>
            </div>
          </div>
          <div className="content">
            <div className="content__group">
              <div className="content__title">
                <span className="oh">
                  <span className="oh__inner">Mordenite</span>
                </span>
                <span className="oh">
                  <span className="oh__inner">fibrous</span>
                </span>
              </div>
              <div className="content__meta oh">
                <span className="oh__inner">By Stephen Kaiser</span>
              </div>
              <div className="content__text">
                Mordenite is a zeolite mineral that is one of the six most
                abundant zeolites and is used commercially. It was first
                described in 1864 by Henry How.
              </div>
            </div>
            <div className="content__thumbs">
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/8_1.jpg)" }}
              ></div>
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/8_2.jpg)" }}
              ></div>
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/8_3.jpg)" }}
              ></div>
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/8_4.jpg)" }}
              ></div>
            </div>
          </div>
          <div className="content">
            <div className="content__group">
              <div className="content__title">
                <span className="oh">
                  <span className="oh__inner">Stishovite</span>
                </span>
                <span className="oh">
                  <span className="oh__inner">tetragonal</span>
                </span>
              </div>
              <div className="content__meta oh">
                <span className="oh__inner">By Alexander Cook</span>
              </div>
              <div className="content__text">
                Stishovite is an extremely hard, dense tetragonal form
                (polymorph) of silicon dioxide. Large natural crystals of
                stishovite are extremely rare and are usually found as clasts of
                1 to 2 mm in length.
              </div>
            </div>
            <div className="content__thumbs">
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/9_1.jpg)" }}
              ></div>
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/9_2.jpg)" }}
              ></div>
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/9_3.jpg)" }}
              ></div>
              <div
                className="content__thumbs-item"
                style={{ backgroundImage: "url(videos/img/9_4.jpg)" }}
              ></div>
            </div>
          </div>
          <button className="unbutton action action--back">
            <svg width="25px" height="25px" viewBox="0 0 25 25">
              <path d="M24 12.001H2.914l5.294-5.295-.707-.707L1 12.501l6.5 6.5.707-.707-5.293-5.293H24v-1z" />
            </svg>
            <span>Go back</span>
          </button>
        </section> */}
      </main>
      <SeeAllBtn
        text_ar="مشاهدة الكل"
        text_en="SEE ALL"
        path="/"
        color="white"
        background="black"
      />{" "}
    </div>
  );
};

export default Page;
