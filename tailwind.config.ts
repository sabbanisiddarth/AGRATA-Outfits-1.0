import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "hsl(var(--bg-cream))",
        coffee: "hsl(var(--text-coffee))",
        "rose-dust": "hsl(var(--rose-dust))",
        "muted-umber": "hsl(var(--muted-umber))",
        emerald: "hsl(var(--emerald-accent))",
        "surface-low": "hsl(var(--surface-low))",
        champagne: "hsl(var(--champagne-gold))",
        midnight: "hsl(var(--midnight-contrast))",
      },
      fontFamily: {
        aesthetic: ["Aesthetic", "serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
