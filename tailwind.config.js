/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'navy-blue': '#000b29',
        'navy-purple': '#132043',
      },
      fontFamily: {
        'zen-dots': ['Zen Dots', 'serif'],
        'zen-maru-gothic': ['Zen Maru Gothic', 'sans-serif'],
      },
      screens: {
        smmd: '704px',
        mdlg: '896px',
        lgxl: '1152px',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["night",],
  },
}

