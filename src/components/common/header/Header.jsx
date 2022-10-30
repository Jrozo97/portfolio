import React from 'react'

export const Header = () => {
  return (
    <header className='navbar'>
      <nav className='nav-container '>
        <img className='nav-logo' src='https://firebasestorage.googleapis.com/v0/b/portfolio-c9c55.appspot.com/o/logo.png?alt=media&token=7641b68f-7199-405a-893a-24eebd4b4b9b' alt='logo'/>
        <ul className='nav-menu '>
          <li className='nav-item'>
            <p className='nav-item-text'>Home</p>
          </li>
          <li className='nav-item'>
            <p className='nav-item-text'>About</p>
          </li>
          <li className='nav-item'>
            <p className='nav-item-text'>Projects</p>
          </li>
          <li className='nav-item'>
            <p className='nav-item-text'>Skills</p>
          </li> 
          <li className='nav-item'>
            <p className='nav-item-text'>Contact</p>
          </li> 
        </ul>
      </nav>
    </header>
  )
}
