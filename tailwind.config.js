/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        karla: ["Karla"],
      },
      colors: {
        cyan: "hsl(179, 62%, 43%)",
        "bright-yellow": "hsl(71, 73%, 54%)",
        "light-gray": "hsl(204, 43%, 93%)",
        "grayish-blue": "hsl(218, 22%, 67%)",
        white: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
