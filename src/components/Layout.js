import React from 'react'

import Navbar from '../components/Navbar'

const Layout = props => (
  <React.Fragment>
    <Navbar />
    {props.children}
  </React.Fragment>
)

export default Layout