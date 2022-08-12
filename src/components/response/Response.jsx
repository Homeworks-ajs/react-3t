import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Response({ text, from, time }) {
  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-time">{time}</span> &nbsp; &nbsp;
        <span className="message-data-name">{from}</span>
        <FontAwesomeIcon icon="fa-solid fa-circle" style={{color: "#86BB71"}}/>
      </div>
      <div className="message other-message float-right">
        {text}
      </div>
    </li>

  )
}

Response.propTypes = {
  text: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
}

export default Response
