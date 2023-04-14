import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useState } from 'react';
import api from '../../api/apiRequest';
import {HiCodeBracketSquare, HiStar} from "react-icons/hi2";
import { CgGitFork } from "react-icons/cg";
import {v4 as uuid} from "uuid";

const Repos = ({url}) => {
  const [repos, setRepos] = useState([]);
  const [error,setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const getAllRepos = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(url);
      setRepos([...response.data])
      return response.data;
    } catch(err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  const response = useQuery(['get-user-repos'], getAllRepos);

  let element;

  if(repos.length) {
    const reposElements = repos.map(repo => (
      <div className='repo' key={uuid()}>
        <div className='text'>
          <a className='repo__name' href={repo.html_url} target="_blank">{repo.name}</a>
          <p>{repo.description}</p>
          <span className='visibility'>{repo.visibility}</span>
        </div>
        <div className='stats'>
          <span className='language'> <HiCodeBracketSquare className='stat__icon' /> {repo.language}</span>
          <span className='stargazers_count'> <HiStar className='stat__icon'/> {repo.stargazers_count}</span>
          <span className='forks_count'> <CgGitFork className='stat__icon' /> {repo.forks_count}</span>
        </div>
      </div>
      ))
    element = 
    <div className='repo__grid'>
      {reposElements}
    </div>
  } else if(repos.length === 0) {
    element = <h1>There are no Repos :(</h1>
  }

  if(isLoading) {
    const elements = [];

    for(let i = 0; i < 6; i++) {
      let el = <div className='repo__load' key={uuid()} >
        <div className='top'>
          <h3 className='name'></h3>
          <p className='description'>
            <span className='line__1'></span>
            <span className='line__2'></span>
          </p>
        </div>

        <div className="stats__load">
          <span className='stat__1'></span>
          <span className='stat__2'></span>
          <span className='stat__3'></span>
        </div>
      </div>

      elements.push(el);
    }

    return <div id='repoLoading'>
      {elements}
    </div>
  }

  return (
    <div id='userRepos' className='tab'>
      {element}
    </div>
  )
}

export default Repos