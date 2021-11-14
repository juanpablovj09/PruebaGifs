import React from 'react'
import '@styles/components/Menu.scss'
import Trending from '@components/Trending/index';

const Menu = ({close}) => {
  const handleClick = () => {
    close(false)
  }

  return (
    <div className='Menu'>
      <div className='Menu-exit' onClick={handleClick} title='Esc'>X</div>
      <Trending close={close}/>
    </div>
  )
}

export default Menu
