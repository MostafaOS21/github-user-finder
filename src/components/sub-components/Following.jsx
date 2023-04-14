import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { useState } from 'react'
import api from '../../api/apiRequest'
import FollowLoading from './FollowLoading'
import GetUsers from './GetUsers'

const Following = ({url}) => {

  const [followings, setFollowings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getFollowing = async () => {
    try {
      setLoading(true);
      const response = await api(url);
      setFollowings([...response.data])
      return response.data;
    } catch(err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const reponse = useQuery(['get-user-followings'], getFollowing);

  let element;

  if(error) {
    <h1>Erro Occured :(</h1>
  }

  if(followings.length) {
    element = <GetUsers users={followings} />
  } else if(followings.length === 0) {
    element = <h1>There are no following :(</h1>
  }

  if(loading) {
    element = <FollowLoading />
  }

  return (
    <div id='userFollowing' className='tab'>
      {element}
    </div>
  )
}

export default Following