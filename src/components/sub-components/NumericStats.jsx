import React from 'react'

const NumericStats = ({stats}) => {

  const formatNumbers = (num) => {
    if (num >= 1e6) {
      return (num / 1e6).toFixed(1) + "m";
    } else if (num >= 1e3) {
      return (num / 1e3).toFixed(1) + "k";
    } else {
      return num;
    }
  }

  return (
    <div className='numberic__stats'>
      <div><span>{formatNumbers(stats.repos)}</span> Repos</div>
      <div><span>{formatNumbers(stats.followers)}</span> Follower</div>
      <div><span>{formatNumbers(stats.following)}</span> Following </div>
    </div>
  )
}

export default NumericStats