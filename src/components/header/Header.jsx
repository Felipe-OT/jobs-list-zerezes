import { useState } from "react";
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
      <SearchBarModal visible={searchVisibility}/>
    </header>
  );
};

export default Header;
