import React from 'react'
import Nav from './Navigation'
import '../styles/Header.css'
import logo from '../images/logo.jpg'



export default function Header() {
  return (
    <header className="header">
      <div className="container"></div>
      <nav>
        <img src={logo} className="logo-image" id="header-img" />
        <Nav />
      </nav>
    </header>




  )

}

