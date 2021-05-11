import {useContext } from "react";
import { SearchContext } from "../../context/searchcontext/SearchContext";
import { LoadingContext } from "../../context/loadingcontext/LoadingContext";
import { BsX } from "react-icons/bs";
import searchIcon from "../../assets/svg/icon-search-mod-noc.svg";
import './searchbar.css'

function SearchBar({ placeholder, inputClass, suggestionClass }) {
	const { setData, searchQuery, setSearchQuery, showSuggest, setShowSuggest, setSearchClick, autocomplete } = useContext(SearchContext);
	const { setIsLoading, counter } = useContext(LoadingContext);

//  UPDATES THE INPUT 
	const handleChange = (e) => {
		setSearchQuery(e.target.value);
	};
	
// FIRES THE FETCH FROM THE GIPHY SEARCH ENDPOINT WHEN THE USER CLICKS ON A SUGGESTION
	const handleSuggestion = (suggestion) => {
		setSearchQuery(suggestion);
		setShowSuggest(false);
		counter.current = 0;
		setData({gifs: []})
		setIsLoading(true);
		setSearchClick(true)
	};

// FIRES THE FETCH FROM THE GIPHY SEARCH ENDPOINT
	const handleClickSearch = () => {
		setShowSuggest(false);
		counter.current = 0;
		setData({gifs: []})
		setIsLoading(true);
		setSearchClick(true)
	};

// SET THE ENTER KEY OF THE KEYBOARD TO TRIGGER THE HANDLECLICKSEARCH 
	const handleKeyEnter = (e) =>  e.key === "Enter" ? handleClickSearch() : searchQuery === "" ? handleReset() : setShowSuggest(true)
	
// RESET THE INPUT AND GIF CONTAINER
	const handleReset = () => {
		setSearchQuery("")
		setShowSuggest(false)
		setData({ fetched: false, gifs: [] })
	}

	return (
		<div className="search-bars">
			<div className="search-box-all">
				<div className="search-container">
					<input
						onKeyUp={handleKeyEnter}
						value={searchQuery}
						onChange={handleChange}
						className={inputClass}
						placeholder={placeholder}
						type="text"
					/>
					{showSuggest === true && autocomplete.suggestions.length !== 0 ? (
						<ResetButton onClick={handleReset} />
					) : (
						<SearchButton onClick={handleClickSearch} />
					)}
				</div>
				{showSuggest === true && autocomplete.suggestions.length !== 0 && (
					<ul className={suggestionClass}>
						{autocomplete.suggestions.map((suggestion, index) => (
							<li key={index} onClick={() => handleSuggestion(suggestion.name)}>
								{suggestion.name}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}

function SearchButton({ onClick }) {
	return (
		<div onClick={onClick} className="search-btn">
			<img src={searchIcon} alt="searchIcon" />
		</div>
	);
}

function ResetButton({ onClick }) {
	return (
		<div onClick={onClick} className="reset-btn">
			<BsX />
		</div>
	);
}

export default SearchBar;
