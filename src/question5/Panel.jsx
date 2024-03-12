import { useState } from "react";

export default function Panel(props) {
	const title = props.title;
	const collapsible = props.collapsible;
	const [collapsed, setCollapsed] = useState(false);

	if (collapsible) {
		return (
			<div>
				<h2>{title}</h2>
				<div className={collapsed ? "hidden" : "flex flex-col"}>
					{props.children} 
				</div><button onClick={() => setCollapsed(!collapsed)}>{collapsed ? "Gör större" : "Gör mindre"}</button>
			</div>
		);
	}
	return (
		<div>
			<h2>{title}</h2>
			<div>{props.children}</div>
		</div>
	);
}
