// tailwind.config.js

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1919E6",
          100: "#1919E6",
          300: "#dae7ff",
        },
        secondary: {
          DEFAULT: "#3C3CA6",
        },
      },
    },
  },
  plugins: [],
};
