const { nodeModuleNameResolver } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      height: {
        a3: "442px",
        a4: "244px",
        a5: "194px",
        500: "500px",
      },
      maxHeight: {
        128: "32rem",
        192: "40rem",
        256: "48rem",
        500: "500px",
        800: "800px",
      },
      animation: {
        "fade-in-down": "fade-in-down 1s ease-out",
        "fade-in-up": "fade-in-up 1s ease-out",
        "fade-in": "fade-in 1s ease-out",
        "fade-out-down": "fade-out-down 1s ease-out",
        "fade-out": "fade-out 1s ease-out",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "fade-out": {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
