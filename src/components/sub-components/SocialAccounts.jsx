import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import api from '../../api/apiRequest'
import APIContext from '../../context/ContextAPI';
import {FaLinkedinIn, FaFacebook, FaYoutube, FaTwitter} from "react-icons/fa";
import { FiMapPin, FiLink } from "react-icons/fi"
import { v4 as uuid } from 'uuid';


const SocialAccounts = ({accounts, searchResult}) => {
  const [allAccounts, setAccounts] = useState([]);
  const {setError} = useContext(APIContext);
  const [isLoading, setIsLoading] = useState(false);
  const getAccounts = async () => {
    
    try {
      setIsLoading(true);
      const response = await api.get("/"+searchResult+"/social_accounts");
      setAccounts([{location: accounts.location}, {blog: accounts.blog},...response.data]);
      return response.data;
    } catch(err) {
      if(err.response.status === 404)
        setError("User can't be found, enter a vaild one!");
      else 
        setError(err.message);
    } finally {
      setIsLoading(false);
    }

  }

  const response = useQuery(["get-user-accounts", searchResult], getAccounts);


  let allLinks;
  const createAccounts = () => {
    if(allAccounts.length) {
      allLinks = allAccounts.map((acc) => {
        if(!acc.url) {

          if (acc.blog) {
            let blog = acc.blog;

          if(blog.includes("http://")) {
            blog = blog.slice(7);
          }
          
          if(blog.includes("https://")) {
            blog = blog.slice(8);
          }

          if(blog.indexOf("/")) {
            blog = blog.slice(0, blog.indexOf("/"));
          }

            return <a key={uuid()}> <FiLink className='social__icon' /> {blog}</a>
          }
          if(acc.location) {
            return <a key={uuid()}> <FiMapPin className='social__icon'/>
              {acc.location?.length >= 20 ? acc.location?.slice(0, 21) + "..." : acc.location}
            </a>
          } 
          
          return;
        }
        const accUrl = acc.url[acc.url.length - 1] === "/"
          ? acc.url.slice(0, acc.url.length - 1) : acc.url;
        const slicedUsername = accUrl.slice(accUrl.lastIndexOf("/") + 1);
        const username = slicedUsername.length >= 15 ? slicedUsername.slice(0, 16) + "..."
          : slicedUsername;
        if(acc.provider === 'twitter') {
          return <a href={acc.url} key={uuid()}> <FaTwitter className='social__icon' /> @{username} </a>
        } else if(acc.provider === "youtube") {
          return <a href={acc.url} key={uuid()}> <FaYoutube className='social__icon' /> @{username} </a>
        } else if(acc.provider === "facebook") {
          return <a href={acc.url} key={uuid()}> <FaFacebook className='social__icon' /> @{username} </a>
        } else if(acc.provider === "linkedin") {
          return <a href={acc.url} key={uuid()}> <FaLinkedinIn className='social__icon' /> @{username} </a>
        }
      })

    }
  }

  createAccounts();

  return (
    <div className='social_accounts'>
      {allLinks}
    </div>
  )
}

export default SocialAccounts;