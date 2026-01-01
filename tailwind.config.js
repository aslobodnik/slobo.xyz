module.exports = {
  content: ["./src/**/*.{html,js,njk,md}"],
  theme: {
    extend: {
      colors: {
        cream: "#FDFBF7",
        warmgray: "#2D2D2D",
        accent: "#2E7D32",
        "accent-light": "#4CAF50",
        "warm-border": "#E8E4DF",
      },
      fontFamily: {
        serif: ['"Source Serif 4"', "Georgia", "serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      transitionDuration: {
        3000: "3000ms",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
