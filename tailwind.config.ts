import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          lightBg: "#F0EBE0",
          lightSurface: "#FBF8F1",
          lightAccent: "#1A5C3A",
          lightText: "#1A1410",
          lightMuted: "#9c9586",
          darkBg: "#18140F",
          darkSurface: "#211C16",
          darkAccent: "#00FF87",
          darkText: "#F0E8D8",
          darkMuted: "#82786a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "count-up": "countUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "biometric-pulse": "bioPulse 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        bioPulse: {
          "0%": { transform: "scale(0.92)", opacity: "0.3" },
          "50%": { transform: "scale(1.15)", opacity: "0.8" },
          "100%": { transform: "scale(0.92)", opacity: "0.3" },
        },
        countUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
