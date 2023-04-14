import React from 'react';
import { useContext } from 'react';

import APIContext from '../context/ContextAPI';
import Avatar from './sub-components/Avatar';
import UserInfo from './sub-components/UserInfo';

const Profile = ({text}) => {

  const { searchResult, data } = useContext(APIContext);


  return (
    <aside id='user_profile'>
      <Avatar avatarUrl={data[0].avatar_url} />
      <UserInfo text={text} searchResult={searchResult} />
    </aside>
  )
}

export default Profile
