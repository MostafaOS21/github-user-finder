import React from 'react'
import {TbError404} from "react-icons/tb";
// TbError404
const TabNotFound = () => {
  return (
    <div className='tab__not__found tab'>
      <h3>Tab can't be found </h3>
      <TbError404 className='error__icon' /> 
    </div>
  )
}

export default TabNotFound