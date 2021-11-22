import React, { useState, useReducer } from 'react'
import { useLocation } from 'wouter'
import '@styles/components/SearchGif.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { reducerValues } from './reducer';

const optionsRating = ['g', 'pg', 'pg-13', 'r']
const optionsLanguage = ['en', 'es', 'fr']



const SearchGif = ({topic = ''}) => {
  const [ path, pushLocation ] = useLocation();
  const {input, rating, language, changeInput, changeRating, changeLanguage} = reducerValues({topic})


  const handleSubmit = e => {
    e.preventDefault()
    if(input.length > 0) {
      pushLocation(`/search/${input}/${rating}/${language}`)
    }
  }

  const handleChange = (e) => {
    changeInput(e)
  }

  return (
    <div className='SearchInput'>
      <h2>A continuación puedes buscar un gif a tu elección</h2>
      <form onSubmit={handleSubmit}>
        <div className="SearchInput-form">
          <div className="SearchInput-search">
            <input placeholder='Search a gif here' onChange={handleChange} type='text' value={input}/>
            <button type='submit' aria-label='Button-search' >
              <AiOutlineSearch className='icon' size={20}/>
            </button>
          </div>
          <div className="SearchInput-options">
            <select onChange={(e) => changeRating(e)} value={rating}>
              <option disabled>Rating:</option>
              {
                optionsRating.map(
                  option => <option key={option}>{option}</option>
                )
              }
            </select>
            <select onChange={(e) => changeLanguage(e)} value={language}>
              <option disabled>Language:</option>
              {
                optionsLanguage.map(
                  option => <option key={option}>{option}</option>
                )
              }
            </select>
          </div>
        </div>
      </form>
    </div>
  )
}

export default React.memo(SearchGif);
