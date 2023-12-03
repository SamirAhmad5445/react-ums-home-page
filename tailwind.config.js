/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#677294",
          300: "#6fadfa",
          400: "#007bff",
          500: "#1c335f",
        },
        secondary: "#6c757d",
        accent: "#f3af4e",
        success: "#28a745",
        info: "#17a2b8",
        warning: "#ffc107",
        danger: "#fa6640",
        light: "#f8f9fa",
        dark: "#343a40",
      },
      fontFamily: {
        sans: ["Cairo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
