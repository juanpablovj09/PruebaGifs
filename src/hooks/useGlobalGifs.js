import {useContext} from 'react'
import Context from '../context/AppContext'

const useGlobalGifs = () => {
  return useContext(Context).gifs
}

export default useGlobalGifs
