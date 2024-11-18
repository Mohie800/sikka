"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
const Page = () => {
  const item = useRef(null);
  useEffect(() => {
    gsap.to(item.current, 1, { backgroundColor: "red" });
  }, []);

  return <div ref={item}>Page</div>;
};

export default Page;
