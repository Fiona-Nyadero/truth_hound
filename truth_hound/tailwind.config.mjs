export default {
  plugins: [],
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
      flash: {
        '0%, 100%': { opacity: 1},
        '50%': { opacity: 0.4},
      },
      },
      animation: {
        flash: 'flash 1s infinite',
      },
    },
  },
}