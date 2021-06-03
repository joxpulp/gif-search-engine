import { useState, useEffect, createContext } from "react";
import { useFetch } from "../../hook/useFetch";

export const SearchContext = createContext();

function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggest, setShowSuggest] = useState(false);
  const [searchClick, setSearchClick] = useState(false);
  const [selectedGif, setSelectedGif] = useState(null);
  const url =
    searchClick &&
    `https://api.giphy.com/v1/gifs/search?api_key=TSwctyoT1ZKon74EIDnDGdGY5QTz9Ezj&q=${searchQuery}&limit=12&offset=0&rating=g&lang=en`;
  const { data, setData } = useFetch(url);
  const autocomplete = useFetch(
    `https://api.giphy.com/v1/gifs/search/tags?api_key=TSwctyoT1ZKon74EIDnDGdGY5QTz9Ezj&q=${searchQuery}&limit=6&offset=0`
  );

  // SET SEARCHCLICK TO FALSE IF NO GIF IS RETURNED
  useEffect(() => {
    data.data.length === 0 && data.fetched === true && setSearchClick(false);
  }, [data.fetched, data.data.length, setSearchClick]);

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
        selectedGif,
        setSelectedGif
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export default SearchProvider;
