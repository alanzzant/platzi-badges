import React, {Component} from 'react'

import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import Loading from '../components/Loading'
import api from '../api'

import './styles/EditBadge.css'
import logo from '../res/platziconf-logo.svg'

class EditBadge extends Component {
  state = {
    loading: true,
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

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async e => {
    this.setState({
      loading: true,
      error: null
    })

    try {
      const data = await api.badges.read(
        this.props.match.params.badgeId
      )
      this.setState({
        loading: false,
        form: data
      })
    } catch(error) {
      this.setState({
        loading: false,
        error
      })
    }
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({loading: true, error: null})

    try {
      await api.badges.update(this.props.match.params.badgeId, this.state.form)
      this.setState({loading: false})

      this.props.history.push('/badges')
    } catch(error) {
      this.setState({loading: false, error})
    }
  }

  render() {
    if(this.state.loading) {
      return <Loading />
    }

    return (
      <React.Fragment>
        <div className="EditBadge__hero">
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
              <h1>Edit attendant</h1>
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

export default EditBadge