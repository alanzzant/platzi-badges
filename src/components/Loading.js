import React from 'react'

import './styles/Loading.css'
import icon from '../res/Pendulum.svg'

const Loading = () => (
  <div className="Loading">
    <img src={icon} alt="Loading..."/>
  </div>
)

export default Loading