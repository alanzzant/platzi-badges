import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import NewBadge from '../pages/NewBadge'
import EditBadge from '../pages/EditBadge'
import Badges from '../pages/Badges'
import DetailedBadge from '../pages/DetailedBadge'
import NotFound from '../pages/NotFound'
import Home from '../pages/Home'
import Layout from '../components/Layout'

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/badges" component={Badges} />
        <Route exact path="/badges/new" component={NewBadge} />
        <Route exact path="/badges/:badgeId" component={DetailedBadge} />
        <Route exact path="/badges/:badgeId/edit" component={EditBadge} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App