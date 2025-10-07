import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class", "media"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7ff",
          100: "#e0efff",
          200: "#b9dcff",
          300: "#84c0ff",
          400: "#489eff",
          500: "#1c7dff",
          600: "#0c63e6",
          700: "#084ec0",
          800: "#0a3f99",
          900: "#0c357d",
        },
      },
      boxShadow: {
        card: "0 20px 45px -24px rgba(15, 23, 42, 0.25)",
      },
      backgroundImage: {
        grid: "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.08) 1px, transparent 0)",
      },
    },
    fontFamily: {
      sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
    },
  },
  plugins: [],
};

export default config;
