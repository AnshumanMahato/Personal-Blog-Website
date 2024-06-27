"use client";

import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

function DarkModeSwitch() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const toggleDarkMode = useCallback(
    () =>
      setDarkMode((prev) => {
        localStorage.setItem("darkMode--anshuman", JSON.stringify(!prev));
        return !prev;
      }),
    []
  );

  useEffect(() => {
    const localDarkMode = localStorage.getItem("darkMode--anshuman");
    if (localDarkMode) {
      setDarkMode(JSON.parse(localDarkMode));
    }
  }, []);

  useEffect(() => {
    const hasDarkClass = document.documentElement.classList.contains("dark");
    if (darkMode && !hasDarkClass) {
      document.documentElement.classList.add("dark");
    } else if (!darkMode && hasDarkClass) {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const classes = classNames(
    "hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200 cursor-pointer",
    "p-[1.5rem] rounded-full bg-background-light dark:bg-background-dark text-[3.5rem] lg:text-[4rem] text-secondary-light/75 dark:text-secondary-dark/75",
    "fixed bottom-[2rem] right-[2rem] xs:bottom-[3rem] xs:right-[3rem] lg:bottom-[5rem] lg:right-[5rem] z-50",
    "shadow-lg border border-secondary-light/30 dark:border-secondary-dark/30 shadow-secondary-light/30 dark:shadow-secondary-dark/30"
  );

  return (
    <button className={classes} onClick={toggleDarkMode}>
      <AnimatePresence mode="wait">
        {darkMode ? (
          <motion.span
            key="light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CiLight />
          </motion.span>
        ) : (
          <motion.span
            key="dark"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CiDark />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

export default DarkModeSwitch;
