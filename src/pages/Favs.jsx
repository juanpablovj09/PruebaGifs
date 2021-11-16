import React from 'react'
import ListGifs from '../containers/ListGifs'
import {useFavs} from '../context/FavContext'
import '@styles/pages/Favs.scss'

export default function Favs() {
  const {favs, loading} = useFavs();
  return (
    <div className='Favs'>
      <h2>List of Favs</h2>
      <ListGifs gifs={favs} loading={loading}/>
    </div>
  )
}
