import React from 'react'
import {data} from './products'
import Listing from './components/listing/Listing'

function App() {
  return (
    <Listing items={data} />
  )
}

export default App
