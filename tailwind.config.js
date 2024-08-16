module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      'Lobster': ['Lobster Two', 'sans-serif'],
      'Montserrat': ['Montserrat', 'sans-serif'],
      'Poppins': ['Poppins', 'sans-serif']
    },
    extend: {
      colors: {
        "regal-blue": "#202094",
        "roman-red": "#e20935",
        "roman-grey": "#e3dbd8",
        "proxy-blue": "#000080",
      },
      strokeWidth: {
        5: "5px",
      },
    },
  },
  plugins: [require("daisyui")],
};
