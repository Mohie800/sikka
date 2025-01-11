import React from "react";
import DOMPurify from "dompurify";
import localFont from "next/font/local";
import { useTranslation } from "react-i18next";
import { MEDIABASEURL } from "@/app/api/end-points";
import "./DisplayHtmlContent.css";
interface DisplayHtmlContentProps {
  htmlContent: string;
  color: string;
}
const AlJazera = localFont({
  src: "../../public/assets/ArbFONTS-Al-Jazeera-Arabic-Regular.ttf",
});

const DisplayHtmlContent: React.FC<DisplayHtmlContentProps> = ({
  htmlContent,
  color,
}) => {
  // const sanitizedHtml = DOMPurify.sanitize(htmlContent);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  function addBaseUrlToImages(html: string, baseUrl: string): string {
    // Parse the HTML string into a DOM structure
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Get all <img> elements
    const images = doc.querySelectorAll<HTMLImageElement>("img");

    images.forEach((img) => {
      const src = img.getAttribute("src");
      // Update the src only if it's not already an absolute URL
      if (src && !src.startsWith("http://") && !src.startsWith("https://")) {
        img.setAttribute(
          "src",
          `${baseUrl.replace(/\/$/, "")}/${src.replace(/^\//, "")}`
        );
      }
    });

    // Return the updated HTML as a string
    return doc.body.innerHTML;
  }
  const sanitizedHtml = addBaseUrlToImages(
    htmlContent,
    "https://app.sikka.sd/"
  );

  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      style={
        currentLanguage == "ar"
          ? {
              color: color,
              width: "100%",
              fontFamily: AlJazera.style.fontFamily,
              textAlign: "justify",
            }
          : {
              color: color,
              width: "100%",
              fontFamily: "unset",
              textAlign: "justify",
            }
      }
    />
  );
};

export default DisplayHtmlContent;
