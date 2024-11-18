import TopicOutlined from "@mui/icons-material/ArrowUpward";
import ExpandMoreIcon from "@mui/icons-material/ArrowDownward";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@mui/material";
import React from "react";

const ScrollToTopButton = () => {
  const handleScrollTo = (position:string) => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    let scrollToPosition;
    if (position === "top") {
      scrollToPosition = 0;
    } else if (position === "bottom") {
      scrollToPosition = documentHeight - windowHeight;
    }

    window.scrollTo({
      top: scrollToPosition,
      behavior: "smooth"
    });
  };

  return (
    <div>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction
          icon={<TopicOutlined />}
          tooltipTitle={"to top"}
          onClick={() => handleScrollTo("top")} // Scroll to top when clicked
        />
        <SpeedDialAction
          icon={<ExpandMoreIcon />}
          tooltipTitle={"to bottom"}
          onClick={() => handleScrollTo("bottom")} // Scroll to bottom when clicked
        />
      </SpeedDial>
    </div>
  );
};

export default ScrollToTopButton;
