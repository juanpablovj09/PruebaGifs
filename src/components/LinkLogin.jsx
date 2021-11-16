import React from 'react'
import '@styles/components/Link.scss'
import {Link} from 'wouter'

const LinkLogin = ({onClose}) => {
  return (
    <div className="Link">
      <p className='Link-esc' onClick={() => onClose(false)}>X</p>
      <p>Para agregar o eliminar favoritos primero tienes que registrarte o iniciar sesión:</p>
      <Link to='/login'>
        <button>Clickea aquí</button>
      </Link>
    </div>
  )
}

export default LinkLogin
