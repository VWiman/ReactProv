// 6. Users i Redux (3p)
// Skapa en komponent som lägger till användare i en lista i Redux.
// Det ska gå att skriva in ett namn i ett inputfält och klicka på en "Lägg till"-knapp
// för att lägga till användaren. Alla användare ska visas i en lista under inputfältet.

import { useState } from "react";
import { Provider } from "react-redux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { store } from "./store";
import { addUser } from "./usersSlice";

// Som hjälp finns redan en slice (usersSlice.js) som hanterar användarlistan. Dessutom är
// react-redux och @reduxjs/toolkit redan installerat i projektet.
// Skapa en store som använder sig av usersSlice.js och Lägg till en Provider i App-komponenten
// nedanför.

export function App() {
	const [newUser, setNewUser] = useState("");
	const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  
  function handleAdd() {
    dispatch(addUser(newUser))
    setNewUser("")
  }

	return (
		<div>
			<input type="text" value={newUser} onChange={(e) => setNewUser(e.target.value)}></input>
			<button onClick={() => handleAdd()}>Lägg till</button>
			{users.map((user) => (
				<li>{user}</li>
			))}
		</div>
	);
}

function AppWrapper() {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
}

export default AppWrapper;
