import React from 'react'
import ReactDOM from 'react-dom'

import './global.css'
import 'bootstrap/dist/css/bootstrap.css'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faPencilAlt, faTrash} from '@fortawesome/free-solid-svg-icons'

import App from './components/App'

library.add(fab, faPencilAlt, faTrash)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
