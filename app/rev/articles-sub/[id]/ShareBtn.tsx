"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import ShareIcon from "@mui/icons-material/Share";
import { IconButton } from "@mui/material";
import Typo from "@/app/component/Typo";
import { Facebook, Twitter, Link } from "@mui/icons-material";

export default function ShareBtn() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
          "_blank"
        );
        break;
      case "link":
        if (navigator.share) {
          navigator
            .share({
              title: document.title,
              url: url,
            })
            .catch(console.error);
        } else {
          navigator.clipboard
            .writeText(url)
            .then(() => {
              alert("Link copied to clipboard");
            })
            .catch(console.error);
        }
        break;
      default:
        break;
    }
    setAnchorEl(null); // Close the popper after action
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div
    className="share-btn-outer-container"
    >
      <IconButton onClick={handleClick} className="articles-share-icon">
        <ShareIcon color="info" fontSize="medium" aria-describedby={id} />
      </IconButton>

      <Popper
      style={{ marginTop: "10px" }}
      id={id} open={open} anchorEl={anchorEl}>
        <Box
          sx={{
            color: "black",
            p: 2,
            bgcolor: "background.paper",
            display: "flex",
            flexDirection: "column",
            border: "1px solid gray",
            borderRadius: "4px",
            gap: "1rem",
          }}
        >
          <div
            className="share-icons-container"
            onClick={() => handleShare("facebook")}
          >
            <Facebook color="disabled" />
            <Typo>Facebook</Typo>
          </div>
          <div
            className="share-icons-container"
            onClick={() => handleShare("twitter")}
          >
            <Twitter color="disabled" />
            <Typo>Twitter</Typo>
          </div>
          <div
            className="share-icons-container"
            onClick={() => handleShare("link")}
          >
            <Link color="disabled" />
            <Typo>Link</Typo>
          </div>
        </Box>
      </Popper>
    </div>
  );
}
