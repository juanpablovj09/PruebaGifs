import {useContext, useEffect, useState} from 'react'
import { getGifs } from '../services/getGifs'
import Context from '../context/AppContext'

const STARTED_PAGE = 0;

const useGifs = ({topic} = {topic: localStorage.getItem('lastTopic')}) => {
  // const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const {gifs, setGifs} = useContext(Context)
  const [page, setPage] = useState(STARTED_PAGE);

  const key = topic || localStorage.getItem('lastTopic') ||'ibai';

  useEffect(() => {
    setLoading(true);
    getGifs({topic: key}).then(gifs => {
      // localStorage.setItem('data', JSON.stringify(gifs));
      // setGifs(JSON.parse(localStorage.getItem('data')))
      setGifs(gifs)
      setLoading(false)
      localStorage.setItem('lastTopic', topic)
    })

    // const apiResponse = await getGifs({topic: key})
    // // console.log(apiResponse)
    // if(apiResponse.length > 0) {
    //   setLoading(false);
    //   setGifs(apiResponse)
    //   localStorage.setItem('lastTopic', topic)
    // }

  }, [topic, key, setGifs])

  useEffect(() => {
    if(page === STARTED_PAGE) return
    setLoading(true)
    getGifs({topic: key, page})
      .then(nextGifs => {
        setGifs([...gifs, ...nextGifs])
        setLoading(false)
      })
  }, [page])

  return {gifs, loading, setPage}
}

export default useGifs