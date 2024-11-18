"use client";
import React, { useEffect, useState } from "react";
import HomeComponent from "./HomeComponent";
import "./styles.css";
const Page = () => {
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
        await loadScript("/js/imagesloaded.pkgd.min.js");
        await loadScript("/js/utils.js");
        await loadScript("/js/gsap.min.js");
        await loadScript("/js/ScrollTrigger.min.js");
        await loadScript("/js/lenis.min.js");
        await loadScript("/js/index.js");

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

  return (
    <div>
      <HomeComponent isMobilePhone={isMobilePhone} />
    </div>
  );
};

export default Page;
