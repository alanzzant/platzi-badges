import React, {Component} from 'react'

import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import Loading from '../components/Loading'
import api from '../api'

import './styles/NewBadge.css'
import logo from '../res/platziconf-logo.svg'

class NewBadge extends Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: ''
    }
  }

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({
      loading: true,
      error: null
    })

    try {
      await api.badges.create(this.state.form)
      this.setState({
        loading: false
      })

      this.props.history.push('/badges')
    } catch(error) {
      this.setState({
        loading: false,
        error
      })
    }
  }

  render() {
    if(this.state.loading) {
      return <Loading />
    }

    return (
      <React.Fragment>
        <div className="NewBadge__hero">
          <img className="img-fluid" src={logo} alt="Logo"/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'FirstName'}
                lastName={this.state.form.lastName || 'LastName'}
                jobTitle={this.state.form.jobTitle || 'JobTitle'}
                twitter={this.state.form.twitter || 'Twitter'}
                email={this.state.form.email}
              />
            </div>
            <div className="col-6">
              <h1>New attendant</h1>
              <BadgeForm
                error={this.state.error}
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                form={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default NewBadge