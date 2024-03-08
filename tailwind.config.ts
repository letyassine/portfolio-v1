import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080b16",
        rose1: "#F8B5B9",
        blue1: "#005C8C",
        yellow1: "#FBB317",
        red1: "#CC3334",
      },
    },
  },
  plugins: [],
};
export default config;
