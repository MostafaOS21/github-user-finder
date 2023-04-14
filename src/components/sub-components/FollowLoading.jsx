import React from 'react'
import {v4 as uuid} from "uuid";

const FollowLoading = () => {

  const elements = [];

  for(let i = 0; i < 9; i++) {
    const el = <div className='signel__follow user' key={uuid()}>
      <div className="user__avatar"></div>
      <p className='single__line'></p>
    </div>

    elements.push(el);
  }

  return (
    <div className='usersGrid'>
      {elements}
    </div>
  )
}

export default FollowLoading