import React from 'react'

import Gravatar from './Gravatar'

import './styles/Badge.css'
import confLogo from '../res/badge-header.svg'

const Badge = props => (
    <div className="Badge">
      <div className="Badge__header">
        <img src={confLogo} alt="Logo" />
      </div>
      <div className="Badge__section-name">
        <Gravatar className="Badge__avatar" email={props.email} />
        <h1>{props.firstName} <br />{props.lastName}</h1>
      </div>
      <div className="Badge__section-info">
        <h3>{props.jobTitle}</h3>
        <span>@{props.twitter}</span>
      </div>
      <div className="Badge__footer">
        #platziconf
      </div>
    </div>
)

export default Badge