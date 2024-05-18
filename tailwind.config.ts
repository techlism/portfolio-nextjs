import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './shadcn-components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './@/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },  
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        coloring:"hsl(var(--colr))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        rosewood: {
          '50': '#fff1f1',
          '100': '#ffe3e3',
          '200': '#ffccce',
          '300': '#ffa2a7',
          '400': '#ff6d78',
          '500': '#f93a4e',
          '600': '#e61837',
          '700': '#c30d2d',
          '800': '#a30e2d',
          '900': '#8b102d',
          '950': '#670419',
        },
        'punch': {
          '50': '#fef2f2',
          '100': '#ffe1e1',
          '200': '#ffc8c8',
          '300': '#ffa2a2',
          '400': '#fd6c6c',
          '500': '#f53e3e',
          '600': '#e32626',
          '700': '#be1717',
          '800': '#9d1717',
          '900': '#821a1a',
          '950': '#470808',
      },
      'active': {
        '50': '#fcf4ff',
        '100': '#f7e5ff',
        '200': '#f1d0ff',
        '300': '#e6abff',
        '400': '#d875ff',
        '500': '#c941ff',
        '600': '#bb1cff',
        '700': '#a40de3',
        '800': '#8a10b9',
        '900': '#7b10a2',
        '950': '#4f0070',
      },
    
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundColor : {
        'radial-gradient' : 'radial-gradient(ellipse at top, #e66465, transparent),radial-gradient(ellipse at bottom, #4d9f0c, transparent)'
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config