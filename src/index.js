import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import zh from 'react-intl/locale-data/zh';

import Root from './containers/Root'

addLocaleData([...en, ...fr, ...zh]);
const messages = {
  welcome: '你好',
  join: 'By joining, I agree to Mozilla Webmaker’s {code}',
}

const render = Component => {
  ReactDOM.render(
    <IntlProvider locale="zh" messages={messages}>
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
