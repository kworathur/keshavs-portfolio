import Typography from 'typography'


const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Albertus var'],
  bodyFontFamily: ['Arial', 'sans-serif'],
  overrideStyles: ({ rhythm }, options) => ({
    a: {
      color: "var(--text-link)",
      textDecoration: "none",
    },
    "a:hover": {
      color: "var(--text-link)",
      textDecoration: "none",
    },
  }),
})

// Hot reload typography in development
if (process.env.NODE_ENV !== "production") {
    typography.injectStyles();
}

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography