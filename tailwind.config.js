/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        darkpurple: "#4731D3",
        yellow: "#FFE86E",
        lightpurple: "#EEEBFF",
        palepurple: "#BAB2E7",
        red: "#AF0C48",
        green: "#00AB6B",
        blue: "#0077B5",
        darkerpurple: "#252127",
        paleblue: "#AEBCCF",
        anotherpurple: "#8F88FF",
        darkmodelightpurple: "#B7AAFF",
        darkmodepalepurple: "#E1E1FF",
        darkmodegray: "#6B7280",
        darkmodeblack: "#141414",
      },
    },
  },
  plugins: [],
};
