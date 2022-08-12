import React from 'react'
import PropTypes from 'prop-types'
import Card from '../card/Card'


function Listing({items}) {
  return (
    <div className="item-list">
      {items.map(el => <Card data={el} key={el.listing_id}/>)}
    </div>
  )
}

Listing.defaultProps = {
  items: []
}

Listing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any)
}

export default Listing
