import React from 'react'

import './styles/Error.css'

const Error = props => (
  <div className="Error">
    <h1>
      <span role="img" aria-label="jsx-ally/accesible-emoji">🚫</span>
      {props.error.message}
      <span className="warning-symbol">☣</span>
    </h1>
    <span role="img" aria-label="jsx-ally/accesible-emoji">Don't worry. It's not your fault. 👾</span>
  </div>
)

export default Error