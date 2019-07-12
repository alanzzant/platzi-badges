import React from 'react'

import md5 from 'md5'

const Gravatar = props => {
  const hash = md5(props.email)
  
  return(
    <img
      className={props.className}
      src={`https://secure.gravatar.com/avatar/${hash}?d=identicon`}
      alt="Avatar"
    />
  )
}

export default Gravatar