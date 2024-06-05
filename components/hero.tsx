"use client";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="flex flex-col justify-center px-10 py-5 sm:px-22 sm:py-16 lg:px-52 lg:py-36 gap-2 max-w-[1600px] mx-auto">
      <h1 className="font-header text-5xl sm:text-7xl font-semibold text-primary pb-2 sm:pb-6">
        AETHERWEB
      </h1>
      <h2 className="text-3xl sm:text-8xl font-thin">We build 21st century</h2>
      <h2 className="text-3xl sm:text-8xl font-thin">
        webistes for small businesses.
      </h2>
      <h3 className="text-primary text-xl sm:text-4xl pt-2 sm:pt-6">
        Turning great ideas into brands that people love.{" "}
      </h3>
      <Link
        className="pt-10 sm:pt-32 text-xl sm:text-3xl ml-auto text-primary font-light"
        href="#what-we-do"
      >
        sounds sweet, show me more...
      </Link>
    </section>
  );
};
