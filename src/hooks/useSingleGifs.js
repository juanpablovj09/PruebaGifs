import { useEffect, useState } from 'react'
import { getSingleGif } from '../services/getSingleGif'
import useGifs from './useGifs'

const useSingleGifs = ({id}) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const {gifs} = useGifs()
  const gifFromCache = gifs.find(gif => gif.id === id)
  const [gif, setGif] = useState(gifFromCache)

  useEffect(() => {
    if(!gif) {
      setLoading(true)
      getSingleGif({id}).then(info => {
        setGif(info)
        setLoading(false)
        setError(false)
      }).catch(err => {
        setError(true)
        setLoading(false)
      })
    }
  }, [id])

  return {gif, loading, error}
}

export default useSingleGifs
