import React from 'react'
import { FormattedMessage } from 'react-intl';

const name = 'Eric';
const unreadCount = 1000;

const Root = () => (
  <div>
    <p>Hello React Hot Loader!</p>
    <FormattedMessage
        id="welcome"
        defaultMessage={`Hello {name}, you have {unreadCount, number} {unreadCount, plural,
          one {message}
          other {messages}
        }`}
        values={{name: <b>{name}</b>, unreadCount}}
    />
  </div>
)

export default Root
