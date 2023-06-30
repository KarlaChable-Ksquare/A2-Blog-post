/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*/.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/directorio/*.{js,ts,jsx,tsx,mdx}',
    './src/view/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/directorio/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      secondary: {
        25: '#55A598',
        50: '#43847C',
        75: '#2E4F44',
      },
      primary: {
        25: '#F7b176',
        50: '#F3974c',
        100: '#c16b1e',
        75: '#BC8A96',
      },
      black: {
        100: '#000000',
        75: '#0A050B',
        50: '#352436',
        10: '#D2C4C4',
      },
      neutral: {
        15: '#d6dbdc',
        25: '#E7E7E7',
        50: '#343434',
        100: '#1b1b1b',
      },
      success: '#4DCF5E',
      error: '#CF4D67',
      info: '##4DB4CF',
      warning: '#EC9C40',
      lighter: '#F1F1F2',
      white: '#FFFFFF',
    },
    extend: {
      textColor: ['active'],
      backgroundImage: {
        backgroundHero: "url('./assets/home/wave-orange.jpg')",
        backgroundHeroDark: "url('./assets/home/wave-green-dark.jpg')",

        welcome: "url('./assets/home/welcomeorange.png')",
        welcomeDark: "url('./assets/home/welcome-dark.png')",
      },

      screens: {
        xs: '512px',
        xxs: '256px',
      },
      boxShadow: {
        blue: '35px 30px 5px -2px rgba(28, 97, 160, 0.40)',
        blue08: '8px 8px 5px -2px rgba(28, 97, 160, 0.2)',
        blue20: '0px 20px 0px -5px rgba(28, 97, 160, 0.2)',

        nude: '35px 30px 5px -2px rgba(244, 178, 129, 0.50)',
        nude08: '8px 8px 5px -2px rgba(244, 178, 129, 0.7)',
        nude20: '0px 20px 0px -5px rgba(244, 178, 129, 0.2)',

        green: '35px 30px 5px -2px rgba(85, 165, 152, 0.40)',
        green08: '8px 8px 5px -2px rgba(85, 165, 152, 0.70)',
        green20: '0px 20px 0px -5px rgba(85, 165, 152, 0.20)',
      },
    },
  },
  plugins: [],
};
