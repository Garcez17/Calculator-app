module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'blue-200': 'hsl(225, 21%, 49%)',
        'blue-300': 'hsl(222, 26%, 31%)',
        'blue-500': 'hsl(223, 31%, 20%)',
        'blue-800': 'hsl(224, 36%, 15%)',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#evebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        red: {
          '500': 'hsl(6, 63%, 50%)',
          '800': 'hsl(6, 70%, 34%)'
        },
        orange: {
          '100': 'hsl(30, 25%, 89%)',
          '300': 'hsl(28, 16%, 65%)',
        }
      },
    }
  },
  plugins: [],
}
