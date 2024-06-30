/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'unactive': '#a6a6a6',
      },
      colors: {
        'body': '#181818',
        'layer': '#212121',
        'card': '#323232',
        'green': "#28ed21",
        'red': "#e21212",
        'orange': "#ff8f0f",
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      screens: {
        'tablet': '768px',
        'desktop': '1024px',
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}

