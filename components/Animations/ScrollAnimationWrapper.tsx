import { motion } from "framer-motion";
import { ReactNode } from "react";

type propsTypes = {
  children: ReactNode;
  className?: string;
};

export default function ScrollAnimationWrapper({
  children,
  className,
  ...props
}: propsTypes) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
