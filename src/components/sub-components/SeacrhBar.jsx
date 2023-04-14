import React from "react";
import { FaSearch } from "react-icons/fa";
import {FaTimes} from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import api from "../../api/apiRequest";
import { useRef } from "react";
import { useContext } from "react";
import APIContext from "../../context/ContextAPI";
import WindowSize from "../../hooks/WindowSize";

const SeacrhBar = ({mobileView}) => {
  const {setError, setIsLoading, setData, setSearchResult, searchResult} = useContext(APIContext);

  const searchRef = useRef("");

  // GET User
  const getUser = async () => {
    const searchValue = searchRef.current.value;
    
    try {
      setIsLoading(true);

      if(!searchValue) {
        throw new Error("Please write the username");
      }

      const response = await api.get("/"+searchValue);
      if(response.status === 404) throw new Error("User Can't Be Found");
      if(response.status !== 200) throw new Error("Error getting data");
      setData([response.data]);
      setSearchResult(searchValue)
      return [response.data];
    } catch(err) {
      if(err.response.status === 404)
        setError("User can't be found, enter a vaild one!");
      else 
        setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  const response = useQuery(["get-github-user"], getUser, {
    enabled: false,
  });



  const hideSearchBar = () => {
    document.getElementById('searchBar').classList.remove('active');
  }

  const searchIcon = [];

  if(WindowSize() >= 781) {
    searchIcon.push(<FaSearch className="search__icon" />);
    searchIcon.push('Search')
  } else {
    searchIcon.push(null);
    searchIcon.push(<FaSearch className="search__icon" />);
  }

  return (
    <div id="searchBar" className={mobileView && 'mobile__view'}>
      {mobileView && <FaTimes className="hide__search__bar" onClick={hideSearchBar} />}
      <form onSubmit={(e) => e.preventDefault()}>
        {searchIcon[0]}
        <input type="text" placeholder="Search username*" 
          ref={searchRef}
          onFocus={() => document.querySelector("#searchBar form").classList.add("focus")}
          onBlur={() => document.querySelector("#searchBar form").classList.remove("focus")}
          />
        <button onClick={() => (
          searchRef.current.value && response.refetch()
        )}>{searchIcon[1]}</button>
      </form>
    </div>
  );
};

export default SeacrhBar;
