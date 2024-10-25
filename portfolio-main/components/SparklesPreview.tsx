"use client";
import React from "react";
import { SparklesCore } from "./ui/Sparkles";
import { LampDemo } from "./ui/lamp";

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
      <div className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        <LampDemo />
      </div>
    </div>
  );
}
