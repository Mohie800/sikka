"use client";
import { useEffect } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "./ar.json";
import en from "./en.json";

// Initialize i18n
i18n.use(initReactI18next).init({
  lng:
    typeof window !== "undefined"
      ? localStorage.getItem("i18nextLng") || "en"
      : "en",
  debug: false,

  resources: {
    en: {
      translation: en,
    },
    ar: {
      translation: ar,
    },
  },
});

// Function to set language preference
export const setLanguagePreference = (language: string) => {
  console.log("Setting language preference:", language);
  if (typeof window !== "undefined") {
    localStorage.setItem("i18nextLng", language);
    i18n.changeLanguage(language);
  }
};

// Component to handle setting language preference on mount
const LanguageSetter = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("i18nextLng");
      console.log("Stored Language:", storedLanguage);
      if (storedLanguage) {
        setLanguagePreference(storedLanguage);
      }
    }
  }, []);

  return null; // This component doesn't render anything
};

export default i18n;
export { LanguageSetter };
