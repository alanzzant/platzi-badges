import React from 'react'
import {Link} from 'react-router-dom'

import './styles/Navbar.css'

import logo from '../res/logo.svg'

const Navbar = () => (
  <div className="Navbar">
      <div className="container-fluid">
        <Link className="Navbar__brand" to="/">
          <img className="Navbar__logo" src={logo} alt="Logo"/>
          <span className="font-weight-light">Platzi</span>
          <span className="font-weight-bold">Conf</span>
        </Link>
      </div>
    </div>
)

export default Navbar