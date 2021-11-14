import React from "react";
import useGifs from "../hooks/useGifs";
import ListGifs from "../containers/ListGifs";
import '@styles/pages/Home.scss';
import SearchGif from "@components/SearchGif";
import { Helmet } from "react-helmet";

const Home = () => {
  const { gifs, loading } = useGifs();
  const lastSearch = localStorage.getItem('lastTopic')

  return(
    <>
      <Helmet>
        <title>Home Gif</title>
        <meta name='description' content='Home Gif' />
      </Helmet>
      <div className='Home'>
        <SearchGif topic={lastSearch}/>   
        <h2>Last Search: {lastSearch}</h2>
        <ListGifs gifs={gifs} loading={loading}/>
      </div>
    </>
  )
};

export { Home };
