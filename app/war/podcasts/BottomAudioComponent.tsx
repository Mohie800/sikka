"use client";
import React, { useEffect, useState } from "react";
import Typo from "../../component/Typo";
import AudioPlayer from "react-h5-audio-player";
import "./style.css";
import { Close } from "@mui/icons-material";

interface Props {
  open: boolean;
  audioRef: React.MutableRefObject<any>;
  audio: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  podcast_title: string;
  audio_title: string;
}

const BottomAudioComponent = ({
  audioRef,
  open,
  audio,
  setOpen,
  audio_title = "",
  podcast_title = "",
}: Props) => {
  const [deviceSize, changeDeviceSize] = useState(0);
  const [isMobilePhone, setisMobilePhone] = useState(false);
  const [isDesktop, setisDesktop] = useState(false);
  const [isTablet, setisTablet] = useState(false);

  useEffect(() => {
    if (open && audioRef.current?.audio.current) {
      audioRef.current.audio.current.play();
    }
    changeDeviceSize(window.innerWidth);
  }, [open, audioRef]); // Dependency array ensures effect runs when open or audioRef changes

  useEffect(() => {
    if (deviceSize != 0) {
      setisDesktop(deviceSize > 1025);
      setisTablet(deviceSize < 1024 && deviceSize >= 768);
      setisMobilePhone(deviceSize < 767);
    }
  }, [deviceSize]);

  const handleClose = () => {
    setOpen(false);
    if (open && audioRef.current?.audio.current) {
      audioRef.current.audio.current.pause();
    }
  };

  return (
    <div className={`hero-card-player ${open ? "show-player" : ""}`}>
      <Close color="info" className="audio-close-icon" onClick={handleClose} />
      <div className="hero-player-meta-container">
        <Typo className="hero-player-meta-podcast">{podcast_title}</Typo>
        <Typo className="hero-player-meta-episode">{audio_title}</Typo>
      </div>
      <AudioPlayer
        progressJumpStep={10000}
        layout={isMobilePhone ? "stacked-reverse" : "horizontal-reverse"}
        showSkipControls={true}
        showJumpControls={false}
        customAdditionalControls={[]}
        className="custom-audio-player"
        ref={audioRef}
        src={audio}
      />
    </div>
  );
};

export default BottomAudioComponent;
