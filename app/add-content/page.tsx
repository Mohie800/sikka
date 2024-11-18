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
import "./style.css";
import { useTranslation } from "react-i18next";
import { CheckBox } from "@mui/icons-material";
const Page = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const [checked, setchecked] = useState(false);

  const handleChangeChecked = () => {
    setchecked((prev) => !prev);
  };

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
  return (
    <div
      className="add-content-container"
      style={
        currentLanguage == "ar" ? { direction: "rtl" } : { direction: "ltr" }
      }
    >
      <title>
        {currentLanguage == "ar"
          ? "اضافة محتواك | سكة"
          : "Add Your Content | SIKKA"}
      </title>
      <Typo className="add-content-header">Add Your Content</Typo>
      <Typo className="add-content-subheader">
        Sikka is a platform dedicated to enriching the archive and documentation
        of the interactions between the arts and the community with the world of
        the Sudanese revolution and its subsequent events, extending to the
        conditions of the April 5th war. During this time, we have aimed to be a
        refuge for commemoration and encouragement of positive action,
        presenting public contributions to shelter the great history of the
        Sudanese experience. Sikka is thus a dynamic, participatory space that
        welcomes the contributions and voices of Sudanese people to document
        peaceful movements and spaces of arts and community.
      </Typo>
      <Typo className="add-content-subheader">
        We believe that every voice has value, and every piece of content
        contributes to creating a comprehensive picture that reflects community
        interactions and developments. By submitting your textual, visual, or
        auditory materials, you help revive stories that are part of our
        cultural, human, and artistic memory, allowing us to feel the
        transformations of this diversity in descriptive and visual narratives
        and the unique positioning of literature, arts, and forms of expression.
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
          <Typo className="add-content-input-label">Content Link</Typo>
          <input className="add-content-input" />
        </div>

        <Divider sx={{ height: "5vh", border: "none" }} />

        <div className="add-content-input-container-2">
          <Typo className="add-content-input-label">Content Description</Typo>
          <textarea rows={5} className="add-content-input" />
        </div>

        <Divider sx={{ height: "10vh", border: "none" }} />

        <div className="add-content-input-container-3">
          <Typo className="add-content-input-label">Sikka Content Sharing</Typo>
          <Checkbox
            checked={checked}
            onChange={handleChangeChecked}
            inputProps={{ "aria-label": "controlled" }}
          />
        </div>
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
