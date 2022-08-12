import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Message({ text, from, time }) {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name"><FontAwesomeIcon icon="fa-solid fa-circle" style={{color: "#94C2ED"}} />{from}</span>
        <span className="message-data-time">{time}</span>
      </div>
      <div className="message my-message">
        {text}
      </div>
    </li>
  )
}

Message.propTypes = {
  text: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}

export default Message
