import React from 'react'
import PropTypes from 'prop-types'

function Price({ price, currency_code }) {
  switch (currency_code) {
    case "EUR": return <p className="item-price">{`€ ${price}`}</p>;
    case "USD": return <p className="item-price">{`$ ${price}`}</p>;
    default: return <p className="item-price">{`${price} ${currency_code}`}</p>;
  }
}

Price.propTypes = {
  price: PropTypes.string.isRequired,
  currency_code: PropTypes.string.isRequired
}

export default Price
