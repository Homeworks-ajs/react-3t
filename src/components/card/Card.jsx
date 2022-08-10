import React from 'react'
import PropTypes from 'prop-types'

function Card(props) {
  return (
    <div className="item">
      <div className="item-image">
        <a href="https://www.etsy.com/listing/292754135/woodland-fairy">
          <img src="https://img1.etsystatic.com/156/0/12814579/il_570xN.1173240751_50hv.jpg" />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">Woodland Fairy</p>
        <p className="item-price">$3.99</p>
        <p className="item-quantity level-medium">12 left</p>
      </div>
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.shape({
    listing_id: PropTypes.number,
    title: PropTypes.string,
    currency_code: PropTypes.string,
    MainImage: PropTypes.any,
    url: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number
  })
}

export default Card
