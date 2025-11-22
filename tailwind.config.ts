import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "var(--bg)",
          soft: "var(--bg-soft)",
          elevated: "var(--bg-elevated)",
        },
        text: {
          DEFAULT: "var(--text)",
          muted: "var(--text-muted)",
          soft: "var(--text-soft)",
        },
        border: {
          DEFAULT: "var(--border)",
          divider: "var(--divider)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent-soft)",
          alt: "var(--accent-alt)",
        },
        chip: {
          bg: "var(--chip-bg)",
          text: "var(--chip-text)",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(0,0,0,0.08)",
        card: "0 22px 60px rgba(0,0,0,0.10)",
      },
      borderRadius: {
        card: "18px",
        pill: "999px",
      },
      spacing: {
        section: "7rem",
        sectionLg: "9rem",
      },
    },
  },
  plugins: [],
};

export default config;

