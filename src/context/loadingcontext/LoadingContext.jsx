import { useState, useRef, createContext } from "react";

export const LoadingContext = createContext();

function LoadingProvider({ children }) {
	const [isLoading, setIsLoading] = useState(false);
	const counter = useRef(0);

	return (
		<LoadingContext.Provider value={{ isLoading, setIsLoading, counter }}>
			{children}
		</LoadingContext.Provider>
	);
}

export default LoadingProvider;
