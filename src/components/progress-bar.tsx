"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 bg-primary z-50 origin-top-left"
      style={{ scaleX: scrollYProgress }}
    ></motion.div>
  );
}
