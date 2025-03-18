/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'iphone-small': '393px', // iPhone 14 & 15 Pro Max
        'ipad': '834px',   // iPad 11 Pro
        'macbook': '1440px', // MacBook 14 Pro
      },
    },
  },
  plugins: [],
};
