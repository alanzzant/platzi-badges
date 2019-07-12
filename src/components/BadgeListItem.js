import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import Gravatar from './Gravatar'

import './styles/BadgeListItem.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class BadgeListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {toolsClass: ""}
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
  } 

  handleMouseOver(e) {
    this.setState({
      toolsClass: "active"
    })
  }

  handleMouseOut(e) {
    this.setState({
      toolsClass: ""
    })
  }

  render() {
    return(
      <div className="BadgeListItem__box" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        <Link to={`/badges/${this.props.badge.id}`} className="BadgeListItem__content link-unstyled">
          <Gravatar
            className="BadgeListItem__avatar"
            email={this.props.badge.email}
          />
          <div className="BadgeListItem__info">
            <h2 className="BadgeListItem__name">{this.props.badge.firstName} {this.props.badge.lastName}</h2>
            <span className="BadgeListItem__twitter">
              <FontAwesomeIcon
                className="icon"
                icon={['fab', 'twitter']}
              />
              @{this.props.badge.twitter}
            </span>
            <span className="BadgeListItem__jobTitle">{this.props.badge.jobTitle}</span>
          </div>
        </Link>
        <div className={`BadgeListItem__tools ${this.state.toolsClass}`}>
          <Link to={`/badges/${this.props.badge.id}/edit`} className="btn btn-warning">
            <FontAwesomeIcon icon="pencil-alt" />
          </Link>
          <button
            className="btn btn-danger"
            name={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
            id={this.props.badge.id}
            onClick={this.props.handleDeleteBadge}>
            <FontAwesomeIcon icon="trash" />
          </button>
        </div>
      </div>
    )
  }
}

export default BadgeListItem