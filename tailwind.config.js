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
      colors: {
        "custom-cyan": "#00DDFF",
      },
      animation: {
        "zoom-in-out": "zoom-in-out 1s ease-in-out 0.1s 2 alternate",
        color: "color 8s ease-in-out infinite",
        typing:
          "typing 1s steps(20, end) 2.7s, blink-caret 0.5s step-end 1s infinite",
        opacity: "opacity 2s ease-out 1s 1",
      },
      backgroundImage: {
        "gradient-cta":
          "linear-gradient(to right, #00DDFF, #00DDFF 50%, #fff 50%)",
      },
      keyframes: {
        "zoom-in-out": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.25)" },
        },
        color: {
          "0%": { color: "#00DDFF" },
          "25%": { color: "#FF00E4" },
          "50%": { color: "#FFFA00" },
          "75%": { color: "#FF1900" },
          "100%": { color: "#00DDFF" },
        },
        typing: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        "blink-caret": {
          "from, to": { "border-color": "transparent" },
          "50%": { "border-color": "#00DDFF" },
        },
        opacity: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      transitionDelay: {
        50: "50",
        150: "150ms",
        250: "250ms",
      },
    },
  },
  plugins: [],
};
