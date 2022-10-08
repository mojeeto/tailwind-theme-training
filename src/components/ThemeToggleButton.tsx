import React, { useEffect, useState } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

const themes = ["light", "dark"];

const ThemeToggleButton: React.FC = () => {
  const [isMount, setMount] = useState<boolean>(false);
  const [theme, setTheme] = useState(() => {
    if (localStorage.getItem("theme")) return localStorage.getItem("theme");
    return "light";
  });

  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", t);
    setTheme(t);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  useEffect(() => {
    setMount(true);
  }, []);

  return isMount ? (
    <div
      className="flex bg-orange-300 dark:bg-zinc-300 rounded-full transition-colors items-center justify-center p-1 cursor-pointer"
      onClick={toggleTheme}
    >
      {themes.map((t, index) => {
        const checked = t === theme;
        return (
          <button
            className={`${checked ? "bg-white text-black" : ""
              } rounded-full p-4`}
            key={index}
            aria-label="Toggle theme"
          >
            {t === "light" ? <IoSunny /> : <IoMoon />}
          </button>
        );
      })}
    </div>
  ) : (
    <div />
  );
};

export default ThemeToggleButton;
