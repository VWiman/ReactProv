// 2. API-Anrop och Rendering (3p)
// Använd fetch för att hämta posts från https://jsonplaceholder.typicode.com/posts.
// Visa endast titlarna för de första 5 inläggen.
// Varje titel ska vara en klickbar länk som, när man klickar på den,
// loggar postens ID till konsolen. Använd <button> för den klickbara länken.

import { useEffect } from "react";
import { useState } from "react";

export function useUrlFetch(url) {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(url);
			const result = await response.json();
			setData(result);
		};

		fetchData();
	}, [url]);
  console.log(data)
	return data;
}

function App() {
	const posts = useUrlFetch("http://jsonplaceholder.typicode.com/photos?_start=0&_limit=5");
	console.log(posts);
	return (
		<ul>
			{posts.map((post, index) => (
				<li className=" list-none" key={index}>
					<button className="border-none bg-white text-blue-600 hover:text-blue-800 cursor-pointer" onClick={() => console.log(post.id)}>{post.title}</button>
				</li>
			))}
		</ul>
	);
}

export default App;
