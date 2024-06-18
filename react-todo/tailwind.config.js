/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gray1: "#1a2639",
        gray2: "#e0ebeb",
        gray3: "#3b4a6b",
        gray4: "#283149",
        form1: "#6e7da2",
        form2: "#363b4e",
        list1: "#404b69",

      },
      boxShadow: {
        'custom': 'inset -5px -5px 10px 0px rgba(255, 255, 255, 0.5), inset 0px 5px 15px 5px rgba(0, 0, 0, 0.3)',
        'custom2': '0px 5px 15px 0px rgba(0, 0, 0, 0.35)',
        'custom3': '0px 5px 15px 0px rgba(18, 18, 25)',
        'custom4': '0px 5px 15px 0px rgba(21, 128, 61)',
      }
    },
  },
  plugins: [],
}

