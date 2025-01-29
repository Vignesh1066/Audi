// tailwind.config.js (ES module format)
export default {
  content: ["./src/**/*.{html,js,jsx}"], // Your content paths
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite', // Slow spin animation
      },
    },
  },
  plugins: [],
}
