import React, { useState, useContext } from "react";
import useGifs from "../hooks/useGifs";
import ListGifs from "../containers/ListGifs";
import "@styles/pages/Home.scss";
import SearchGif from "@components/SearchGif";
import { Helmet } from "react-helmet";
import {useAuth} from '../context/AuthContext'
import ButtonFavs from "../components/ButtonFavs";

const Home = () => {
  const { gifs, loading } = useGifs();
  const lastSearch = localStorage.getItem("lastTopic");
  
  const {currentUser} = useAuth()

  return (
    <>
      <Helmet>
        <title>Home Gif</title>
        <meta name="description" content="Home Gif" />
      </Helmet>
      <div className="Home">
        <SearchGif topic={lastSearch} />
        {
          currentUser &&
            <ButtonFavs />
        }
        <h2>Last Search: {lastSearch}</h2>
        <ListGifs gifs={gifs} loading={loading} />
      </div>
    </>
  );
};

export { Home };
