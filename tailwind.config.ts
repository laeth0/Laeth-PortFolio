import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
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
        "CodeBg": '#011221',
        "ButtonBg": '#1c2b3a',
      },
      backgroundImage:{
        "BackgroundBlurs": "url('/BackgroundBlurs.png')",
        "SnakeGame": "url('/SnakeGame.png')",
        "MyPhoto": "url('/MyPhoto.png')",
      },
      screens: {
        xs: { max: "576px" },
        sm: "576px",
        // => @media (min-width: 576px) { ... }
        IPhone:"666px",
        // => @media (min-width: 662px) { ... }
        md: "768px",
        // => @media (min-width: 768px) { ... }
        Tablet:"940px",
        // => @media (min-width: 768px) { ... }
        lg: "992px",
        // => @media (min-width: 992px) { ... }
        xl: "1200px",
        // => @media (min-width: 1200px) { ... }
        xxl: "1400px",
        // => @media (min-width: 1400px) { ... }
      },
    },
  },
  plugins: [],
}
export default config

