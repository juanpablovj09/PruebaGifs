import React, { useState, useCallback } from 'react'
import { useLocation } from 'wouter'
import '@styles/components/SearchGif.scss';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchGif = ({topic = ''}) => {
  const [input, setInput] = useState(topic);
  const [ path, pushLocation ] = useLocation();
  
  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if(input.length > 0) {
      pushLocation(`/search/${input}`)
    }
  }

  return (
    <div className='SearchInput'>
      <h2>A continuación puedes buscar un gif a tu elección</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder='Search a gif here' onChange={handleChange} type='text' value={input}/>
        <button type='submit' aria-label='Button-search' >
          <AiOutlineSearch className='icon' size={20}/>
        </button>
      </form>
    </div>
  )
}

export default React.memo(SearchGif);
