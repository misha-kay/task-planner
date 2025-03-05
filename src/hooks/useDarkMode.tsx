import { useState } from "react";

export function useDarkMode(): [string, () => void] {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    const body = window.document.body;
    if (body.classList.contains("dark")) {
      body.classList.remove("dark");
      setTheme("light");
    } else {
      body.classList.add("dark");
      setTheme("dark");
    }
  };
  return [theme, switchTheme];
}
