import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import NumericStats from "./NumericStats";
import SocialAccounts from "./SocialAccounts";

const UserInfo = ({ text, searchResult }) => {
  const accounts = {
    location: text.location,
    social_link: text.social_link,
    twitter_username: text.twitter_username,
    blog: text.blog,
  };

  const stats = {
    repos: text.repos,
    followers: text.followers,
    following: text.following,
  };

  return (
    <div id="userInfo">
      <div className="github__info">
        <h3 className="name">{text.name}</h3>
        <span className="username">{text.username}</span>
        <p className="bio">{text.bio?.length >= 50 ? text.bio.slice(0, 50) + "..." : text.bio}</p>
        <a href={`https://github.com/${text.username}`} target="_blank">
          <FaExternalLinkAlt /> See on GitHub
        </a>
      </div>
      <SocialAccounts accounts={accounts} searchResult={searchResult} />
      <NumericStats stats={stats} />
    </div>
  );
};

export default UserInfo;
