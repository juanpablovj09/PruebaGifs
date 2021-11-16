import React from 'react'
import { useLocation } from "wouter"
import '@styles/components/ButtonFavs.scss'

const ButtonFavs = () => {
  const [path, pushLocation] = useLocation();

  return (
    <div className="Button-favs">
      <div className='Button-favs__button' onClick={() => pushLocation('/favs')}>List of Favs</div>
    </div>
  )
}

export default ButtonFavs
