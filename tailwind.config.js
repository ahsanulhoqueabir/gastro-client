/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#3A5151",
          secondary: "#B2E4E9",
          accent: "#0090ff",
          neutral: "#181119",
          "base-100": "#eafff5",
          info: "#0083cd",
          success: "#00bb91",
          warning: "#f4a000",
          error: "#ff7b98",
        },
        dark: {
          primary: "#74A2A2",
          secondary: "#518c92",
          accent: "#4dcf00",
          neutral: "#141414",
          "base-100": "#232c3a",
          info: "#00d7ff",
          success: "#627b00",
          warning: "#f7cb00",
          error: "#ff759a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
