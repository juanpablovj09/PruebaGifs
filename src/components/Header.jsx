import React, { useState } from 'react'
import '@styles/components/Header.scss'
import {Link} from 'wouter'
import { AiOutlineMenu } from 'react-icons/ai';
import Menu from '@components/Menu';
import {useLocation} from 'wouter';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [path, pushLocation] = useLocation();
  const { currentUser, logout } = useAuth();

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
      <div className='Header-login' >
        {currentUser ? 
          <>
            <p className='Header-login__email'>{currentUser.email}</p>
            <p onClick={() => logout()} className='Header-login__logout'>Logout</p> 
          </>
          :
          <>
            <p onClick={() => pushLocation('/login')} className='Header-login__login'>Login</p>
          </> 
        }
      </div>
    </div>
  )
}

export { Header }
