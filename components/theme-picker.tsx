"use client";

import { useTheme } from "next-themes";
import React from "react";

const ThemePicker = () => {
  const { setTheme, theme } = useTheme();

  return (
    <div className="w-full self-end mt-2">
      <div className="justify-end flex flex-row items-center space-x-2 text-xs">
        <div
          onClick={() => setTheme("light")}
          className="flex flex-row space-x-1 items-center"
        >
          <input
            checked={theme === "light"}
            type="checkbox"
            readOnly
            className="h-3 w-3 accent-black"
          />
          <button className="tracking-wider" onClick={() => setTheme("light")}>
            LIGHT
          </button>
        </div>
        <div
          onClick={() => setTheme("dark")}
          className="flex flex-row space-x-1 items-center"
        >
          <input
            checked={theme === "dark"}
            type="checkbox"
            readOnly
            className="h-3 w-3 accent-white"
          />
          <button className="tracking-wider">DARK</button>
        </div>
      </div>
    </div>
  );
};

export default ThemePicker;
