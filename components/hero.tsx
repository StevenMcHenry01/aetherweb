"use client";
import Link from "next/link";
import { SectionWrapper } from "./section-wrapper";
import { Highlight } from "./ui/background";
import { TextGenerateEffect } from "./ui/text-generate";

const words = "We build 21st century websites for small businesses.";

export const Hero = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col justify-center gap-2">
        <h1 className="font-header text-5xl sm:text-7xl font-semibold text-primary pb-2 sm:pb-6">
          AETHERWEB
        </h1>
        <TextGenerateEffect words={words} />
        <h3 className="text-primary text-xl sm:text-4xl pt-2 sm:pt-6">
          Turning great ideas into brands that people love.{" "}
        </h3>
        <Link
          className="mt-10 sm:mt-32 text-xl sm:text-3xl ml-auto text-primary font-light pb-40 sm:pb-0"
          href="#what-we-do"
        >
          <Highlight>sounds sweet, show me more...</Highlight>
        </Link>
      </div>
    </SectionWrapper>
  );
};
