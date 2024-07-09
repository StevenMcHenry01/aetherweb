"use client";
import Image from "next/image";
import Robert from "../public/robert.jpeg";
import Steven from "../public/steven.jpeg";
import { theme } from "../theme.config";
import { SectionTitle } from "./section-title";
import { SectionWrapper } from "./section-wrapper";

import { motion } from "framer-motion";

const people = [
  {
    name: "ROBERT GREGG",
    image: Robert,
  },
  {
    name: "STEVEN MCHENRY",
    image: Steven,
  },
];

export const AboutUs = () => {
  return (
    <SectionWrapper id="about-us">
      <SectionTitle title="About Us" color={theme.secondary} />
      <div className="flex flex-wrap justify-center gap-6 pt-16 sm:pt-28 ">
        {people.map((person) => (
          <div key={person.name} className="flex flex-col items-center gap-8">
            <Image
              src={person.image}
              alt="Person photo"
              width={400}
              height={600}
              className="rounded-xl transition-all duration-500 hover:shadow-2xl hover:shadow-slate-800 hover:scale-[1.02]"
            />
            <motion.h2
              initial={{ y: -15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-xl sm:text-3xl text-secondary font-medium"
            >
              {person.name}
            </motion.h2>
          </div>
        ))}
      </div>

      <div className="w-full border-2 border-secondary text-secondary rounded-xl flex justify-center text-center py-10 px-10 sm:px-32 mt-16 sm:mt-24 transition-all duration-500 hover:bg-secondary hover:text-background">
        <p className="text-lg sm:text-2xl font-light">
          Aether Web is a small yet skilled ensemble of designers, marketers,
          and developers. We&apos;ve turned our passion for tech and creative
          marketing into a dynamic web services agency supporting the backbone
          of America: small businesses.{" "}
        </p>
      </div>
    </SectionWrapper>
  );
};
