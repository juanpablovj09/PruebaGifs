import React,{ memo, useState } from 'react'
import '@styles/components/Gif.scss'
import { Link } from 'wouter'
import { Modal } from './Modal';
import LinkLogin from './LinkLogin';
import { useAuth } from '../context/AuthContext';
import { useFavs } from '../context/FavContext';

const Gif = (props) => {
  const {title, url, id} = props
  const [toggleModal, setToggleModal] = useState(false);
  const {currentUser} = useAuth();
  const {favs, addFav, removeFav} = useFavs();
    
  const handleClickLike = () => {
    if(currentUser){
      const obj = {
        id,
        title,
        url
      }
      addFav(obj)
    } else {
      setToggleModal(true)  
    }
  }

  const handleClickDislike = () => {
    if(currentUser){
      removeFav(id)
    } else {
      setToggleModal(true)  
    }
  }

  return (
      <>
        <div className='Gif'>
          <Link to={`/detail/${id}`} className='Gif-link'>
            <img src={url} alt='Gif image' />
            <div className="Gif-hover">
              <div className="Gif-title">
                <p>{title}</p>
              </div>
            </div>
          </Link>
          <div className='Gif-buttons'>
            <p onClick={handleClickLike} className='Gif-buttons__like'>Like</p>
            <p onClick={handleClickDislike} className='Gif-buttons__dislike'>Dislike</p>
          </div>
        </div>
        {!!toggleModal && (
          <Modal>
            <LinkLogin onClose={setToggleModal} />
          </Modal>
        )}
      </>
    )
}

export default memo(Gif)
