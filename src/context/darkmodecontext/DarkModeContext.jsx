import { useState, createContext } from "react";

export const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
	const [isDarkMode, setIsDarkMode] = useState(false);

	return (
		<DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
}

export default DarkModeProvider;
