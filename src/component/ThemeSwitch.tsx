"use client"; 

import { useTheme } from "@/context/ThemeProvider";
import { Sun, Moon } from "lucide-react";

const ThemeSwitch = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="p-2 rounded-md">
      {theme === "dark" ? (
        <Sun size={24} className="text-yellow-400" />
      ) : (
        <Moon size={24} className="text-gray-800" />
      )}
    </button>
  );
};

export default ThemeSwitch;