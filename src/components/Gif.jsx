import React,{ memo } from 'react'
import '@styles/components/Gif.scss'
import { Link } from 'wouter'

const Gif = (props) => {
  const {title, url, id} = props
    return (
      <div className='Gif'>
          <Link to={`/detail/${id}`} className='Gif-link'>
            <img src={url} alt='Gif image' />
            <div className="Gif-title">
              <p>{title}</p>
            </div>
          </Link>
      </div>
    )
}

export default memo(Gif)
