import React from 'react'
import ReactDOM from 'react-dom'

import './styles/Modal.css'

const Modal = props => {
  if(!props.active) {
    return null
  }

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal__content">
        {props.children}
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal