import React from 'react'
import { Link } from "wouter"
import { IoCaretForwardOutline } from 'react-icons/io5';
import "@styles/components/TrendingList.scss";

// const options = ["Colombia", "Rick", "Marvel", 'acsca', 'ascsc'];

const TrendingList = ({trends, close}) => {
  const options = trends;
  console.log(trends)
  const firstWord = options.map(option => (
                      option.username.split(' ')[0] || option.title.split(' ')[0])).map(string => 
                        (string.charAt(0).toUpperCase() + string.slice(1)));

  const handleClick = () => {
    close(false)
  }

  return (
    <div className="Trending-list">
      <h2>Trending gifs</h2>
      <div className="Trending-list__item">
      {firstWord.map((option) => (
          <Link to={`/search/${option}`} key={`option-${Math.random()}`} onClick={handleClick}>
            <p><IoCaretForwardOutline size={20}/>{option}</p>
          </Link>
      ))}
      </div>
    </div>
  )
}

export default TrendingList
