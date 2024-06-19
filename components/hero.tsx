"use client";
import Link from "next/link";
import { SectionWrapper } from "./section-wrapper";

export const Hero = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col justify-center gap-2">
        <h1 className="font-header text-5xl sm:text-7xl font-semibold text-primary pb-2 sm:pb-6">
          AETHERWEB
        </h1>
        <h2 className="text-3xl sm:text-8xl font-thin">
          We build 21st century
        </h2>
        <h2 className="text-3xl sm:text-8xl font-thin">
          webistes for small businesses.
        </h2>
        <h3 className="text-primary text-xl sm:text-4xl pt-2 sm:pt-6">
          Turning great ideas into brands that people love.{" "}
        </h3>
        <Link
          className="pt-10 sm:pt-32 text-xl sm:text-3xl ml-auto text-primary font-light pb-40 sm:pb-0"
          href="#what-we-do"
        >
          sounds sweet, show me more...
        </Link>
      </div>
    </SectionWrapper>
  );
};
