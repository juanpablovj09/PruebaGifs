import React, { useState } from 'react'
import '@styles/components/Header.scss'
import {Link} from 'wouter'
import { AiOutlineMenu } from 'react-icons/ai';
import Menu from '@components/Menu';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(true)
  }

  return (
    <div className='Header'>
      { openMenu ?
          <Menu close={setOpenMenu} />
        :
        <AiOutlineMenu onClick={handleClick} className='Header-menu' size={28} title='Menu'/>
      }
      <Link to='/'>
        <h1>Gifphy</h1>
      </Link>
    </div>
  )
}

export { Header }
