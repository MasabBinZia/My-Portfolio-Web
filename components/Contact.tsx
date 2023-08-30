import Image from "next/image";
import { contact } from "@/data/config";
import ScrollAnimationWrapper from "./Animations/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import { useMemo } from "react";
import getScrollAnimation from "./Animations/getScrollAnimation";

export default function Stack() {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <ScrollAnimationWrapper className="mb-12">
      <motion.div variants={scrollAnimation}>
        <div className="overflow-x-hidden w-full">
          <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
            {contact.title}
          </h2>
        </div>
        <p>
          Reach out by email:{" "}
          <a
            className="dark:text-white text-black transition-colors duration-500 hover:underline"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
        </p>
        <div className="flex space-x-5 mt-5 text-lightText transition-colors duration-500">
          {contact.github && (
            <a
              href={`https://github.com/${contact.github}`}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/static/icons/github.svg"
                width={30}
                height={30}
                alt="Github icon"
              />
            </a>
          )}
          {contact.linkedin && (
            <a
              href={`https://linkedin.com/in/${contact.linkedin}`}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/static/icons/linkedin.svg"
                width={30}
                height={30}
                alt="LinkedIn icon"
              />
            </a>
          )}
          {contact.linkedin && (
            <a
              href={`https://twitter.com/${contact.twitter}`}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/static/icons/twitter.svg"
                width={30}
                height={30}
                alt="twitter icon"
              />
            </a>
          )}
        </div>
      </motion.div>
    </ScrollAnimationWrapper>
  );
}
