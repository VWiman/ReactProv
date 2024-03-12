import { useState } from "react";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Toggle = () => {
    const [toggle, setToggle] = useState(false)
	const { darkTheme, lightTheme } = useContext(ThemeContext);
	return <div className={toggle ? `${lightTheme} p-2` : `${darkTheme} gap-2 p-2`}>This is toggleTheme!<button onClick={() => setToggle(!toggle)}>Toggle</button></div>;
};

export default Toggle;
