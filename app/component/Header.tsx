"use client";
import React, { useEffect, useRef, useState } from "react";
import { setLanguagePreference } from "../internationalization/i18";
import { useTranslation } from "react-i18next";
import "./style.css";
import { Button, IconButton } from "@mui/material";
import CollpsableNavLink from "./CollpabsableNavLink";
import { gsap } from "gsap";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../rev/logo-white.png";
import "./headerStyles.css";
import LanguageSelector from "./LanguageSelector";
import { Add, Close, HorizontalRule, Menu, PlusOne } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./style.css";
import Typo from "./Typo";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

// Initialize Swiper modules
SwiperCore.use([Navigation, Pagination]);
const Header = () => {
  const pathName = usePathname();
  console.log(pathName);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const headerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const revDropdownRef = useRef<HTMLDivElement>(null);
  const warDropdownRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRevOpen, setIsRevOpen] = useState(false);
  const [isWarOpen, setIsWarOpen] = useState(false);
  const [isSikkaOpen, setIsSikkaOpen] = useState(false);

  useEffect(() => {
    if (!menuRef.current) return;

    const timeline = gsap.timeline();

    // Open animation
    if (isMenuOpen) {
      timeline.to(menuRef.current, {
        duration: 0.3,
        ease: "power3.inOut",
        x: "0%",
        opacity: 1,
      });
      // Add stagger effect for menu items
      gsap.fromTo(
        menuRef.current.children,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.2, stagger: 0.1 }
      );
    } else {
      // Close animation
      timeline.to(menuRef.current, {
        duration: 0.3,
        ease: "power3.inOut",
        x: "-100%",
        opacity: 0,
      });
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const timeline = gsap.timeline({
      paused: true,
      defaults: { duration: 1, ease: "elastic" },
    });

    // Revolution Dropdown Animation
    timeline.to(revDropdownRef.current, {
      duration: 0.5,
      ease: "power3.out",
      opacity: isRevOpen ? 1 : 0,
      height: isRevOpen ? "auto" : 0,
      // Creative Animation 1: Scale & Rotate
      scale: isRevOpen ? 1 : 0.8,
      rotate: isRevOpen ? 0 : 10,
    });

    if (revDropdownRef.current)
      timeline.from(revDropdownRef.current.querySelectorAll("li"), {
        duration: 0.0,
        ease: "back.out",
        y: isRevOpen ? 0 : 20,
        opacity: isRevOpen ? 1 : 0,
      });

    // War Dropdown Animation
    if (warDropdownRef.current)
      timeline
        .to(warDropdownRef.current, {
          duration: 0.5,
          ease: "power3.out",
          opacity: isWarOpen ? 1 : 0,
          height: isWarOpen ? "auto" : 0,
          // Creative Animation 1: Scale & Rotate
          scale: isWarOpen ? 1 : 0.8,
          rotate: isWarOpen ? 0 : 10,
        })
        .from(warDropdownRef.current.querySelectorAll("li"), {
          duration: 0.0,
          ease: "back.out",
          y: isWarOpen ? 0 : 20,
          opacity: isWarOpen ? 1 : 0,
        });

    if (isRevOpen) {
      timeline.play();
    } else if (isWarOpen) {
      timeline.play(); // Only play one timeline at a time
    } else {
      timeline.reverse();
    }
  }, [isRevOpen, isWarOpen]);

  const revOptions = [
    {
      name: "Home",
      path: "/rev",
      content_en:
        "Archiving and documenting the thought and arts of the Sudanese revolution",
      content_ar: "أرشفة وتوثيق فكر وفنون وآداب الثورة السودانية",
    },
    {
      name: "articles",
      path: "/rev/articles",
      content_en:
        "Writings for Sikka from Various Articles, Reports, and Aesthetic Manuscripts",
      content_ar: "تدوينات مشروع سكة من مقالات وتقارير ومخطوطات جمالية متنوعة",
    },
    {
      name: "videos",
      path: "/rev/videos",
      content_en:
        "Testimonies of activists in the revolution and in cultural and social life.",
      content_ar:
        "شهادات الفاعلين في حراك الثورة وفي الحياة الثقافية والاجتماعية",
    },
    {
      name: "Posters",
      path: "/rev/posters",
      content_en:
        "Designs and posters that were the mouthpiece of the revolution",
      content_ar:
        "تصاميم وبوسترات كانت لسان حال الثورة وإعلان مواقيتها الزمانية والمكانية",
    },
    {
      name: "gallery",
      path: "/rev/gallery",
      content_en:
        "A Visual Tribute to the Epics of the Sudanese Revolution's Resilience",
      content_ar: "مزارٌ بصريّ لملاحم صمود الثورة السودانية",
    },
    {
      name: "Podcasts",
      path: "/rev/podcasts",
      content_en:
        "Audio Recordings Documenting Artistic Practices and Social Movements",
      content_ar:
        "مسموعات توثق للممارسات الفنية والحراك الاجتماعي في السودان منذ لحظة ثورة ديسمبر",
    },
  ];

  const warOptions = [
    {
      name: "Home",
      path: "/war",
      content_en:
        "Spaces documenting the interaction of artists after the April 15th conflict in Sudan",
      content_ar:
        "مساحات توثق تفاعل الفنانين والفاعلين الثقافيين والمجتمعيين مع حرب 15 أبريل في السودان",
    },
    {
      name: "articles",
      path: "/war/articles",
      content_en:
        "Arts and activism reshape narratives and heal communities post-conflict.",
      content_ar:
        "مقالات وتقارير ونصوص أدبية تسرد فصول تفاعل الفنون والثقافة والفاعلين في زمن ما بعد الصراع.",
    },
    {
      name: "videos",
      path: "/war/videos",
      content_en:
        "Documenting the Inspiring Responses of Cultural and Community Activists.",
      content_ar: "توثيق الاستجابات المُلهمة للفاعلين الثقافيين والمجتمعيين.",
    },
    {
      name: "gallery",
      path: "/war/gallery",
      content_en:
        "Visuals showcasing Sudanese resilience amid imposed conflict.",
      content_ar:
        "مزار بصري لملاحم صمود الشعب السوداني في وجه الصراع المفروض عليه",
    },
    {
      name: "Podcasts",
      path: "/war/podcasts",
      content_en:
        "Podcasts to highlights cultural and peaceful civil action’s positive moments.",
      content_ar: "سجل مسموع نستمع عبره لاشراقات الفعل الثقافي والمدني السلمي",
    },
  ];

  const sikkaOptions = [
    {
      name: "about us",
      path: "/about",
      content_en: "we aspire to portray the beauty within the chaos",
      content_ar: "نحن نبحث عن الجمال داخل الفوضى",
    },
    {
      name: "Claim Content",
      path: "/claim",
      content_en:
        "Sikka supports everyone’s right to preserve cultural and creative heritage.",
      content_ar:
        "في سكة، نؤمن بأن لكل فرد الحق في الحفاظ على إرثه الثقافي والابداعي",
    },
    {
      name: "Add Content",
      path: "/add-content",
      content_en: "Share your content with Sikka and be part of our community.",
      content_ar: "شارك محتواك مع سكة وكن جزء من مجتمعنا",
    },
  ];

  useEffect(() => {
    if (window) changeDeviceSize(window.innerWidth);

    if (pathName == "/rev" || pathName == "/war") {
      const headerElement = headerRef.current;

      const handleScroll = () => {
        console.log(window.screenY);
        if (window.scrollY > 10) {
          gsap.to(headerElement, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power1.out",
          });
        } else {
          gsap.to(headerElement, {
            y: -100,
            opacity: 0,
            duration: 0.5,
            ease: "power1.out",
          });
        }
      };

      window.addEventListener("scroll", handleScroll);

      // Initial animation to hide the header
      gsap.set(headerElement, { y: -100, opacity: 0 });
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleWar = () => {
    setIsRevOpen(false);
    setIsSikkaOpen(false);

    setIsWarOpen(!isWarOpen);
  };
  const toggleRev = () => {
    setIsWarOpen(false);
    setIsSikkaOpen(false);

    setIsRevOpen(!isRevOpen);
  };
  const toggleSikka = () => {
    setIsRevOpen(false);
    setIsWarOpen(false);

    setIsSikkaOpen(!isSikkaOpen);
  };

  const [deviceSize, changeDeviceSize] = useState(0);
  const [isDesktop, setisDesktop] = useState(false);
  const [isTablet, setisTablet] = useState(false);
  const [isMobilePhone, setisMobilePhone] = useState(false);

  useEffect(() => {
    if (deviceSize != 0) {
      setisDesktop(deviceSize > 1025);
      setisTablet(deviceSize < 1024 && deviceSize >= 768);
      setisMobilePhone(deviceSize < 767);
    }
  }, [deviceSize]);

  return (
    <div>
      {pathName == "/" ? (
        <LanguageSelector />
      ) : !isMobilePhone ? (
        <div
          className={
            !pathName.includes("/articles-sub/short-stories")
              ? "frame"
              : "frame-2"
          }
        >
          <LanguageSelector />
          <div
            ref={
              !pathName.includes("/articles-sub/short-stories")
                ? headerRef
                : null
            }
            className={"collapsiblee-header-container"}
          >
            {!pathName.includes("/articles-sub/short-stories") && (
              <div
                className="collapsiblee-header-container-inner"
                style={
                  pathName == "/rev/articles" || pathName == "/war/articles"
                    ? { background: "#827e7e31" }
                    : {}
                }
              >
                <div>
                  <CollpsableNavLink options={revOptions} name="Revolution" />
                  <CollpsableNavLink options={warOptions} name="At War" />
                  <CollpsableNavLink options={sikkaOptions} name="Sikka" />
                </div>
                <a href="/" className="header-pc-view-logo-container">
                  <Image
                    src={logo}
                    alt="logo"
                    width={100}
                    height={100}
                    className="logo-header"
                  />
                </a>
              </div>
            )}
          </div>
          {pathName.includes("/articles-sub/short-stories") && (
            <div style={{ right: "10px", position: "absolute" }}>
              <a href="/" className="header-pc-view-logo-container">
                <Image
                  src={logo}
                  alt="logo"
                  width={100}
                  height={100}
                  className="logo-header"
                />
              </a>
            </div>
          )}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="header-mobile-container"
            style={
              pathName == "/articles" || pathName.includes("/articles-sub/")
                ? {
                    background: "#1d1c2d",
                  }
                : {
                }
            }
          >
            <IconButton
              sx={{ borderRadius: "0" }}
              size="medium"
              onClick={() => toggleMenu()}
            >
              {isMenuOpen ? (
                <Close
                  fontSize="medium"
                  sx={
                    pathName == "/articles" ||
                    pathName.includes("/articles-sub/")
                      ? {
                          zIndex: "10000",
                          color: "white",
                          opacity: "1",
                          pointerEvents: "all",
                        }
                      : {
                          zIndex: "10000",
                          color: "white",
                          opacity: "1",
                          pointerEvents: "all",
                        }
                  }
                />
              ) : (
                <Menu
                  fontSize="medium"
                  sx={
                    pathName == "/rev/articles" ||
                    pathName == "/war/articles" 
                      ? { zIndex: "10000", color: "black", opacity: "1" }
                      : {
                          zIndex: "10000",
                          color: "white",
                          opacity: "1",
                        }
                  }
                />
              )}
            </IconButton>
            <a href="/" className="header-pc-view-logo-container">
              <Image
                src={logo}
                alt="logo"
                width={100}
                height={100}
                className="logo-header"
              />
            </a>

            {isMenuOpen && (
              <div ref={menuRef} className="header-mobile-inner-container">
                <div
                  style={
                    isRevOpen
                      ? {
                          background: "#242434",
                          width: "100%",
                          padding: "1rem",
                        }
                      : { width: "100%", padding: "1rem" }
                  }
                >
                  <div
                    style={
                      isRevOpen
                        ? {
                            display: "flex",
                            gap: "1rem",
                            alignItems: "center",
                            width: "100%",
                            justifyContent: "center",
                          }
                        : {
                            display: "flex",
                            gap: "1rem",
                            alignItems: "center",
                            width: "100%",
                            justifyContent: "center",
                            background: "transparent",
                          }
                    }
                    onClick={toggleRev}
                  >
                    <Typo className="header-mobile-header-text">
                      Revolution
                    </Typo>
                    {!isRevOpen ? (
                      <Add
                        fontSize="medium"
                        sx={{
                          opacity: "1",
                          pointerEvents: "all",
                          position: "relative",
                        }}
                      />
                    ) : (
                      <HorizontalRule
                        fontSize="medium"
                        sx={{
                          opacity: "1",
                          pointerEvents: "all",
                          position: "relative",
                        }}
                      />
                    )}
                  </div>
                  <br />
                  <div
                    ref={revDropdownRef}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {isRevOpen && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1rem",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {revOptions.map((revo, index) => (
                          <a key={index} href={revo.path}>
                            <Typo className="header-mobile-inner-text">
                              {currentLanguage == "ar"
                                ? revo.name
                                : revo.name.toUpperCase()}
                            </Typo>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div
                  style={
                    isWarOpen
                      ? {
                          background: "#242434",
                          width: "100%",
                          padding: "1rem",
                        }
                      : { width: "100%", padding: "1rem" }
                  }
                >
                  <div
                    style={
                      isWarOpen
                        ? {
                            display: "flex",
                            gap: "1rem",
                            alignItems: "center",
                            width: "100%",
                            justifyContent: "center",
                          }
                        : {
                            display: "flex",
                            gap: "1rem",
                            alignItems: "center",
                            width: "100%",
                            justifyContent: "center",
                            background: "transparent",
                          }
                    }
                    onClick={toggleWar}
                  >
                    <Typo className="header-mobile-header-text">War</Typo>
                    {!isWarOpen ? (
                      <Add
                        fontSize="medium"
                        sx={{
                          opacity: "1",
                          pointerEvents: "all",
                          position: "relative",
                        }}
                      />
                    ) : (
                      <HorizontalRule
                        fontSize="medium"
                        sx={{
                          opacity: "1",
                          pointerEvents: "all",
                          position: "relative",
                        }}
                      />
                    )}{" "}
                  </div>
                  <br />
                  <div
                    ref={warDropdownRef}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {isWarOpen && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1rem",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {warOptions.map((revo, index) => (
                          <a href={revo.path} key={index}>
                            <Typo className="header-mobile-inner-text">
                              {currentLanguage == "ar"
                                ? revo.name
                                : revo.name.toUpperCase()}
                            </Typo>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div
                  style={
                    isSikkaOpen
                      ? {
                          background: "#242434",
                          width: "100%",
                          padding: "1rem",
                        }
                      : { width: "100%", padding: "1rem" }
                  }
                >
                  <div
                    style={
                      isSikkaOpen
                        ? {
                            display: "flex",
                            gap: "1rem",
                            alignItems: "center",
                            width: "100%",
                            justifyContent: "center",
                          }
                        : {
                            display: "flex",
                            gap: "1rem",
                            alignItems: "center",
                            width: "100%",
                            justifyContent: "center",
                            background: "transparent",
                          }
                    }
                    onClick={toggleSikka}
                  >
                    <Typo className="header-mobile-header-text">Sikka</Typo>
                    {!isSikkaOpen ? (
                      <Add
                        fontSize="medium"
                        sx={{
                          opacity: "1",
                          pointerEvents: "all",
                          position: "relative",
                        }}
                      />
                    ) : (
                      <HorizontalRule
                        fontSize="medium"
                        sx={{
                          opacity: "1",
                          pointerEvents: "all",
                          position: "relative",
                        }}
                      />
                    )}{" "}
                  </div>
                  <br />
                  <div
                    ref={warDropdownRef}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {isSikkaOpen && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "1rem",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {sikkaOptions.map((revo, index) => (
                          <a href={revo.path} key={index}>
                            <Typo className="header-mobile-inner-text">
                              {currentLanguage == "ar"
                                ? revo.name
                                : revo.name.toUpperCase()}
                            </Typo>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <LanguageSelector />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
