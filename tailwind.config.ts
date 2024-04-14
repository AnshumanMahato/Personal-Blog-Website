import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      primary: {
        dark: "#d4d4d8",
        light: "#52525b",
      },
      secondary: {
        dark: "#a1a1aa",
        light: "#71717a",
      },
      background: {
        dark: "#18181b",
        light: "#fafafa",
      },
      accent: {
        dark: "#17c964",
        light: "#45d483",
      },
    },
  },
  plugins: [],
};
export default config;
