"use client";
import { MdDarkMode } from "react-icons/md";
import { RiSunLine } from "react-icons/ri";

import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

function ToggleTheme({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const [CurrentTheme, setCurrentTheme] = useLocalStorage("color-mode", "dark");

  useEffect(() => {
    if (typeof window !== undefined) {
      const bodyRef = window?.document?.body?.classList;
      if (CurrentTheme == "dark") return bodyRef.add("dark");
      return bodyRef.remove("dark");
    }
  }, [CurrentTheme]);
  if (typeof window === "undefined") return null;
  return (
    <div className={className}>
      {CurrentTheme == "light" ? (
        <div onClick={() => setCurrentTheme("dark")} className="relative group">
          <div className="animate-pulse absolute duration-1000 group-hover:opacity-100 opacity-25 transition group-hover:duration-200 hover:-inset-2 -inset-1 bg-gradient-to-r from-slate-700 to-black rounded-lg blur-xl"></div>
          <MdDarkMode />
        </div>
      ) : (
        CurrentTheme == "dark" && (
          <div onClick={() => setCurrentTheme("light")} className="relative group">
            <div className="animate-pulse absolute duration-1000 group-hover:opacity-100 opacity-25 transition group-hover:duration-200 hover:-inset-2 -inset-1 bg-gradient-to-r from-yellow-400 to-red-600 rounded-lg blur-xl"></div>
            <RiSunLine color="white" />
          </div>
        )
      )}
    </div>
  );
}

export default ToggleTheme;
