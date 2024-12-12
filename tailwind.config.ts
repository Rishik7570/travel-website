import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkgreen: "var(--darkgreen)",
        yellow: "var(--yellow)",
        gray: "var(--gray)",
        grayborder: "var(--grayborder)",
        slidergreen: "var(--slidergreen)",
      },
      fontFamily: {
        matter: "var(--font-matter)",
        sans: "var(--font-matter)", // This makes Matter the default sans font
      },
    },
  },
  plugins: [],
} satisfies Config;
