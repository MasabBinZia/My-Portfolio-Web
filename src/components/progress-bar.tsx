'use client';
import React from 'react';
import { motion, useScroll } from 'framer-motion';

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50 h-2 origin-top-left bg-primary"
      style={{ scaleX: scrollYProgress }}
    ></motion.div>
  );
}
