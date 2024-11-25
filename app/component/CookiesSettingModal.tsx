// components/CookieConsent.tsx
import React, { useEffect, useState } from "react";
import {
  setCookie,
  getCookie,
  setEssentialCookies,
  setFunctionalCookies,
  setAnalyticsCookies,
  setMarketingCookies,
  acceptFunctionalCookies,
  acceptAnalyticsCookies,
  acceptMarketingCookies,
} from "../../utils/cookieUtils";
import styles from "../CookieConsent.module.css";
import Typo from "./Typo";
import { Divider, Fade, Modal, Switch } from "@mui/material";
import Image from "next/image";
import logo from "../rev/logo-white.png";
import { Clear, CloseFullscreen } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
export interface Preferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const CookiesSettingModal: React.FC<{
  open: boolean;
  setOpen: (val: boolean) => void;
}> = ({ open, setOpen }) => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const [deviceSize, changeDeviceSize] = useState(0);
  const [isDesktop, setisDesktop] = useState(false);

  const [isTablet, setisTablet] = useState(false);
  const [isMobilePhone, setisMobilePhone] = useState(false);

  const [isVisible, setIsVisible] = useState(false);
  const [isCookieOpen, setisCookieOpen] = useState(true);

  const [preferences, setPreferences] = useState<Preferences>({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    changeDeviceSize(window.innerWidth);
    const cookieConsent = getCookie("cookieConsent");
    if (!cookieConsent) {
      setIsVisible(true);
    } else {
      setPreferences(JSON.parse(cookieConsent));
    }
  }, []);

  useEffect(() => {
    if (deviceSize != 0) {
      setisDesktop(deviceSize > 1025);
      setisTablet(deviceSize < 1024 && deviceSize >= 768);
      setisMobilePhone(deviceSize < 767);
    }
  }, [deviceSize]);

  const handleAcceptAll = () => {
    setCookie("cookieConsent", JSON.stringify(preferences), 30);
    setEssentialCookies();
    acceptFunctionalCookies(preferences);
    acceptAnalyticsCookies(preferences);
    acceptMarketingCookies(preferences);
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  const handleSettingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreferences({ ...preferences, [e.target.name]: e.target.checked });
  };

  const handleSaveSettings = () => {
    setCookie("cookieConsent", JSON.stringify(preferences), 30);
    setEssentialCookies(); // Always set essential cookies
    acceptFunctionalCookies(preferences);
    acceptAnalyticsCookies(preferences);
    acceptMarketingCookies(preferences);
    setOpen(false);
  };

  const handleSwitchChange =
    (name: keyof Preferences) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPreferences({ ...preferences, [name]: event.target.checked });
    };

  if (!isVisible) return null;
  console.log(isMobilePhone);
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        className={styles.cookieModalSettingsContainer}
        sx={{ overflowY: "auto" }}
        style={
          currentLanguage == "ar"
            ? { direction: "rtl", display: "flex" }
            : { direction: "ltr" }
        }
      >
        <Fade in={open}>
          <div className={styles.cookieModalOuterContainer}>
            <div className={styles.cookieModalLogoContainer}>
              <Image
                src={logo}
                alt="logo"
                width={100}
                height={100}
                className={styles.cookieLogoImg}
              />
              <Clear
                className={styles.cookieClearIcon}
                fontSize="large"
                onClick={() => {
                  setOpen(false);
                  setisCookieOpen(true);
                }}
              />
            </div>

            <div>
              <Typo
                fontSize={isMobilePhone ? 15 : 20}
                fontWeight={600}
                style={
                  currentLanguage == "ar"
                    ? { direction: "rtl", display: "flex" }
                    : { direction: "ltr" }
                }
              >
                Privacy Settings
              </Typo>
              <br />
              <Typo
                style={
                  currentLanguage == "ar"
                    ? { direction: "rtl", display: "flex" }
                    : { direction: "ltr" }
                }
                fontSize={isMobilePhone ? 10 : 15}
              >
                Here you can select or deactivate various tags, trackers,
                analysis tools used on this website.
              </Typo>
              {!isMobilePhone ? (
                <div>
                  <br />
                  <br />
                </div>
              ) : (
                <br />
              )}
              <div
                className={styles.cookieModalInnerContainer}
                style={
                  currentLanguage == "ar"
                    ? { direction: "rtl", display: "flex" }
                    : { direction: "ltr" }
                }
              >
                <div className={styles.cookieModalInnerText}>
                  <Typo
                    fontSize={isMobilePhone ? 12 : 15}
                    fontWeight={600}
                    color={"black"}
                  >
                    Essential
                  </Typo>
                  <Typo color={"black"} fontSize={isMobilePhone ? 10 : 13}>
                    These cookies are necessary so that you can navigate through
                    the website and use essential functions.
                  </Typo>
                </div>
                <div className={styles.cookieModalSwitchContainer}>
                  <Switch
                    checked={preferences.essential}
                    onChange={handleSwitchChange("essential")}
                    aria-label="Essential cookies"
                  />
                </div>
              </div>
              {!isMobilePhone ? (
                <div>
                  <br />
                  <br />
                </div>
              ) : (
                <br />
              )}
              <div
                className={styles.cookieModalInnerContainer}
                style={
                  currentLanguage == "ar"
                    ? { direction: "rtl", display: "flex" }
                    : { direction: "ltr" }
                }
              >
                <div className={styles.cookieModalInnerText}>
                  <Typo
                    fontSize={isMobilePhone ? 12 : 15}
                    fontWeight={600}
                    color={"black"}
                  >
                    Functional
                  </Typo>
                  <Typo color={"black"} fontSize={isMobilePhone ? 10 : 13}>
                    These data processing services help us analyze how users
                    interact with our website. In addition, some technologies
                    allow us to provide certain features and content, including
                    embedded videos, maps or posts from social networks.
                  </Typo>
                </div>
                <div className={styles.cookieModalSwitchContainer}>
                  <Switch
                    checked={preferences.analytics}
                    onChange={handleSwitchChange("analytics")}
                    aria-label="Analytics cookies"
                  />
                </div>
              </div>
              {!isMobilePhone ? (
                <div>
                  <br />
                  <br />
                </div>
              ) : (
                <br />
              )}
              <div
                className={styles.cookieModalInnerContainer}
                style={
                  currentLanguage == "ar"
                    ? { direction: "rtl", display: "flex" }
                    : { direction: "ltr" }
                }
              >
                <div className={styles.cookieModalInnerText}>
                  <Typo
                    fontSize={isMobilePhone ? 12 : 15}
                    fontWeight={600}
                    color={"black"}
                  >
                    Marketing
                  </Typo>
                  <Typo color={"black"} fontSize={isMobilePhone ? 10 : 13}>
                    These cookies and similar technologies are used to show you
                    personalized and therefore relevant advertising content.
                  </Typo>
                </div>
                <div className={styles.cookieModalSwitchContainer}>
                  <Switch
                    checked={preferences.marketing}
                    onChange={handleSwitchChange("marketing")}
                    aria-label="Marketing cookies"
                  />
                </div>
              </div>
            </div>
            <div className={styles.buttonContainer2}>
              <button
                className={styles.acceptButton2}
                onClick={handleAcceptAll}
              >
                <Typo fontSize={isMobilePhone ? 10 : 15}>Accept All</Typo>
              </button>
              <button className={styles.declineButton2} onClick={handleDecline}>
                <Typo fontSize={isMobilePhone ? 10 : 15}>Decline</Typo>
              </button>
              <button
                className={styles.settingsButton2}
                onClick={handleSaveSettings}
              >
                <Typo fontSize={isMobilePhone ? 10 : 15}>Save Settings</Typo>
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default CookiesSettingModal;
