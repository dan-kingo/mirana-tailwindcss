/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-pattern": "url('../images/360.jpg')",
      },
      borderWidth: {
        "border-1": "1px solid #333",
      },
    },
  },
  plugins: [],
};
