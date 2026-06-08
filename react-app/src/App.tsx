import { useState } from 'react'
import './App.css'

function App() {
  const [messageInput, setMessageInput] = useState('')
  const [displayMessage, setDisplayMessage] = useState('Hello World')

  const handleDisplayMessage = () => {
    setDisplayMessage(messageInput)
  }

  return (
    <main className="app">
      <div className="card">
        <h1>Message Display</h1>

        <div className="form-group">
          <label htmlFor="message-input">Message to Display</label>
          <input
            id="message-input"
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Enter your message"
          />
        </div>

        <button type="button" className="btn-primary" onClick={handleDisplayMessage}>
          Display Message
        </button>

        <h2 className="display">{displayMessage}</h2>
      </div>
    </main>
  )
}

export default App
