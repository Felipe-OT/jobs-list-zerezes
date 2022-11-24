import { createContext, useEffect, useState } from "react";


const SearchContext = createContext()

export const SearchProvider = ({children}) => {
    const [searchInput, setSearchInput] = useState('')

    const filteredData = (filter) => {
        console.log(filter)
        setSearchInput(filter)
    }


    

    return (
        <SearchContext.Provider value={{searchInput, setSearchInput, filteredData}}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContext