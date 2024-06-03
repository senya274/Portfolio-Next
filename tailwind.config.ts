import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mainBg': "url('/main2.png')",
        'aboutBg': "url('/front.png')",
        'wave': "url('/wave-haikei.svg')",
        'wave2': "url('/wave2.svg')",
        'wave3': "url('/wave3.svg')",
        'tdBg': "url('/TD-logo.png')",
        'carBg': "url('/car-rent.png')",
     
      },
      colors: {
        'glass': 'rgba(255, 255, 255, 0.1)', // Цвет стекла (полупрозрачный белый)
        'dark-blue': '#001122',
        'title-color': '#e7472e',
        'light-blue': '#00a2ff',
        'cardBg': '#1c2335',
      },
      backdropBlur: {
        'glass': '10px', // Значение размытия для стеклянного эффекта
      },
      gradientColorStops: theme => ({
        '0': 'rgb(36,13,0)',
        '75': 'rgba(217,112,30,1)',
        '100': 'rgba(217,112,46,1)',
      }),
    },
    
  },
  plugins: [],
};
export default config;
