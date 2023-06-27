import React from 'react';
import Navigation from '../Navigation';
import Title from '../Title';
import "../../styles/header.scss"

function Header() {
  return (
    <header className='header'>
      <Title />   
      <Navigation /> 
    </header>
  );
}

export default Header;