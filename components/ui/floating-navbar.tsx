"use client";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { cn } from "../../lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-full sm:max-w-fit fixed top-6 inset-x-0 mx-4 sm:mx-auto rounded-full border border-primary bg-background shadow-lg z-[5000] p-3 sm:px-10 items-center justify-center space-x-4 sm:space-x-8",
          className
        )}
      >
        {navItems.map((navItem: any) => (
          <Link
            key={navItem.name}
            href={navItem.link}
            className={cn(
              "relative items-center flex space-x-1 text-gray-200 hover:text-primary text-sm sm:text-base"
            )}
          >
            {navItem.name}
          </Link>
        ))}
        <button className="text-background bg-primary rounded-md py-1 px-2 sm:px-6 mr-6 text-sm sm:text-base">
          <span>Connect</span>
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
