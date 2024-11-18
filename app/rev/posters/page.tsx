"use client";
import React, { useEffect } from "react";
import "./style.css";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useGetPostersMutation } from "@/app/services/posters/postersApi";
import LoadingIndicator from "@/app/component/LoadingIndicator";
import Typo from "@/app/component/Typo";
import { MEDIABASEURL } from "@/app/api/end-points";
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
        await loadScript("/posters/js/gsap.min.js");
        await loadScript("/posters/js/ScrollTrigger.min.js");
        await loadScript("/posters/js/lenis.min.js");
        await loadScript("/posters/js/imagesloaded.pkgd.min.js");
        await loadScript("/posters/js/utils.js");
        await loadScript("/posters/js/index.js");
      } catch (error) {
        console.error(error);
      }
    };

    if (mounted && window) {
      loadScripts();
      mounted = false;
    }

    const scroll = () => {
      const grid = document.querySelector(".columns");
      if (!grid) return; // Ensure grid exists

      const columns = Array.from(grid.querySelectorAll(".column")); // Convert NodeList to Array

      // Columns animations
      columns.forEach((column, pos) => {
        gsap.to(column, {
          ease: "none",
          yPercent: -1 * pos * 10,
          scrollTrigger: {
            trigger: grid,
            start: "clamp(top bottom)",
            end: "clamp(bottom top)",
            scrub: true,
          },
        });
      });

      // Items animations
      const items = columns
        .map((column) => {
          return Array.from(column.querySelectorAll(".column__item")).map(
            (item) => ({
              element: item,
              image: item.querySelector(".column__item-img"),
            })
          );
        })
        .flat();

      items.forEach((item) => {
        gsap.fromTo(
          item.image,
          {
            y: 30,
          },
          {
            ease: "none",
            scrollTrigger: {
              trigger: item.element,
              start: "clamp(top bottom)",
              end: "clamp(bottom top)",
              scrub: true,
            },
            y: -30,
          }
        );
      });
    };

    scroll();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await getPosters();
    };
    fetchData();
  }, []);

  const [getPosters, { data, isLoading }] = useGetPostersMutation();

  if (isLoading || !data) {
    return <LoadingIndicator />;
  }

  return (
    <div className="demo1">
      <title>
        {currentLanguage == "ar"
          ? " البوسترات - سكة الثورة  "
          : "Posters - SIKKA Revolution"}
      </title>
      <div className="posters-title-container">
        <Typo className="posters-title">Posters - Revolution</Typo>
      </div>
      <main>
        <div className="columns">
          <div className="column">
            {data.data.map((poster, index) => {
              return (
                <figure key={index} className="column__item">
                  <div className="column__item-imgwrap">
                    <div className="column__item-img">
                      <Image
                        width={100}
                        height={100}
                        src={MEDIABASEURL + "/" + poster.image}
                        alt="image"
                        className="posters-image"
                      />
                    </div>
                  </div>
                  <div className="column__item-caption">
                    {currentLanguage == "ar"
                      ? poster.caption_ar
                      : poster.caption_en}
                  </div>
                </figure>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
