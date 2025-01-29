/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPurple: "#120007",
        notSoDarkPurple: "#280B20",
        justPurple: "#9E299A",
        lightPurple: "#6C2E6A",
        notIsTheMostLightPurple: "#FCC2FC",
        theMostLightPurple: "#FFF2FF",
        justWhite: "#FFF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        neonPurple: "0px 0px 20px 0px #280B20",
      }
    },
  },
  plugins: [],
}