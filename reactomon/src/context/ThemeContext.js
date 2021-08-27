import React, { useState } from "react";

// const ThemeContext = React.createContext();

// const ThemeStore = ({ children }) => {
//   const [theme, setTheme] = useState("noSpin");

//   const switchTheme = (theme) => setTheme(theme);

//   return (
//     <ThemeContext.Provider value={{ switchTheme, theme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

const ThemeContext = React.createContext(["noSpin", () => {}]);

export default ThemeContext;
