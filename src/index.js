import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { IntlProvider } from 'react-intl';

import Root from './containers/Root'

const render = Component => {
  ReactDOM.render(
    <IntlProvider locale="en">
      <AppContainer>
        <Component />
      </AppContainer>
    </IntlProvider>,
    document.getElementById('root')
  )
}

render(Root)

if (module.hot) {
  module.hot.accept('./containers/Root', () => { render(Root) })
}
