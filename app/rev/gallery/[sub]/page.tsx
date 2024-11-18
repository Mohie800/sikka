"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import "./style.css";
import Typo from "@/app/component/Typo";
import { Close } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import LoadingIndicator from "@/app/component/LoadingIndicator";
import { useGetGalleryByIdMutation } from "@/app/services/gallery/galleryApi";
import { useParams } from "next/navigation";
import { MEDIABASEURL } from "@/app/api/end-points";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Page = () => {
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
        // await loadScript("/gallery-sub/js/modernizr-custom.js");
        // await loadScript("/gallery-sub/js/imagesloaded.pkgd.min.js");
        // await loadScript("/gallery-sub/js/masonry.pkgd.min.js");
        // await loadScript("/gallery-sub/js/classie.js");
        // await loadScript("/gallery-sub/js/main.js");
        // Initialize imagesLoaded after all scripts are loaded
      } catch (error) {
        console.error(error);
      }
    };

    if (mounted && window) {
      loadScripts();

      mounted = false;
    }
  }, []);

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  let params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      await getGalleryById({ id: params["sub"].toString() });
    };
    fetchData();
  }, []);

  const [getGalleryById, { data, isLoading }] = useGetGalleryByIdMutation();
  if (isLoading || !data) {
    return <LoadingIndicator />;
  }

  return (
    <div>
      <title>
        {currentLanguage == "ar"
          ? "معرض الصور - سكة الثورة | سكة"
          : "Gallery - SIKKA Revolution | SIKKA"}
      </title>
      <div className="container">
        <header className="codrops-header">
          <Typo fontSize={40} className="gallery-sub-title">
            {currentLanguage == "ar"
              ? data.category.name_ar
              : data.category.name_en}
          </Typo>
        </header>
        <div className="content">
          <div className="gallery-grid">
            {data.data.map((gal, index) => {
              return (
                <div key={index} className="gallery-item" data-size="1280x853">
                  <PhotoProvider
                    overlayRender={({ images, index }) => {
                      return (
                        <div className={"gallery-photo-provider-desc"}>
                          <Typo
                          className="gallery-photo-provider-desc-text"
                          >
                            {currentLanguage == "ar"
                              ? gal.caption_ar
                              : gal.caption_en}
                          </Typo>
                        </div>
                      );
                    }}
                  >
                    <PhotoView src={MEDIABASEURL + "/" + gal.image}>
                      <div
                        style={{
                          textAlign: "center",
                          width: "100%",
                          height: "100%",
                        }}
                      >
                        <Image
                          className="galley-sub-images"
                          width={100}
                          height={100}
                          src={MEDIABASEURL + "/" + gal.image}
                          alt="img01"
                        />
                        <div
                          className="description description--grid"
                          style={{ marginTop: "10px" }}
                        >
                          Assemblage
                        </div>
                      </div>
                    </PhotoView>
                  </PhotoProvider>
                </div>
              );
            })}
          </div>
          <div className="preview">
            <button className="action action--close">
              <Close /> <span className="text-hidden">Close</span>
            </button>
            <div className="description description--preview"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
