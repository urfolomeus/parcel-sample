require('react-hot-loader/patch')
import React from 'react'
import * as ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Application from './Application'

import './assets/stylesheets/global.css'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.querySelector('.root')
  )
}

render(Application)
