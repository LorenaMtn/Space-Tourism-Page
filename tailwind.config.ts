import type { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
        'sm': '280px', 
        'md': '530px', 
        'lg': '1024px', 
        'xl': '1280px', 
        '2xl': '1536px', 
      },
    },
    extend: {
      colors:{
        'pink-100': '#D0D6F9',
        'gray-100': '#0000',
      },
      backgroundImage: {
        "desktop": 'url(/assets/home/background-home-desktop.jpg)',
        "tablet": 'url(/assets/home/background-home-tablet.jpg)',
        "mobile": 'url(/assets/home/background-home-mobile.jpg)'
      },
    },
  plugins: [],
}
export default config
