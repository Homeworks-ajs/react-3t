import React from 'react'
import PropTypes from 'prop-types'
import Price from '../price/Price'
import ItemQuantity from '../item-quantity/ItemQuantity'

function Card({ data }) {
  return (
    <div className="item">
      <div className="item-image">
        <a href={data.url}>
          <img src={data.MainImage.url_570xN} />
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{data.title.length >= 50 ? data.title.slice(0, 50) + "..." : data.title}</p>
        <Price currency_code={data.currency_code} price={data.price} />
        <ItemQuantity quantity={data.quantity} />
      </div>
    </div>
  )
}

Card.propTypes = {
  data: PropTypes.shape({
    listing_id: PropTypes.number,
    title: PropTypes.string,
    currency_code: PropTypes.string,
    MainImage: PropTypes.shape({
      url_570xN: PropTypes.string.isRequired
    }),
    url: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number
  })
}

export default Card
