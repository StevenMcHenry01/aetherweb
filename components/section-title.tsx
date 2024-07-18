"use client";
import { motion } from "framer-motion";

export const SectionTitle = ({
  title,
  color,
}: {
  title: string;
  color?: string;
}) => {
  const words = title.toUpperCase().split(" ");

  return (
    <div>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        {words.map((word, index) => (
          <motion.h2
            key={word + index}
            className="text-3xl font-medium font-header"
            style={{ color: color ?? "" }}
            initial={{ opacity: 0, y: -20, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            {word}
          </motion.h2>
        ))}
      </div>
      <motion.div
        className="w-full h-[3px] bg-primary mt-4"
        style={{ background: color ?? "" }}
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1.7 }}
      ></motion.div>
    </div>
  );
};
