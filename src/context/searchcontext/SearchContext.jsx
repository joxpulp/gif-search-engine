import { useState, useEffect, createContext } from "react";

export const SearchContext = createContext();

function SearchProvider({ children }) {
	const [searchQuery, setSearchQuery] = useState("");
	const [showSuggest, setShowSuggest] = useState(false);
	const [searchClick, setSearchClick] = useState(false);
	const [selectedGif, setSelectedGif] = useState(null);
	const [data, setData] = useState({
				fetched: false,
				gifs: [],
	});
	const [autocomplete, setAutocomplete] = useState({
				fetched: false,
				suggestions: [],
	});

// FETCH DATA FROM GIPHY AUTOCOMPLETE ENDPOINT
	useEffect(() => {
		fetch(
			`https://api.giphy.com/v1/gifs/search/tags?api_key=TSwctyoT1ZKon74EIDnDGdGY5QTz9Ezj&q=${searchQuery}&limit=6&offset=0`
		)
			.then((response1) => response1.status === 200 && response1.json())
			.then((autocomplete) => {
				setAutocomplete({ fetched: true, suggestions: autocomplete.data });
			});
	}, [searchQuery]);

// FETCH DATA FROM GIPHY SEARCH ENDPOINT 
	useEffect(() => {
		searchClick && fetch(
			`https://api.giphy.com/v1/gifs/search?api_key=TSwctyoT1ZKon74EIDnDGdGY5QTz9Ezj&q=${searchQuery}&limit=12&offset=0&rating=g&lang=en`
		)
			.then((response2) => response2.status === 200 && response2.json())
			.then((data) => {
				setData({ fetched: true, gifs: data.data });
			});
	}, [searchClick, searchQuery, setData])

// SET SEARCHCLICK TO FALSE IF NO GIF IS RETURNED
	useEffect(() => {
		(data.gifs.length === 0 && data.fetched === true) && setSearchClick(false)
	}, [data.fetched, data.gifs.length, setSearchClick]);


	return (
		<SearchContext.Provider
			value={{
				searchQuery,
				setSearchQuery,
				data,
				setData,
				showSuggest,
				setShowSuggest,
				searchClick,
				setSearchClick,
				autocomplete,
				setAutocomplete,
				selectedGif,
				setSelectedGif
			}}
		>
			{children}
		</SearchContext.Provider>
	);
}

export default SearchProvider;
