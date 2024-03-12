import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Light = () => {
	const { lightTheme } = useContext(ThemeContext);
	return <div className={`${lightTheme} gap-2 p-2`}>This is lightTheme!</div>;
};

export default Light;
