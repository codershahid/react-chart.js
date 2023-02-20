module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        card: "389px",
      },
      height: {
        card: "314px",
      },
      boxShadow: {
        card: "(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      },
      fontSize: {
        "20-30": ["20px", "30px"],
        "12-20": ["12px", "20px"],
        "30-40": ["30px", "40px"],
      },
      colors: {
        green: "#10B961",
        orange: "#F59E0B",
        purple: "#6366F1",
        blue: "#38BDF8",
      },
    },
  },
  plugins: [],
};
