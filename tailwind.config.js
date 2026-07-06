/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "500px",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        serif: ["Fraunces", "Georgia", "Cambria", "Times New Roman", "serif"],
      },
      colors: {
        // Editorial minimalist palette
        paper: "#ffffff",
        "paper-alt": "#faf9f7",
        ink: "#141414",
        "ink-soft": "#3a3a3a",
        muted: "#6b6b6b",
        faint: "#9a9a9a",
        line: "#e8e6e2",
        "line-soft": "#f0eeea",
        accent: "#dd5a2b",
        "accent-hover": "#c44a1f",
        "accent-soft": "#fbeee7",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        content: "72rem",
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 0.6s ease-out both",
        marquee: "marquee 40s linear infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
