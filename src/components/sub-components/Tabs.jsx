import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Tabs = () => {

  const location = useLocation();
  const applyActiveTab = (e) => {
    const { currentTarget: target } = e;
    const tabLinks = document.querySelectorAll("#tabs .tab__link");

    tabLinks.forEach((tab) => {
      tab.classList.remove("active");
    })

    tabLinks.forEach((tab) => {
      if(tab === target)
        tab.classList.add("active");
    })
  }

  return (
    <div id='tabs'>
      <Link onClick={applyActiveTab} to={'/'}
        className={location.pathname === "/" ? "active tab__link" : "tab__link"}
        >Repositories</Link>
      <Link onClick={applyActiveTab} to={'/followers'}
        className={location.pathname === "/followers" ? "active tab__link" : "tab__link"}
        >Followers</Link>
      <Link onClick={applyActiveTab} to={'/following'}
        className={location.pathname === "/following" ? "active tab__link" : "tab__link"}
        >Following</Link>
    </div>
  )
}

export default Tabs