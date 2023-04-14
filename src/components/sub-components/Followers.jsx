import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useState } from 'react';
import api from '../../api/apiRequest';
import FollowLoading from './FollowLoading';
import GetUsers from './GetUsers';

const Followers = ({url}) => {
  const [followerLoading, setLoading] = useState(false);
  const [followers, setFollowers] = useState([]);
  const [error, setError]= useState(false);

  const getFollowers = async () => {
    try {
      setLoading(true);
      const reponse = await api.get(url);
      setFollowers([...reponse.data]);
      return reponse.data;
    } catch(err) {
      setError(err.message);
      return err.message;
    } finally {
      setLoading(false);
    }
  }

  const reponse = useQuery(["get-user-followers"], getFollowers);

  if(error) {
    <h1>Erro Occured :(</h1>
  }

  let element;

  if(followers.length) {
    element = <GetUsers users={followers} />
  } else if(followers.length === 0) {
    element = <h1>There are no followers :(</h1>
  }

  if(followerLoading) {
    element = <FollowLoading />
  }

  return (
    <div id='userFollowers' className='tab'>
      {element}
    </div>
  )
}

export default Followers