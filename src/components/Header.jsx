import React from 'react'
import { Link } from 'react-router-dom'
import SeacrhBar from './sub-components/SeacrhBar'
import ThemeMode from './sub-components/ThemeMode'
import { FaSearch } from "react-icons/fa";

// Window Size Hook
import WindowSize from '../hooks/WindowSize';

const Header = ({scrollNav}) => {
  let mobileSearchIcon;

  const showSearch = () => {
    document.getElementById('searchBar').classList.add('active');
  }

  if(WindowSize() <= 780) {
    mobileSearchIcon = <>
      <span className='mobile__search' onClick={showSearch}>
        <FaSearch className='mobile__search__icon' />
      </span>
      <SeacrhBar mobileView={true} />
    </>
  } else {
    mobileSearchIcon = <SeacrhBar />
  }

  return (
    <header className={scrollNav && 'active'}>
      <nav>
        <h3 id='logo'><Link to="/">Git<span>Finder</span></Link></h3>
        
        {mobileSearchIcon}
        
        <ThemeMode />
      </nav>
    </header>
  )
}

export default Header
