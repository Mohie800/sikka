import React from "react";
import DOMPurify from "dompurify";
import localFont from "next/font/local";
import { useTranslation } from "react-i18next";
import './DisplayHtmlContent.css'
interface DisplayHtmlContentProps {
  htmlContent: string;
  color:string;
}
const AlJazera = localFont({
  src: "../../public/assets/ArbFONTS-Al-Jazeera-Arabic-Regular.ttf",
});

const DisplayHtmlContent: React.FC<DisplayHtmlContentProps> = ({
  htmlContent,
  color
}) => {
  const sanitizedHtml = DOMPurify.sanitize(htmlContent);
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      style={ 
        currentLanguage == "ar" ?
        {
        color: color,
        width: "100%",
        fontFamily: AlJazera.style.fontFamily,
        textAlign: "justify",
      }
      : 
      {
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
