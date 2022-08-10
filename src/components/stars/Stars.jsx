import React from 'react'
import PropTypes from 'prop-types'
import Star from '../star/Star';
import './stars.css';

function Stars({ count }) {
  const arrayStars = [];

  for (let i = 0; i < (Number(count <= 5 && count >= 0) && count); i++) {
    arrayStars.push(<Star key={i}/>)
  }
  return <ul className="card-body-stars u-clearfix">{arrayStars}</ul>
}

Stars.defaultProps = {
  count: 0
}

Stars.propTypes = {
  count: PropTypes.number
}

export default Stars
