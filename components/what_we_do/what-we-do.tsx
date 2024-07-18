"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import HalfCircle from "../../public/half-circle.svg";
import { theme } from "../../theme.config";
import { HoverArrow } from "../hover-arrow";
import { SectionTitle } from "../section-title";
import { SectionWrapper } from "../section-wrapper";
import styles from "./styles.module.scss";

const cards = [
  {
    title: "DIGITAL FACE-LIFT",
    description: "For existing businesses",
    backDescription:
      "If you're current solution isn't contributing to your business goals or your website simply looks like it was built in the 90s, we're here to change that. ",
    backDescription2:
      "We'll rebuild your digital identity so you can succeed in today's digital first economy.",
    startingAt: "Starting at $4,500",
  },
  {
    title: "MAKE IT ETHEREAL",
    description: "Startups & custom applications",
    backDescription:
      "Ready to finally take the leap? We know how stressful it can be to start your new business, we’ve been there! We’ll set you up with all the must-have marketing assets and technology tools you may need to effectively run your new business.",
    startingAt: "Starting at $5,600",
  },
];

const Card = ({
  title,
  description,
  backDescription,
  backDescription2,
  startingAt,
}: {
  title: string;
  description: string;
  backDescription: string;
  backDescription2?: string;
  startingAt?: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className={`border-2 border-secondary relative rounded-2xl p-4 sm:p-10 bg-background flex-1 min-h-[200px] sm:min-h-[300px] flex flex-col justify-end items-start cursor-pointer overflow-hidden group/card ${styles.card}`}
      onClick={handleExpand}
      animate={{
        backgroundColor: isExpanded ? theme.secondary : theme.background,
        color: isExpanded ? theme.background : theme.secondary,
        height: isExpanded ? "370px" : "300px",
      }}
      layout
      transition={{ duration: 0.3 }}
    >
      <motion.h2 layout className="text-xl sm:text-3xl sm:pb-3 font-medium">
        {title}
      </motion.h2>
      <motion.p layout className="text-lg sm:text-2xl font-light">
        {description}
      </motion.p>
      <AnimatePresence>
        {isExpanded && (
          <div>
            <motion.p
              className="text-lg sm:text-xl font-light pt-5"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              {backDescription}
            </motion.p>
            <motion.p
              className="text-lg sm:text-xl font-light pt-5"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              {backDescription2}
            </motion.p>
            <motion.p
              className="text-lg sm:text-xl font-semibold pt-5"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              {startingAt}
            </motion.p>
          </div>
        )}
      </AnimatePresence>
      <HoverArrow
        className="absolute right-4 sm:right-6 bottom-4 sm:bottom-[25px]"
        color={theme.secondary}
      />
    </motion.div>
  );
};

export const WhatWeDo = () => {
  return (
    <SectionWrapper id="what-we-do">
      <SectionTitle title="What We Do" color={theme.secondary} />
      <div className="flex justify-between pt-9 items-center sm:gap-48 md:gap-72">
        <p className="text-secondary text-xl">
          Developing 100% custom websites, for all business types, is our forte.
          All projects include secure SSL, SEO, conversion rate optimization,
          and lead capture configuration.
        </p>
        <div className="flex-col hidden sm:flex flex-shrink-0 group/half">
          <motion.div
            initial={{ y: -15, opacity: 0, rotate: -10 }}
            whileInView={{ y: 4, opacity: 1, rotate: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -25 }}
          >
            <Image
              src={HalfCircle}
              alt="half circle decoration"
              width={180}
              height={88}
            />
          </motion.div>
          <motion.div
            initial={{ y: 15, opacity: 0, rotate: 20 }}
            whileInView={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: 25 }}
          >
            <Image
              src={HalfCircle}
              alt="half circle decoration"
              width={180}
              height={88}
            />
          </motion.div>
        </div>
      </div>
      <div className="pt-10 sm:pt-20 flex flex-col sm:flex-row gap-10">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            backDescription={card.backDescription}
            backDescription2={card.backDescription2}
            startingAt={card.startingAt}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};
