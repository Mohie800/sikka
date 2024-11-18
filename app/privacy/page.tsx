"use client";
import React, { useEffect } from "react";
import "./style.css";
import { Divider } from "@mui/material";
import { useTranslation } from "react-i18next";
import Typo from "../component/Typo";
import LoadingIndicator from "../component/LoadingIndicator";
import { useGetConfigMutation } from "../services/config/configApi";
import DisplayHtmlContent from "../component/DisplayHtmlContent";
const Page = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  useEffect(() => {
    const fetchData = async () => {
      await getConfig();
    };
    fetchData();
  }, []);

  const [getConfig, { data, isLoading }] = useGetConfigMutation();

  if (isLoading || !data) {
    return <LoadingIndicator />;
  }

  return (
    <div
      className="privacy-main-container"
      style={
        currentLanguage == "ar" ? { direction: "rtl" } : { direction: "ltr" }
      }
    >
      <title>
        {currentLanguage == "ar"
          ? "   سياسات الخصوصية | سكة"
          : "Privacy Policy | SIKKA"}
      </title>

      <DisplayHtmlContent
        htmlContent={
          currentLanguage == "ar" ? data.data[0].value : data.data[1].value
        }
        color="white"
      />

      {/* <Divider sx={{ border: "none", height: "4vh" }} />
      <Typo>Last updated: December 25, 2023</Typo>
      <Divider sx={{ border: "none", height: "4vh" }} />
      <Typo>
        Thank you for using Sikka.sd Platform (the &apos;Platform&apos;). This
        comprehensive Privacy Policy outlines the collection, use, and
        protection of your information. By accessing or using the Platform, you
        agree to the terms and conditions of this Privacy Policy.
      </Typo>
      <Divider sx={{ border: "none", height: "10vh" }} />


      <Typo className="privacy-h2">1. Introduction</Typo>
      <Divider sx={{ border: "none", height: "1vh" }} />
      <span>
        Welcome to Sikka.sd Platform, dedicated to documenting the
        transformation that occurred in Sudan during the 2019 revolution. This
        Privacy Policy is designed to provide you with clarity on how we handle
        your personal information and ensure your confidence in using our
        services.
      </span>
      <Divider sx={{ border: "none", height: "10vh" }} />


      <h2>2. Information We Collect</h2>
      <Divider sx={{ border: "none", height: "2vh" }} />
      <h3>2. 1. Personal Information</h3>
      <Divider sx={{ border: "none", height: "1vh" }} />
      <span>
        Welcome to Sikka.sd Platform, dedicated to documenting the
        transformation that occurred in Sudan during the 2019 revolution. This
        Privacy Policy is designed to provide you with clarity on how we handle
        your personal information and ensure your confidence in using our
        services.
      </span>
      <Divider sx={{ border: "none", height: "4vh" }} />

      <Divider sx={{ border: "none", height: "2vh" }} />
      <h3>2. 2. Non-Personal Information</h3>
      <Divider sx={{ border: "none", height: "1vh" }} />
      <span>
        To improve the functionality and content of Sikka.sd, we also collect
        non-personal information such as IP addresses, browser types, and
        browsing patterns. This data is used for statistical purposes to refine
        user experience and enhance overall Platform quality.
      </span>

      <Divider sx={{ border: "none", height: "10vh" }} />


      <h2>3. Use of Information</h2>
      <Divider sx={{ border: "none", height: "2vh" }} />
      <h3>3. 1. Personal Information</h3>
      <Divider sx={{ border: "none", height: "1vh" }} />
      <span>
        The personal information you provide is utilized for the purpose for
        which it was collected. This includes responding to your inquiries,
        providing updates, and facilitating your active participation on
        Sikka.sd.
      </span>
      <Divider sx={{ border: "none", height: "4vh" }} />

      <Divider sx={{ border: "none", height: "2vh" }} />
      <h3>3. 2. Non-Personal Information</h3>
      <Divider sx={{ border: "none", height: "1vh" }} />
      <span>
        Non-personal information serves analytical and statistical purposes,
        aiming to refine user experience and elevate the overall quality of
        content and services on the Platform.
      </span>
      <Divider sx={{ border: "none", height: "10vh" }} />


      <h2>4. Protection of Information</h2>
      <Divider sx={{ border: "none", height: "1vh" }} />
      <span>
        We are committed to safeguarding your information and have implemented
        robust security measures to prevent unauthorized access, disclosure,
        alteration, or destruction of your personal information.
      </span>
      <Divider sx={{ border: "none", height: "10vh" }} />

      <h2>5. Sharing of Information</h2>
      <Divider sx={{ border: "none", height: "2vh" }} />
      <h3>5. 1. Content Submission </h3>
      <Divider sx={{ border: "none", height: "1vh" }} />
      <span>
        When you submit podcasts, videos, photos, or other content to Sikka.sd,
        please be aware that this content may be publicly accessible. We
        encourage you to consider carefully the information you share to
        maintain control over your online presence.
      </span>
      <Divider sx={{ border: "none", height: "4vh" }} />

      <Divider sx={{ border: "none", height: "2vh" }} />
      <h3>5. 2. Copyrighted Material</h3>
      <Divider sx={{ border: "none", height: "1vh" }} />
      <span>
        Respecting intellectual property rights is a priority. If you believe
        that your copyrighted material is being used on Sikka.sd without proper
        authorization, please contact us. We will promptly address any valid
        concerns and take appropriate action.
      </span>
      <Divider sx={{ border: "none", height: "10vh" }} />


      <h2>6. Contact Information</h2>
      <Divider sx={{ border: "none", height: "1vh" }} />
      <span>
        If you wish to attach your name to your work or have any inquiries
        regarding this Privacy Policy, please contact us at [info@sikka.sd].
      </span>
      <Divider sx={{ border: "none", height: "10vh" }} />


      <h2>7. Changes to Privacy Policy</h2>
      <Divider sx={{ border: "none", height: "1vh" }} />
      <span>
        To ensure transparency, we may update this Privacy Policy periodically.
        Notification of changes will be made by posting the new Privacy Policy
        on this page. It is your responsibility to review this Privacy Policy
        regularly for any modifications. By continuing to use Sikka.sd after
        such modifications, you acknowledge and agree to the updated Privacy
        Policy.
      </span>
      <Divider sx={{ border: "none", height: "10vh" }} />


      <h2>8. Consent</h2>
      <Divider sx={{ border: "none", height: "1vh" }} />
      <span>
        By using Sikka.sd, you consent to the terms outlined in this Privacy
        Policy. This Privacy Policy for Sikka.sd Platform reflects our
        commitment to your privacy and the responsible handling of your personal
        information. If you have any further questions or concerns, please do
        not hesitate to contact us.
      </span>
      <Divider sx={{ border: "none", height: "10vh" }} />


      <span>
        Thank you for being a part of Sikka.sd, where the transformation of
        Sudan&apos;s rich cultural landscape is documented and celebrated.
      </span>  */}
    </div>
  );
};

export default Page;
