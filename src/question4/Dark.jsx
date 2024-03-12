import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Dark = () => {
	const { darkTheme } = useContext(ThemeContext);
	return <div className={`${darkTheme} gap-2 p-2`}>This is darkTheme!</div>;
};

export default Dark;
