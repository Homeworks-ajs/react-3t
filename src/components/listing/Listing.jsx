import React from 'react'
import PropTypes from 'prop-types'
import Card from '../card/Card'
import {data} from './products'

function Listing() {
  return (
    <div class="item-list">
      {data.map(el => <Card data={el}/>)}
    </div>
  )
}

export default Listing
