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
        _violet: "#7E33E0",
        _darkblue: "#0D0E43",
        _darktext: "#1A0B5B",
        _lighttext: "#151875",
        _lighttext2: "#111C85",
        _pink: "#FB2E86",
        _shade: "#EEEFFB",
        _subtext: "#8A8FB9",
        _subtext2: "#C1C8E1",
        _saleTage: "#3F509E",
        _green: "#19D16F",
      },
      container: {
        center: true, // Centers the container horizontally
        padding: {
          DEFAULT: "0rem", // Adds default padding (16px)
          sm: "2rem", // Small screen padding (32px)
          md: "4rem", // Medium screen padding (64px)
          lg: "5rem", // Large screen padding (80px)
          xl: "6rem", // Extra-large screen padding (96px)
        },
      },
      screens: {
        sm: "640px", // Small devices (phones)
        md: "768px", // Medium devices (tablets)
        lg: "1024px", // Large devices (desktops)
        xl: "1280px", // Extra-large devices
        "2xl": "1536px", // 2x Extra-large devices
      },
    },
  },
  plugins: [],
} satisfies Config;
