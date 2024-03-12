// Context API för Temahantering (3p)
// Använd Context API för att skapa ett enkelt tema-byte-system.
// Skapa en ThemeContext som innehåller aktuellt tema (t.ex. "light" eller "dark").
// Använd en Provider från ThemeContext i App-komponenten nedanför.
// Skapa två barn-komponenter som använder temat.
// Skapa en tredje barn-komponent som innehåller en knapp som kan växla tema.

import Dark from "./Dark";
import Light from "./Light";
import { ThemeProvider } from "./ThemeContext";
import Toggle from "./Toggle";


// Providern i App-komponenten ska omsluta de tre barn-komponenterna.

function App() {
  return (
		<ThemeProvider>
			<Light />
      <Dark />
      <Toggle />
		</ThemeProvider>
	);
}

export default App;
