import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface TypewriterTextProps {
  words: string[];
  className?: string;
}

export const TypewriterText = ({ words, className = "" }: TypewriterTextProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 500); // Wait for exit animation
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(intervalId);
  }, [words.length]);

  return (
    <div className="relative h-[1.5em] overflow-hidden">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.span
            key={words[currentWordIndex]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={`absolute left-0 right-0 text-center ${className}`}
          >
            {words[currentWordIndex]}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};
