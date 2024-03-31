/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        skyblue: "#b3f0ff",
        lightyellow: "#fdfee6",
        lightyellow: "#fdfee6",
        yellow: "#f7f131",
        skin: "#fdfef1",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        xlg: "1080px",
        // => @media (min-width: 1024px) { ... }
        xlg2: "1250px",

        xl: "1380px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1460px",
        // => @media (min-width: 1460px) { ... }
      },
    },
  },
  plugins: [],
};
