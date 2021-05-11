import { useContext } from "react";
import { DarkModeContext } from "../../context/darkmodecontext/DarkModeContext";
import { SearchContext } from "../../context/searchcontext/SearchContext";
import WelcomeMessage from "../welcomemessage/WelcomeMessage";
import NoResultMessage from "../noresultmessage/NoResultMessage";
import GifContainer from "../gifscontainer/GifContainer";
import './body.css'

function Body() {
	const { isDarkMode } = useContext(DarkModeContext);
	const { data } = useContext(SearchContext);

	return (
		<div className={`body ${isDarkMode ? "dark" : "light"}`}>
			{data.gifs.length === 0 && data.fetched === false ? (
				<WelcomeMessage />
			) : data.gifs.length === 0 && data.fetched === true ? (
				<NoResultMessage />
			) : (
				<GifContainer />
			)}
		</div>
	);
}

export default Body;
