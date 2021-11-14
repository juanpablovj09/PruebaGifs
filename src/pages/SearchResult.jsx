import React, { useCallback, useEffect, useRef }  from 'react'
import ListGifs from "../containers/ListGifs";
import useGifs from "../hooks/useGifs";
import '@styles/pages/SearchResults.scss'
import { useLocation } from 'wouter';
import useNearScreen from "../hooks/useNearScreen";
import debounce from 'just-debounce-it'
import SearchGif from '../components/SearchGif';
import { Helmet } from "react-helmet";

const SearchResult = ({params}) => {
  const { topic } = params;
  const { gifs, loading, setPage } = useGifs({topic});
  const [path, pushLocation] = useLocation();
  const extRef = useRef();
  const { show } = useNearScreen({once: false, extRef: loading ? null : extRef})
  
  const handleClick = () => {
    pushLocation('/')
  }

  const handleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 200
  ), [setPage])

  useEffect(() => {
    if(show) handleNextPage();
  }, [show])


  return (
    <>
      <Helmet>
        <title>Search results</title>
        <meta name='description' content='Search results' />
      </Helmet>
      <div className="SearchResult">
        <SearchGif topic={topic} />
        <div className="SearchResult-nav">
          <h3>Gifs about: {decodeURI(topic)}</h3>
          <p onClick={handleClick}>Back</p>
        </div>
        <ListGifs gifs={gifs} loading={loading}/>
        <div ref={extRef}></div>
      </div>
    </>
  );
}

export { SearchResult }
