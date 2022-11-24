import { useContext, useState } from "react";
import SearchContext from "../../context/searchContext";
import SearchBarModal from "../searchBar/SearchBarModal";
import AnnouncementBar from "./AnnouncementBar";
import Navigation from "./Navigation";

const Header = () => {

  const [searchVisibility, setSearchVisibility] = useState(false)
 

  return (
    <header
      className="w-full relative h-fit border-b pb-5"
    >
      <AnnouncementBar/>
      <Navigation setSearchVisibility={setSearchVisibility} searchVisibility={searchVisibility}/>
      <SearchBarModal onChange={(filter) => filter} visible={searchVisibility}/>
    </header>
  );
};

export default Header;
