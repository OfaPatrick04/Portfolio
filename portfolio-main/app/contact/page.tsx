import { SignupFormDemo } from "@/components/ContactForm";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import React from "react";

const contact = () => {
  return (
    <div className="pt-20 w-full">
      <div className="w-full">
        <TextGenerateEffect
          words="Want something done? Lets get started today!!!"
          className="text-center text-[40px] md:text-5xl lg:text-6xl"
        />
        <SignupFormDemo />

        <BackgroundBeams />
      </div>
    </div>
  );
};

export default contact;
