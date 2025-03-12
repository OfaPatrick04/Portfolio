"use client";
import React from "react";
import { SparklesCore } from "./ui/Sparkles";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

export function SparklesPreview() {
  return (
    <div className="h-[40rem] relative w-full bg-black-100 flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <TextGenerateEffect
          words="Bringing Ideas To Life"
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
        />
    </div>
  );
}
