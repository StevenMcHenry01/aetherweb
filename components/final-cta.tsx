"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CtaButton } from "./cta-button";
import { SectionWrapper } from "./section-wrapper";
import { TextGenerateEffect } from "./ui/text-generate";

export const FinalCta = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <SectionWrapper className="items-center pt-0 lg:pt-10">
      <div ref={ref}>
        <AnimatePresence>
          {isInView && (
            <div className="flex flex-col items-center gap-10">
              <TextGenerateEffect
                words="Ready to elevate your brand?"
                className="text-center"
              />
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.3, delay: 1.6 }}
              >
                <CtaButton
                  text="LETS CONNECT"
                  className="px-10 py-8 bg-background text-primary border border-primary hover:bg-primary hover:text-background"
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
};
