/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#bc00ff",

          secondary: "#0060ff",

          accent: "#4d00ff",

          neutral: "#1c1d32",

          "base-100": "#fff",

          info: "#00ffff",

          success: "#009100",

          warning: "#e4a800",

          error: "#ea001d",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
