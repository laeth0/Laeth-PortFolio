import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        "bodyBg": '#010C15',
        "MainBg": '#011627',
        "GeneralGray": '#607B96',
        "GeneralOrange": '#FEA55F',
        "LightOrange": '#E99287',
        "GeneralGreen": '#43D9AD',
        "GeneralBlue": '#4D5BCE',
        "SecondaryBlue": '#5565E8',
        "GeneralPink": '#C98BDF',
        "GeneralBorder": '#1E2D3D',
      },
      backgroundImage:{
        "BackgroundBlurs": "url('./images/BackgroundBlurs.png')",
        "SnakeGame": "url('./images/SnakeGame.png')",
      },
    },
  },
  plugins: [],
}
export default config

// 'sm': '640px',
//     // => @media (min-width: 640px) { ... }
//
//     'md': '768px',
//     // => @media (min-width: 768px) { ... }
//
//     'lg': '1024px',
//     // => @media (min-width: 1024px) { ... }
//
//     'xl': '1280px',
//     // => @media (min-width: 1280px) { ... }
//
//     '2xl': '1536px',
// // => @media (min-width: 1536px) { ... }
