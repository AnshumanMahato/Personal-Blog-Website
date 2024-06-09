"use client";

import { useCallback, useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

function DarkModeSwitch() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const toggleDarkMode = useCallback(() => setDarkMode((prev) => !prev), []);

  useEffect(() => {
    const hasDarkClass = document.documentElement.classList.contains("dark");
    if (darkMode && !hasDarkClass) {
      document.documentElement.classList.add("dark");
    } else if (!darkMode && hasDarkClass) {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      className="hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200 cursor-pointer"
      onClick={toggleDarkMode}
    >
      {darkMode ? <CiLight /> : <CiDark />}
    </button>
  );
}

export default DarkModeSwitch;
