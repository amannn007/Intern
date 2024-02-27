/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslategray: "#2c384a",
        slategray: {
          "100": "#727d87",
          "200": "#626e79",
        },
        gainsboro: {
          "100": "#e1e4e6",
          "200": "rgba(225, 228, 230, 0)",
        },
        crimson: "#ef4c5d",
        darkgray: "#9fa9b3",
        dimgray: {
          "100": "#5c6874",
          "200": "#4b5665",
        },
        darkslateblue: "#074786",
        dodgerblue: "#1b88f4",
        whitesmoke: "#f2f4f7",
        aliceblue: "#f3f9ff",
        seashell: "#fff4ed",
        lightgray: "#d1d6da",
        silver: "#b6bdc4",
        gray: {
          "100": "#fbfcfd",
          "200": "#212731",
          "300": "rgba(0, 0, 0, 0)",
        },
        darkorange: "#ff7724",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "9980xl": "9999px",
      },
    },
    fontSize: {
      base: "16px",
      xl: "20px",
      smi: "13px",
      sm: "14px",
      "13xl": "32px",
      mini: "15px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
