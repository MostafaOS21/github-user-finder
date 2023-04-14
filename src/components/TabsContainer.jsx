import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import APIContext from '../context/ContextAPI'
import Followers from './sub-components/Followers'
import Following from './sub-components/Following'
import Repos from './sub-components/Repos'
import TabNotFound from './sub-components/TabNotFound'

const TabsContainer = () => {

  const {searchResult} = useContext(APIContext);

  const reposUrl = "/" + searchResult + "/repos";
  const followersUrl = "/" + searchResult + "/followers";
  const followingUrl = "/" + searchResult + "/following";

  return (
    <section id='tabsContainer'>
      <Routes>
        <Route path='/' element={<Repos url={reposUrl} />} />
        <Route path='/followers' element={<Followers url={followersUrl} />} />
        <Route path='/following' element={<Following url={followingUrl} />} />
        <Route path='*' element={<TabNotFound />} />
      </Routes>
    </section>
  )
}

export default TabsContainer