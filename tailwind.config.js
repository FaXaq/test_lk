module.exports = {
  theme: {
    extend: {
      colors: {
        "luko-blue": "#0042da",
        "luko-blue-light": "#edf5fe",
        "luko-gray": "#dddddd",
        "luko-black": "#020202"
      },
      spacing: {
        "luko-xs": "6px",
        "luko-sm": "13px",
        "luko-md": "16px",
        "luko-lg": "24px",
        "luko-xl": "32px"
      },
      height: {
        "luko-sm": "16px",
        "luko-md": "48px",
      },
      width: {
        "luko-sm": "16px",
        "luko-md": "48px",
      },
      fontSize: {
        "luko": "16px"
      },
      fontFamily: {
        "luko": ["Avenir-Roman"],
        "luko-bold": ["Avenir-Heavy"]
      },
      lineHeight: {
        "luko": "1.38"
      },
      cursor: {
        copy: "copy",
        inherit: "inherit"
      }
    }
  },
  variants: {
    borderColor: ["focus"]
  },
  plugins: [],
}