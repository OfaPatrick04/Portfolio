import AboutHero from "@/components/AboutHero";
import React from "react";

const About = () => {
  return (
    <div>
      <AboutHero />
      <div className="max-w-5xl mx-auto px-8 relative">
        <p className="text-sm md:text-base md:leading-loose tracking-wide">
          With several years of experience in designing and developing
          user-friendly, visually appealing websites, I’ve worked with clients
          across various industries to bring their ideas to life
        </p>
      </div>
    </div>
  );
};

export default About;
