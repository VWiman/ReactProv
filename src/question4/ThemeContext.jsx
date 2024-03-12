import { createContext } from "react";

export const ThemeContext = createContext([]);

export const ThemeProvider = ({ children }) => {
    const lightTheme = "bg-gray-200 text-black";
    const darkTheme = "bg-black text-white";
	return <ThemeContext.Provider value={{ lightTheme, darkTheme }}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
