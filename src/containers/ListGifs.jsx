import React from 'react'
import Gif from '../components/Gif'
import '@styles/containers/ListGifs.scss'
import Loading from '../components/Loading';

const ListGifs = ({gifs, loading }) => {
    return (
      <div className='ListGifs'>
        <div className="ListGifs-container">
          {gifs.length === 0 && loading ?
            <div className='ListGifs-spinner'>
              <Loading />
            </div>
            :
            <>
              {
              gifs.length > 0 
              ?
              <div className='ListGifs-grid'>
                {gifs.map(({title, id, url}) => 
                    <Gif key={`${id + Math.random()}`} title={title} url={url} id={id}/>
                )}
              </div> 
              :
              <h3>No gifs found</h3>
              }
            </>
          } 
        </div>
      </div>
    )
}

export default ListGifs
