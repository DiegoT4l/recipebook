/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
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
    require('flowbite/plugin'),
  ],
}

