import React from 'react'
import {FaSun} from "react-icons/fa";

const ThemeMode = () => {


  const changeTheme = (e) => {
    const body = document.body;

    if(!e) {
      if(localStorage.getItem('theme') === 'light') {
        body.classList.add("light");
      }

      return;
    }


    if(body.classList.contains("light")) {
      body.classList.remove("light");
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.add("light");
      localStorage.setItem('theme', 'light');
    }
  }

  changeTheme(null);

  return (
    <span className='mode' onClick={changeTheme}>
      <FaSun id='mode__icon'/>
    </span>
  )
}

export default ThemeMode
