/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#460F9D",
          secondary: "#E2CDB4",
          accent: "#05AED5",
          neutral: "#EFF5EE",
          "base-100": "#FFFFFF",
          info: "#FBBD23",
          success: "#FBBD23",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
