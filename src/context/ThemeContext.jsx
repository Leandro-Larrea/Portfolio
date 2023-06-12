import React, { createContext, useEffect, useState } from "react";
import { useContext } from "react";

export const ThemeContext = createContext({ theme: "light", undefined });

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const storedValue = localStorage.getItem("theme");
    if (storedValue) {
      setTheme(storedValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
