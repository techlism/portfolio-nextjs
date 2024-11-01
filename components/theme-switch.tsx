"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";
import { FaCircleHalfStroke } from "react-icons/fa6";

const storageKey = "theme-preference";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}


export function ThemeSwitch() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if(theme === "dark") {
      setTheme("light");
    }
    if(theme === "light") {
      setTheme("dark");
    }
    if(theme === "system") {
      setTheme("dark");
    }
  };

  return (
    <button
      id="theme-toggle"
      aria-label={`${theme} mode`}
      onClick={toggleTheme}
      type="button"
      className="flex items-center justify-center transition-opacity duration-300 hover:opacity-90"
    >
      <FaCircleHalfStroke size={18}/>
    </button>
  );
}