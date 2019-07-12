import React from 'react'
import {Link} from 'react-router-dom'

import './styles/Home.css'
import astronauts from '../res/astronauts.svg'
import platziConf from '../res/platziconf-logo.svg'

const Home = () => (
  <div className="Home">
    <div className="Home__info">
      <img className="Home__platziConf" src={platziConf} alt="PlatziConf Logo"/>
      <h1>BADGES <br/>MANAGEMENT <br/>SYSTEM</h1>
      <Link className="btn btn-primary" to="/badges">Start</Link>
    </div>
    <img className="home__astronauts" src={astronauts} alt="Astronauts"/>
  </div>
)

export default Home