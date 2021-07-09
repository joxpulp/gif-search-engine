import { useContext } from "react";
import { DarkModeContext } from "../../context/darkmodecontext/DarkModeContext";
import { SearchContext } from "../../context/searchcontext/SearchContext";
import WelcomeMessage from "../welcomemessage/WelcomeMessage";
import NoResultMessage from "../noresultmessage/NoResultMessage";
import GifContainer from "../gifscontainer/GifContainer";

function Body() {
	const { isDarkMode } = useContext(DarkModeContext);
	const { gifs } = useContext(SearchContext);
  
	return (
	  <div className={`body ${isDarkMode ? "dark" : "light"}`}>
		{gifs.data.length === 0 && gifs.fetched === false ? (
		  <WelcomeMessage />
		) : gifs.data.length === 0 && gifs.fetched === true ? (
		  <NoResultMessage />
		) : (
		  <GifContainer />
		)}
	  </div>
	);
  }
  
  export default Body;
