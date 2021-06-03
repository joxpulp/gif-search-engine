import { useContext } from "react";
import { motion } from 'framer-motion';
import { DarkModeContext } from "../../context/darkmodecontext/DarkModeContext";
import { SearchContext } from "../../context/searchcontext/SearchContext";
import SearchBar from "../search-bar/SearchBar";
import ilustrationLight from "../../assets/svg/ilustra_header.svg";
import ilustrationDark from "../../assets/svg/ilustra_header_noct.svg";

function Search() {
	const { isDarkMode } = useContext(DarkModeContext);
	const { searchQuery } = useContext(SearchContext);

	return (
		<motion.div transition={{delay: 0.2}} initial={{x: "-100%"}} animate={{x: 0}} className="search">
			<h1 style={{ color: isDarkMode ? "white" : "#572EE5" }}>
				¡Inspirate y busca los mejores GIFs!
			</h1>
			<img
				src={isDarkMode ? ilustrationDark : ilustrationLight}
				alt="ilustraton"
			/>
			<SearchBar
				inputClass={`search-bar ${isDarkMode ? "dark" : "light"}`}
				suggestionClass={`suggestions-box ${isDarkMode ? "dark" : "light"}`}
				placeholder="Busca GIFs"
			/>
			<motion.h3 initial={{opacity: 0}} animate={{opacity: searchQuery !== "" ? 1 : 0}} style={{ color: isDarkMode ? "white" : "#572EE5" }}>
				Resultados de la búsqueda: {searchQuery} 
			</motion.h3>
		</motion.div>
	);
}

export default Search;
