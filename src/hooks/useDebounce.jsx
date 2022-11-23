import { useRef, useContext } from "react";
import SearchContext from "../context/searchContext";

export default function useDebounce(fn, delay) {
  const timeoutRef = useRef(null);
  const { searchInput, setSearchInput } = useContext(SearchContext);
  
  function debouncedFN(...args) {
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      fn(...args);
      setSearchInput(...args)
    }, delay);
  }
  return debouncedFN;
}
