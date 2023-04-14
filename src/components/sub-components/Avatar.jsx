import React from 'react'

const Avatar = ({avatarUrl}) => {
  return (
    <div id='avatar'>
      <img src={avatarUrl} alt="avatar image" />
    </div>
  )
}

export default Avatar
