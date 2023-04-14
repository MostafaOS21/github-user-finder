import React from 'react'
import {AiOutlineLink} from "react-icons/ai";

import {v4 as uuid} from "uuid";

const GetUsers = ({users}) => {
  
  const allUsers = users.map((user) => (
    <div className='user' key={uuid()}>
      <div className='user__avatar'>
        <img src={user.avatar_url} alt="User profile avatar" />
      </div>
      <h4 className='user__name'>{user.login}</h4>
      <a href={user.html_url} target="_blank"><AiOutlineLink /></a>
    </div>
  ))

  return (
    <div className='usersGrid'>
      {allUsers}
    </div>
  )
}

export default GetUsers