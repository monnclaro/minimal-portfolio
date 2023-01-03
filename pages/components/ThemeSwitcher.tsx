import { useEffect, useState } from "react";
import SunIcon from "@heroicons/react/24/solid/SunIcon";

export function ThemeSwitcher() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="fixed bottom-[1.5rem] left-[89vw] ">
      <button
        onClick={handleThemeSwitch}
        className="rounded-full p-1 dark:border-zinc-800 dark:bg-[#121212cc]"
      >
        <SunIcon className="h-9 w-9 text-black dark:text-slate-300 " />
      </button>
    </div>
  );
}
