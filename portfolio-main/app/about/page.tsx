import AboutHero from "@/components/AboutHero";
import { FeaturesSectionDemo } from "@/components/Services";
import React from "react";

const About = () => {
  return (
    <div>
      <AboutHero />
      <div className="max-w-5xl mx-auto px-8 relative flex flex-col items-center justify-center gap-4">
        <p className="text-sm md:text-base md:leading-loose tracking-wide">
          With several years of experience in designing and developing
          user-friendly, visually appealing websites, I’ve worked with clients
          across various industries to bring their ideas to life
        </p>
        <h1 className="font-bold text-3xl md:text-5xl md:leading-tight text-zinc-50 max-w-3xl mt-8 text-center">
          Wide Range of
          <span className="text-purple"> Web Services </span>
        </h1>
        <FeaturesSectionDemo />
      </div>
    </div>
  );
};

export default About;
