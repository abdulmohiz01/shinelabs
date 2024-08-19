import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '300px',
      md: '680px',
      lg: '1250px',
      xl: '1540px',

    },
    extend: {
      colors: {
        primary: '#462B13',
        secondary: '#FFE1CC', 
        accent: '#F8AD79',
      },
      fontFamily: {
        redhat: [`var(--font-redhat)`, 'sans-serif'],
        milknhoney: [`var(--font-milk-honey)`, 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
