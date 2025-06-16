"use client";

import { useEffect, useState } from "react";
import TextTransition from "./text";
import { config } from "@react-spring/web";
const TEXTS = ["website", "backend"];

export default function Transition() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <span className="ml-2 text-white">
      <TextTransition inline springConfig={config.gentle}>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
      s.
    </span>
  );
}
