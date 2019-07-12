import React from 'react'

import './styles/MiniLoading.css'
import icon from '../res/Dots.svg'

const MiniLoading = () => (
  <div className="MiniLoading">
    <img src={icon} alt="Loading..."/>
  </div>
)

export default MiniLoading