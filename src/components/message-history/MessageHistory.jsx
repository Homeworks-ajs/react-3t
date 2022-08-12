import React from 'react'
import PropTypes from 'prop-types'
import Message from '../message/Message'
import Response from '../response/Response';
import Typing from '../typing/Typing';

function MessageHistory({list}) {
  return list.map( msg => {
    switch (msg.type) {
      case "message":
        return <Message key={msg.id} from={msg.from.name} time={msg.time} text={msg.text}/>;
      case "response": 
        return <Response key={msg.id} from={msg.from.name} time={msg.time} text={msg.text}/>;
      case "typing": 
        return <Typing key={msg.id} from={msg.from.name}/>
    }
  })
}

MessageHistory.defaultProps = {
  list: []
}

MessageHistory.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    from: PropTypes.shape({name: PropTypes.string.isRequired}),
    type: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    text: PropTypes.string
  }))
}

export default MessageHistory
