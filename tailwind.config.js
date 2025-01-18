/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#0a0a0a",
        "bg-secondary": "#121212",
        "bg-elevated": "#1a1a1a",
        accent: "#2d2d2d",
        "accent-hover": "#3d3d3d",
        "code-bg": "#1E1E1E",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};
