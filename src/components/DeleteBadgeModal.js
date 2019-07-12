import React from 'react'

import Modal from './Modal'

import './styles/DeleteBadgeModal.css'

const DeleteBadgeModal = props => {
  return(
    <Modal active={props.active} onCloseModal={props.onCloseModal} reload={props.reload}>
      <h1>Are you sure you want to delete {props.badge.name}'s badge?</h1>
      <div className="Modal__buttons">
        <button
          className="btn btn-primary"
          onClick={props.onCloseModal}
        >Cancel</button>
        <button
          className="btn btn-danger"
          id={props.badge.id}
          onClick={props.onDeleteBadge}
        >Yes</button>
      </div>
    </Modal>
  )
}

export default DeleteBadgeModal