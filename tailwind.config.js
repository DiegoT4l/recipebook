/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      height: {
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "48px",
        principal: "64px",
      },
      fontFamily: {
        "adlam": ["ADLaM Display", "cursive"],
        "ubuntu": ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

