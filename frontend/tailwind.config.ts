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
        _violet: "#7E33E0", // Add violet color
        _darkblue: "#0D0E43",
        _darktext: "#1A0B5B",
        _lighttext: "#151875",
        _lighttext2: "#111C85",
        _pink: "#FB2E86",
        _shade: "#EEEFFB",
        _subtext: "#8A8FB9",
        _saleTage: "#3F509E",
      },
      container: {
        center: true, // Optionally center the container
      },
      margin: {
        container: "370px", // Add a custom margin utility
      },
    },
  },
  plugins: [],
} satisfies Config;
// shadow-[0_0_20px_5px_#F6F4FD]
// MAIN: className="text-[42px] font-bold text-center text-_lighttext my-6 leading-10"
// SUB MAIN: className="text-xl font-semibold text-_lighttext mb-2"
