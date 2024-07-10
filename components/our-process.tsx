"use client";
import { motion } from "framer-motion";
import { theme } from "../theme.config";
import { SectionTitle } from "./section-title";
import { SectionWrapper } from "./section-wrapper";

const steps = [
  {
    id: "01",
    title: "CONNECT",
    text: "To succeed we need to understand what exists today and your goals for tomorrow. We'll grab the requirements for your project and quickly turn around a proposal.",
    textAlign: "sm:text-right",
  },
  {
    id: "02",
    title: "RESEARCH",
    text: "We dive into your industry and competition. We unpack your target audience to make sure what we design is what they crave.",
    textAlign: "text-right sm:text-left",
  },
  {
    id: "03",
    title: "DESIGN",
    text: "We'll send you a high fidelity look and feel of your finished product for you to review. We aim to get as close as possible to your desired outcome in the first go, keeping timeline top of mind.",
    textAlign: "sm:text-right",
  },
  {
    id: "04",
    title: "DEVELOP",
    text: "When it's right, we build it, test, and publish.",
    textAlign: "text-right sm:text-left",
  },
];

const Step = ({
  id,
  title,
  text,
  textAlign,
}: {
  id: string;
  title: string;
  text: string;
  textAlign: string;
}) => (
  <div className={`pt-7 pb-7 sm:pb-20 ${textAlign}`}>
    <h2 className="text-3xl sm:text-4xl font-bold font-consolas pb-3">
      [{id}]
    </h2>
    <h2 className="text-3xl sm:text-4xl font-medium">{title}</h2>
    <p className="text-lg sm:text-2xl">{text}</p>
  </div>
);

export const OurProcess = () => {
  const animationVariants = {
    animate: {
      y: [0, 0, 0, 130, 130, 300, 300, 500, 500, 650, 650, 0], // Adjust the values based on your line's height
      transition: {
        duration: 8,
        ease: "linear",
        times: [0, 0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.5, 1.6, 1.7],
        repeat: Infinity,
      },
    },
  };
  return (
    <div
      className="bg-primary flex flex-row justify-center min-w-screen"
      id="our-process"
    >
      <SectionWrapper>
        <SectionTitle title="Our Process" color={theme.background} />
        <div className="flex pt-10 sm:pt-20 text-background flex-col sm:flex-row">
          <div className="flex-1 flex-col items-end gap-16 hidden sm:flex">
            <Step {...steps[0]} />
            <Step {...steps[2]} />
          </div>
          <div className="flex-1 flex-col items-end gap-3 sm:hidden flex">
            <Step {...steps[0]} />
            <Step {...steps[1]} />
          </div>
          <div className="hidden sm:block w-[3px] bg-background mx-20 relative">
            <motion.div
              className="w-8 h-8 bg-black rounded-full absolute top-0 -left-[14px]"
              variants={animationVariants}
              whileInView="animate"
            />
          </div>
          <div className="flex-1 flex-col items-end sm:items-start text-left gap-16 hidden sm:flex mt-48">
            <Step {...steps[1]} />
            <Step {...steps[3]} />
          </div>
          <div className="flex-1 flex-col items-end text-left gap-3 sm:hidden flex">
            <Step {...steps[2]} />
            <Step {...steps[3]} />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};
