module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Gabarito: "Gabarito",
      },
      colors: {
        blue: "#0284c7",
        primarylight: "#f0fdfa",
        primary: "#9AD7D8",
        primary2:"#75C3C5",
        primarydark: "#14b8a6",
        gray: "#1f2937",
        graylight: "#6b7280",

        // pinklight: "#fdf2f8",
        // pink: "#fbcfe8",
        // pink2:"#f472b6",
        // pinkdark: "#ec4899",
        // gray: "#1f2937",
        // graylight: "#6b7280",
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
      },
      keyframes: {
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [],
};
