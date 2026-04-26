"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useSyncExternalStore,
} from "react";

interface ThemeContextType {
  darkMode: boolean;
  mounted: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function useMounted() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const mounted = useMounted();
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // SSR safety: only access localStorage on the client
    if (typeof window === "undefined") return false;
    const localDarkMode = localStorage.getItem("darkMode--anshuman");
    return localDarkMode ? JSON.parse(localDarkMode) : false;
  });

  // Apply dark mode class to document
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode--anshuman", JSON.stringify(darkMode));
  }, [darkMode, mounted]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, mounted, toggleDarkMode }}>
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
