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
      colors: {
        "custom-cyan": "#00DDFF",
      },
      animation: {
        "zoom-in-out": "zoom-in-out 1s ease-in-out 0.1s 2 alternate",
        color: "color 8s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-cta": "linear-gradient(to right, #00DDFF, #00DDFF 50%, #fff 50%)",
      },
      keyframes: {
        "zoom-in-out": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.25)" },
        },
        color: {
          "0%": { color: "#00DDFF" },
          "25%": { color: "#FF00E4" },
          "50%": { color: "#FF1900" },
          "75%": { color: "#FFFA00" },
          "100%": { color: "#00DDFF" },
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
