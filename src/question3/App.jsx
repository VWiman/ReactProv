// 3. Custom Hook för counter (3p)
// Skapa en custom hook, useCounter, som hanterar en räknare.
// Denna hook ska tillhandahålla två funktioner: en för att öka
// räknarens värde och en för att minska den. Skriv kod i App-komponenten
// nedanför som använder din custom hook och visar räknarens värde
// samt två knappar för att öka och minska värdet.

import { useState } from "react";

export function useCounter(initialNumber) {
	const [count, setCount] = useState(initialNumber);

	const plus = () => {
		setCount(count + 1);
	};

	const minus = () => {
		setCount(count - 1);
	};

	return {
		count,
		plus,
		minus,
	};
}

function App() {
const { count, plus, minus } = useCounter(0);

  return (
    <div className="flex flex-row gap-2 align-middle items-center">
      <p>Count: {count}</p>
      <button onClick={plus} className=" max-h-6">+</button>
      <button onClick={minus} className="max-h-6">-</button>
    </div>
  )
}

export default App;
