
/* Have  @type {import('tailwindcss').Config} removed */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "dark"
  }
}
