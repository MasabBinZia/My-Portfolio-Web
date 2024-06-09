"use client";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-16 z-[99]">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          aria-label="scroll to top"
          className="bg-black dark:bg-white"
        >
          <span className="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-white dark:border-black"></span>
        </Button>
      )}
    </div>
  );
}
