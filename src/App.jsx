import { useContext } from "react";
import { DarkModeContext } from "./context/darkmodecontext/DarkModeContext";
import LoadingProvider from "./context/loadingcontext/LoadingContext";
import Header from "./scenes/header/Header";
import Search from "./scenes/search/Search";
import Body from "./scenes/body/Body";
import ModalGif from "./scenes/modalgif/ModalGif";
import { SearchContext } from "./context/searchcontext/SearchContext";
import { AnimatePresence } from "framer-motion";
import "./AllStyles.css";

function App() {
	const { isDarkMode } = useContext(DarkModeContext);
	const { selectedGif } = useContext(SearchContext);

	return (
		<div className={`App ${isDarkMode ? "dark" : "light"}`}>
			<AnimatePresence>
				{selectedGif && <ModalGif/>}
			</AnimatePresence>
			<Header />
			<LoadingProvider>
				<Search />
				<Body />
			</LoadingProvider>
		</div>
	);
}

export default App;
