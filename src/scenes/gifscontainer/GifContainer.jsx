import { useContext } from "react";
import { DarkModeContext } from "../../context/darkmodecontext/DarkModeContext";
import { SearchContext } from "../../context/searchcontext/SearchContext";
import { LoadingContext } from "../../context/loadingcontext/LoadingContext";
import LoadingSpinner from "../../components/loadingspinner/LoadingSpinner";
import GifCard from "../gifcard/GifCard";
import './gifcontainer.css'


function GifContainer() {
	const { isDarkMode } = useContext(DarkModeContext);
	const { data, setSearchClick, setSelectedGif } = useContext(SearchContext);
	const { isLoading, setIsLoading, counter } = useContext(LoadingContext);

	const imageLoaded = () => {
		counter.current += 1;
		counter.current >= data.gifs.length && 
		setIsLoading(false) 
		setSearchClick(false)
	};
	
	return (
		<div className={isLoading ? "gif-container-loading" : "gif-container"}>
			{isLoading && (
				<LoadingSpinner
					spinnerColor={isDarkMode ? "white" : "#572EE5"}
					textColor={isDarkMode ? "white" : "#572EE5"}
				>
					Cargando tus GIFs...mientras toma un poco de <span role="img" aria-label="hot-beverage">☕</span>
				</LoadingSpinner>
			)}
			{data.gifs.map((gif) => (
				<GifCard
					opacityAnimation={isLoading ? 0 : 1}
					key={gif.id}
					gifurl={gif.images.fixed_height.webp}
					slug={gif.slug}
					onLoad={imageLoaded}
					onClickImage={() => setSelectedGif(gif.images.original.url)}
				/>
			))}
		</div>
	);
}

export default GifContainer;
