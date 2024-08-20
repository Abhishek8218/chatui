import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        vanish: {
          '0%': { opacity: '1' },
          '20%': { opacity: '0.8' },
          '40%': { opacity: '0.6' },
          '60%': { opacity: '0.4' },
          '80%': { opacity: '0.2' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        vanish: 'vanish 2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
