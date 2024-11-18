"use client";
import {
  Autocomplete,
  Button,
  Divider,
  TextField,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";
import Typo from "../component/Typo";
import "../add-content/style.css";
import { useTranslation } from "react-i18next";
import { CheckBox } from "@mui/icons-material";
const Page = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const [option, setoption] = useState("");

  const contentType = [
    {
      ar: "فيديو",
      en: "video",
    },
    {
      ar: "صورة",
      en: "image",
    },
    {
      ar: "تسجيل  بودكاست",
      en: "audio/podcast",
    },
    {
      ar: "ملصق",
      en: "poster",
    },
    {
      ar: "تصميم",
      en: "design",
    },
  ];

  const contentTime = [
    {
      ar: "الثورة",
      en: "Revolution",
    },
    {
      ar: "بعد 15 ابريل",
      en: "After April 15",
    },
  ];

  const [checked, setchecked] = useState(false);

  const handleChangeChecked = () => {
    setchecked((prev) => !prev);
  };
  function handleOption(event: React.ChangeEvent<Element>): void {
    console.log(event);
    if (event.target.id == "option1") setoption("1");
    else if (event.target.id == "option2") setoption("2");
    else setoption("3");
  }

  return (
    <div
      className="add-content-container"
      style={
        currentLanguage == "ar" ? { direction: "rtl" } : { direction: "ltr" }
      }
    >
      <title>
        {currentLanguage == "ar"
          ? "المطالبة بالحقوق | سكة"
          : "Claim your rights | SIKKA"}
      </title>
      <Typo className="add-content-header">Claim Your Right</Typo>
      <Typo className="add-content-subheader">
        At Sikka, we believe that every individual has the right to preserve
        their cultural and creative heritage, and that the voices of active
        contributors should remain alive and heard. Here, we enable you to
        assert your literary rights and document your contributions, ensuring
        that your stories and inputs remain part of the collective narrative of
        our nation. We work to protect your rights and safeguard your efforts
        from being lost, staying true to our mission of empowering the community
        and preserving its creative interactions.
      </Typo>
      <div className="add-content-inputs-container">
        <div className="add-content-input-container">
          <Typo className="add-content-input-label">Name</Typo>
          <input className="add-content-input" />
        </div>
        <div className="add-content-input-container">
          <Typo className="add-content-input-label">Email</Typo>
          <input className="add-content-input" />
        </div>
        <div className="add-content-input-container">
          <Typo className="add-content-input-label">Mobile Number</Typo>
          <input className="add-content-input" />
        </div>
        <div className="add-content-input-container">
          <Typo className="add-content-input-label">WhatsApp Number</Typo>
          <input className="add-content-input" />
        </div>
      </div>

      <div className="add-content-autocomplete">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={contentType.map((val) =>
            currentLanguage == "ar" ? val.ar : val.en
          )}
          sx={{ width: "100%" }}
          renderInput={(params) => (
            <TextField
              {...params}
              color="info"
              label={currentLanguage == "ar" ? "نوع المحتوى" : "Content Type"}
            />
          )}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={contentTime.map((val) =>
            currentLanguage == "ar" ? val.ar : val.en
          )}
          style={
            currentLanguage == "ar"
              ? { direction: "rtl" }
              : { direction: "ltr" }
          }
          sx={{ width: "100%" }}
          ListboxProps={
            currentLanguage == "ar" ? { dir: "rtl" } : { dir: "ltr" }
          }
          renderInput={(params) => (
            <TextField
              style={
                currentLanguage == "ar"
                  ? { direction: "rtl" }
                  : { direction: "ltr" }
              }
              {...params}
              label={currentLanguage == "ar" ? "فترة المحتوى" : "Content Time"}
            />
          )}
        />
      </div>

      <div>
        <div className="add-content-input-container-2">
          <Typo className="add-content-input-label">Sikka Content Link</Typo>
          <input className="add-content-input" />
        </div>

        <Divider sx={{ height: "5vh", border: "none" }} />

        <div className="add-content-input-container-2">
          <Typo className="add-content-input-label">Original Content Link</Typo>
          <input className="add-content-input" />
        </div>

        <Divider sx={{ height: "5vh", border: "none" }} />

        <div className="add-content-input-container-2">
          <Typo className="add-content-input-label">Content Description</Typo>
          <textarea rows={5} className="add-content-input" />
        </div>

        <Divider sx={{ height: "10vh", border: "none" }} />

        <div className="add-content-input-container-3">
          <Typo className="add-content-input-label">
            Add my rights to Content
          </Typo>
          <Checkbox
            id="option1"
            checked={option == "1"}
            onChange={(event: React.ChangeEvent) => handleOption(event)}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
        <div className="add-content-input-container-3">
          <Typo className="add-content-input-label">Remove my content</Typo>
          <Checkbox
            id="option2"
            checked={option == "2"}
            onChange={(event: React.ChangeEvent) => handleOption(event)}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
        <div className="add-content-input-container-3">
          <Typo className="add-content-input-label">others</Typo>
          <Checkbox
            id="option3"
            checked={option == "3"}
            onChange={(event: React.ChangeEvent) => handleOption(event)}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>

        {option == "3" && (
          <div className="add-content-input-container-2">
            <textarea rows={5} className="add-content-input" />
          </div>
        )}
      </div>
      <Divider sx={{ height: "1vh", borderColor: "white" }} />

      <div className="add-content-input-container-3">
        <Typo className="add-content-input-label">Sikka Content Sharing</Typo>
        <Checkbox
          checked={checked}
          onChange={handleChangeChecked}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
      <Divider sx={{ height: "5vh", border: "none" }} />

      <div className="add-content-send-btn-container">
        <Button className="add-content-send-btn">
          <Typo>Send</Typo>
        </Button>
      </div>
    </div>
  );
};

export default Page;
