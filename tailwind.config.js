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
        "neon-purple": "#B026FF",
        "neon-pink": "#FF006E",
        "neon-green": "#39FF14",
        "neon-orange": "#FF4500",
        "glass-white": "rgba(255, 255, 255, 0.1)",
        "glass-dark": "rgba(0, 0, 0, 0.2)",
        "dark-900": "#0a0a0a",
        "dark-800": "#111111",
        "dark-700": "#1a1a1a",
        "dark-600": "#252525",
      },
      animation: {
        "zoom-in-out": "zoom-in-out 1s ease-in-out 0.1s 2 alternate",
        color: "color 8s ease-in-out infinite",
        typing:
          "typing 1s steps(20, end) 2.7s, blink-caret 0.5s step-end 1s infinite",
        opacity: "opacity 2s ease-out 1s 1",
        float: "float 6s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite alternate",
        "slide-up": "slide-up 0.8s ease-out",
        "slide-in-left": "slide-in-left 0.8s ease-out",
        "slide-in-right": "slide-in-right 0.8s ease-out",
        "card-hover": "card-hover 0.3s ease-out",
        glitch: "glitch 2s infinite",
        tilt: "tilt 10s infinite linear",
      },
      backgroundImage: {
        "gradient-cta":
          "linear-gradient(to right, #00DDFF, #00DDFF 50%, #fff 50%)",
        "gradient-dark": "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
        "gradient-purple": "linear-gradient(135deg, #B026FF 0%, #FF006E 100%)",
        "gradient-cyan": "linear-gradient(135deg, #00DDFF 0%, #39FF14 100%)",
        glass:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        "zoom-in-out": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.25)" },
        },
        color: {
          "0%": { color: "#00DDFF" },
          "25%": { color: "#B026FF" },
          "50%": { color: "#FF006E" },
          "75%": { color: "#39FF14" },
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
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "rotate-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "pulse-glow": {
          "0%": { boxShadow: "0 0 20px rgba(0, 221, 255, 0.4)" },
          "100%": { boxShadow: "0 0 40px rgba(0, 221, 255, 0.8)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "card-hover": {
          "0%": { transform: "rotateX(0deg) rotateY(0deg)" },
          "100%": { transform: "rotateX(-10deg) rotateY(10deg)" },
        },
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
        tilt: {
          "0%, 50%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(1deg)" },
          "75%": { transform: "rotate(-1deg)" },
        },
      },
      transitionDelay: {
        50: "50",
        150: "150ms",
        250: "250ms",
      },
      perspective: {
        1000: "1000px",
        1500: "1500px",
      },
      transformStyle: {
        "3d": "preserve-3d",
      },
    },
  },
  plugins: [],
};
