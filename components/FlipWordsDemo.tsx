import React from "react";
import { FlipWords } from "./ui/FlipWords";

export function FlipWordsDemo() {
  const words = ["Designer?", "Developer?", "beautiful", "modern"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-center text-[40px] md:text-5xl lg:text-6xl">
        Looking For a Web
        <FlipWords words={words} /> <br />
        I&apos;m Your Guy
      </div>
    </div>
  );
}
