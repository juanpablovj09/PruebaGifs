import React from 'react'
import '@styles/components/GifDetail.scss'

const GifDetail = ({title, url}) => {
    return (
      <div className='GifDetail'>
        <h3>{title}</h3>
        <img loading='lazy' src={url} />
      </div>
    )
}

export default GifDetail
