import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const themeTogglerStyle = {
  cursor: "pointer",
  maxHeight: "0rem",
};

const spanStyle = {
  fontSize: "xx-large",
};
const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  return (
    <div
      style={themeTogglerStyle}
      onClick={() => {
        setThemeMode(themeMode === "noSpin" ? "spin" : "noSpin");
      }}
    >
      <span style={spanStyle} title="Let's spin">
        {themeMode === "noSpin" ? "🔄" : "🛑"}
      </span>
    </div>
  );
};

export default ThemeToggler;
