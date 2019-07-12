import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import api from '../api'
import BadgeList from '../components/BadgeList'
import Loading from '../components/Loading'
import MiniLoading from '../components/MiniLoading'
import Error from '../components/Error'
import DeleteBadgeModal from '../components/DeleteBadgeModal'

import './styles/Badges.css'
import logo from '../res/badge-header.svg'

class Badges extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      error: null,
      data: undefined,
      badgeHover: {
        id: "",
        name: ""
      },
      modalActive: false
    }
  }

  // fetchData = async() => {
  //   this.setState({
  //     loading: true,
  //     error: null
  //   })

  //   try {
  //     const data = await api.badges.list()
  //     this.setState({
  //       loading: false,
  //       data
  //     })
  //   } catch(error) {
  //     this.setState({
  //       loading: false,
  //       error
  //     })
  //   }
  // }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleDeleteBadge = async e => {
    this.handleCloseModal()
    e.preventDefault()
    this.setState({
      error: null
    })

    try {
      await api.badges.remove(this.state.badgeHover.id)
      this.fetchData()
    } catch(error) {
      this.setState({
        error
      })
    }
  }

  handleCloseModal = e => {
    this.setState({
      modalActive: false
    })
  }

  handleOpenModal = e => {
    this.setState({
      badgeHover: {
        id: e.target.id,
        name: e.target.name
      },
      modalActive: true
    })
  }

  componentDidMount() {
    this.fetchData()

    this.intervalId = setInterval(this.fetchData, 4000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    if(this.state.loading && !this.state.data) {
      return <Loading />
    }

    if(this.state.error) {
      return <Error error={this.state.error} />
    }

    return(
      <React.Fragment>
        <div className="Badges__hero">
          <div className="Badges__hero-container">
            <img
              className="Badges__logo"
              src={logo}
              alt="Logo"
            />
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            {this.state.loading &&
              <MiniLoading />
            }
            <Link to="/badges/new" className="btn btn-primary">New badge</Link>
          </div>

          <BadgeList badges={this.state.data} handleDeleteBadge={this.handleOpenModal} />
        </div>
        <DeleteBadgeModal
          badge={this.state.badgeHover}
          active={this.state.modalActive}
          onCloseModal={this.handleCloseModal}
          onDeleteBadge={this.handleDeleteBadge}
          reload={this.fetchData}
        />
      </React.Fragment>
    )
  }
}

export default Badges