import { createContext, useEffect, useState } from "react";

const SearchContext = createContext()

export const SearchProvider = ({children}) => {
    const [searchInput, setSearchInput] = useState('')

    return (
        <SearchContext.Provider value={{searchInput, setSearchInput}}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContext