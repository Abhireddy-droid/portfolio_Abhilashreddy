import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          slate: "#A8BACF",
          mint: "#C4D7DA",
          sage: "#DFF3E4",
          slateDark: "#374E67",
          mintDark: "#2B474D",
          sageDark: "#245037",
        },
        surface: {
          light: "#FFFFFF",
          lightMuted: "#F7FAFC",
          lightBorder: "#E2E8F0",
          dark: "#0C1017",
          darkCard: "#141C26",
          darkBorder: "#202E3F",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "system-ui",
          "-apple-system-subheadline",
          "Helvetica Neue",
          "sans-serif",
        ],
        mono: [
          "SF Mono",
          "ui-monospace",
          "Menlo",
          "Monaco",
          "Cascadia Mono",
          "Courier New",
          "monospace",
        ],
      },
      boxShadow: {
        ios: "0 4px 24px -2px rgba(168, 186, 207, 0.15)",
        iosDark: "0 4px 24px -2px rgba(0, 0, 0, 0.45)",
        glow: "0 0 30px rgba(196, 215, 218, 0.25)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
