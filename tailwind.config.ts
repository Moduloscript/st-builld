/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");
const svgToDataUri = require("mini-svg-data-uri");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
      borderColor: {
        DEFAULT: "hsl(var(--border))",
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        shimmer: "shimmer 2s linear infinite",
        marquee: "marquee var(--marquee-duration) linear infinite",
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        'gradient-x': 'gradient-x 3s ease infinite',
        'glow-y': 'glow-y 2s ease-in-out infinite',
        'scroll-up': 'scroll-up var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
        'scroll-down': 'scroll-down var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
        'scroll': 'scroll 40s linear infinite',
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        marquee: {
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        "glow-pulse": {
          "0%, 100%": {
            opacity: "0.4",
            transform: "scale(1)",
          },
          "50%": {
            opacity: "0.6",
            transform: "scale(1.05)",
          },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'glow-y': {
          '0%, 100%': {
            'opacity': '0',
            'transform': 'translateY(0)'
          },
          '50%': {
            'opacity': '1',
            'transform': 'translateY(100%)'
          }
        },
        'scroll-up': {
          to: {
            transform: 'translateY(calc(-50%))',
          },
        },
        'scroll-down': {
          to: {
            transform: 'translateY(calc(50%))',
          },
        },
        'scroll': {
          to: {
            transform: 'translateX(calc(-50%))',
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke-width="2" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
    function addVariablesForColors({ addBase, theme }: any) {
      let allColors = flattenColorPalette(theme("colors"));
      let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ":root": newVars,
      });
    },
  ],
}
