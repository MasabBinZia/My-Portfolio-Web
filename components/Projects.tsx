import Image from "next/image";
import { projects } from "@/data/config";
import { useCallback, useMemo, useState } from "react";
import getScrollAnimation from "./Animations/getScrollAnimation";
import { motion } from "framer-motion";
import ScrollAnimationWrapper from "./Animations/ScrollAnimationWrapper";

export default function Projects() {
  const [variant, setVariant] = useState("My Projects");

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "My Projects"
        ? "Clients & Work Projects"
        : "My Projects"
    );
  }, []);

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="">
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max ">
          {projects.title}
        </h2>
      </div>
      <p className="text-lg">{projects.desc}</p>
      <div className="mt-8">
        <div className="flex justify-center py-2">
          <button
            className="py-2 px-4 rounded-xl dark:text-black text-white  dark:bg-white bg-black hover:opacity-60 duration-300 "
            onClick={toggleVariant}
          >
            See
            <span>
              {" "}
              {variant === "My Projects"
                ? "Clients & Work Projects"
                : "My Projects"}
            </span>
          </button>
        </div>
        {variant === "Clients & Work Projects" && (
          <ScrollAnimationWrapper>
            {projects.Clientprojects.map((item, index) => (
              <motion.div
                variants={scrollAnimation}
                key={index}
                className="p-6 border border-lightText rounded-xl mb-4"
              >
                <h3 className="text-center">{item.title}</h3>
                <p className="text-center">{item.description}</p>
                <div className="flex flex-col items-center -m-3 pt-5">
                  {item.link && (
                    <a
                      href={item.link}
                      className="flex items-center py-1 px-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src="/static/icons/link.svg"
                        width={18}
                        height={18}
                        alt="Link icon"
                      />
                      <span className="ml-2 text-lightText transition-colors duration-500">
                        {item.link}
                      </span>
                    </a>
                  )}
                  {item.stack && (
                    <p className="flex text-black dark:text-white text-3xl justify-center space-x-4">
                      {item.stack}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </ScrollAnimationWrapper>
        )}
        {variant === "My Projects" && (
          <div>
            {projects.Myprojects.map((item, index) => (
              <ScrollAnimationWrapper key={index}>
                <motion.div
                  variants={scrollAnimation}
                  key={index}
                  className="p-6 border border-lightText rounded-xl mb-4"
                >
                  <h3 className="text-center">{item.title}</h3>
                  <p className="text-center">{item.description}</p>
                  <div className="flex flex-col items-center -m-3 pt-5">
                    {item.link && (
                      <a
                        href={item.link}
                        className="flex items-center py-1 px-3"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src="/static/icons/link.svg"
                          width={18}
                          height={18}
                          alt="Link icon"
                        />
                        <span className="ml-2 text-lightText transition-colors duration-500">
                          {item.link}
                        </span>
                      </a>
                    )}
                    {item.github && (
                      <a
                        href={`https://github.com/${item.github}`}
                        className="flex items-center py-1 px-3"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Image
                          src="/static/icons/github.svg"
                          width={18}
                          height={18}
                          alt="Link icon"
                        />
                        <span className="ml-2 text-lightText transition-colors duration-500">
                          {item.github}
                        </span>
                      </a>
                    )}
                    {item.stack && (
                      <p className="flex text-black dark:text-white text-3xl justify-center space-x-4">
                        {item.stack}
                      </p>
                    )}
                  </div>
                </motion.div>
              </ScrollAnimationWrapper>
            ))}
            <div className="flex justify-center">
              <a
                target="_blank"
                href="https://github.com/MasabBinZia?tab=repositories"
                className="py-2 px-4 rounded-xl border border-lightText "
              >
                See More
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
