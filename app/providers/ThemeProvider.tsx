"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // SSR safety: only access localStorage on the client
    if (typeof window === "undefined") return false;
    const localDarkMode = localStorage.getItem("darkMode--anshuman");
    return localDarkMode ? JSON.parse(localDarkMode) : false;
  });

  // Apply dark mode class to document
  useEffect(() => {
    const hasDarkClass = document.documentElement.classList.contains("dark");
    if (darkMode && !hasDarkClass) {
      document.documentElement.classList.add("dark");
    } else if (!darkMode && hasDarkClass) {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      localStorage.setItem("darkMode--anshuman", JSON.stringify(!prev));
      return !prev;
    });
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
