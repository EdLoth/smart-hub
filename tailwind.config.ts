import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lothSky: "#C3EBFA",
        lothSkyLight: "#EDF9FD",
        lothPurple: "#CFCEFF",
        lothPurpleLight: "#F1F0FF",
        lothYellow: "#FAE27C",
        lothYellowLight: "#FEFCE8",
      },
    },
  },
  plugins: [],
} satisfies Config;
