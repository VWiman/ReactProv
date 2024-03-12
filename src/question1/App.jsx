// 1. Lista med useState (3p)
// Skapa en komponent som visar en lista med hobbies.
// Användaren ska kunna lägga till en ny hobby via ett
// inputfält och en "Lägg till"-knapp. Varje hobby i listan
// ska ha en "Ta bort"-knapp som tar bort hobbyn från listan.
// Använd useState för att hantera listan.

import { useState } from "react";

let counter = 3;

function App() {
	const [hobbies, setHobbies] = useState([
		{ id: 0, name: "Gaming" },
		{ id: 1, name: "Poetry" },
		{ id: 2, name: "Movies" },
	]);

	const [hobbieName, setHobbieName] = useState("");

	function handleAdd() {
		const newHobby = {
			id: counter++,
			name: hobbieName,
		};
		setHobbies([...hobbies, newHobby]);
		setHobbieName("");
	}

	const handleDelete = (id) => {
		const hobbiesAfterDelete = hobbies.filter((hobby) => hobby.id !== id);
		setHobbies(hobbiesAfterDelete);
	};

	return (
		<div className="flex flex-col items-center">
			<input
				type="text"
				value={hobbieName}
				onChange={(e) => setHobbieName(e.target.value)}
				placeholder="Skriv in hobby"
			/>
			<button onClick={() => handleAdd()}>Lägg till</button>
			<h1>Hobbies</h1>
			<ul className="pl-0">
				{hobbies.map((hobby) => (
					<li key={hobby.id} className="flex flex-row gap-2">
						{hobby.name}
						<button onClick={() => handleDelete(hobby.id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default App;

// Klar