import React from 'react'
import PropTypes from 'prop-types'

function ItemQuantity({quantity}) {
  let quantityWarnColor = "high"; 
  if(quantity <= 10) {
    quantityWarnColor = "low"
  }

  if(quantity > 10 && quantity <= 20) {
    quantityWarnColor = "medium"
  }
  
  return (
    <p className={"item-quantity level-" + quantityWarnColor}>{quantity} left</p>
  )
}

ItemQuantity.propTypes = {
  quantity: PropTypes.number.isRequired
}

export default ItemQuantity
