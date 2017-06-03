import React, { Component } from 'react'
import { FormattedMessage } from 'react-intl';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
import zh from 'react-intl/locale-data/zh';

addLocaleData([...en, ...fr, ...zh]);
const messages = {
  zh: {
    welcome: '你好',
    join: 'By joining, I agree to Mozilla Webmaker’s {code}',
  }
};

const name = 'Eric';
const unreadCount = 1000;

class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'en',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }
  render() {
    const { value } = this.state;
    return (
      <div>
        <p>Hello React Hot Loader!</p>
        <select name="" id="" onChange={this.handleChange}>
          <option value="en">en</option>
          <option value="zh">zh</option>
        </select>
        <IntlProvider
          locale={value}
          messages={messages[value]}
        >
          <FormattedMessage
              id="welcome"
              defaultMessage={`Hello {name}, you have {unreadCount, number} {unreadCount, plural,
                one {message}
                other {messages}
              }`}
              values={{
                name: <code>{name}</code>,
                unreadCount
              }}
          />
        </IntlProvider>
      </div>
    );
  }
}

export default Root;
