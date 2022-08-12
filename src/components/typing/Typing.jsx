import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Typing({ from }) {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <FontAwesomeIcon icon="fa-solid fa-circle" style={{color: "#94C2ED"}}/>{from}</span>
      </div>
    </li>
  )
}

Typing.propTypes = {
  from: PropTypes.string.isRequired,
}

export default Typing
