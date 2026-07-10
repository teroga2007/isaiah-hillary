/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dusty-blue": "#8FAFC4",
        "powder-blue": "#BFD4E2",
        "creamy-ivory": "#F4EFE6",
        "peachy-blush": "#F3B49A",
        "warm-champagne": "#E6CFAE"
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        display: ["Fraunces", "serif"]
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        wedding: {
          primary: "#8FAFC4",
          secondary: "#F3B49A",
          accent: "#BFD4E2",
          neutral: "#E6CFAE",
          "base-100": "#F4EFE6",
          "base-200": "#EFE7DA",
          "base-300": "#E6CFAE",
          "base-content": "#4E5D68",
          info: "#8FAFC4",
          success: "#9DBBA0",
          warning: "#E6CFAE",
          error: "#D97C6C"
        }
      }
    ]
  }
};
