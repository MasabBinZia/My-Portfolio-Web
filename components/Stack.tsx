import { stack } from "@/data/config";
import { motion } from "framer-motion";
import Image from "next/image";
import ScrollAnimationWrapper from "./Animations/ScrollAnimationWrapper";
import getScrollAnimation from "./Animations/getScrollAnimation";
import { useMemo } from "react";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const items = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Stack() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <ScrollAnimationWrapper>
      <motion.div variants={scrollAnimation}>
        <div className="overflow-x-hidden w-full">
          <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
            {stack.title}
          </h2>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-wrap gap-6 -m-2"
        >
          {stack.stack.map((item, index) => (
            <motion.div
              variants={items}
              key={index}
              className="flex flex-col items-center text-center"
            >
              <Image
                className="hover:scale-110 duration-300 cursor-pointer"
                src={item.Icon}
                alt=""
                width={60}
                height={60}
              />
              <span>{item.Name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </ScrollAnimationWrapper>
  );
}
