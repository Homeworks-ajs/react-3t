import React from 'react'
import MessageHistory from './components/message-history/MessageHistory'
import { messages } from './data'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import './app.css'

library.add(faCircle)

function App() {
  return (
    <div className="container clearfix">
      <div className="chat">
        <div className="chat-history">
          <MessageHistory list={messages} />
        </div>
      </div>
    </div>
  )
}

export default App
