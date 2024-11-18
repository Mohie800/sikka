import { CircularProgress } from "@mui/material";
import React from "react";
import './style.css'
const LoadingIndicator = () => {
  return (
    <div className="loading-indicator-comp">
      <CircularProgress color="info" />
    </div>
  );
};

export default LoadingIndicator;
