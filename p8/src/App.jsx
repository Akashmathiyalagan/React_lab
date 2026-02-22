import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('home')

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <p>Welcome to the Home tab!</p>
      case 'about':
        return <p>This is the About section. Learn more about us.</p>
      case 'contact':
        return <p>Reach us at contact@example.com.</p>
      default:
        return null
    }
  }

  return (
    <div className="tabs-container">
      <div className="tabs">
        <button
          className={activeTab === 'home' ? 'active' : ''}
          onClick={() => setActiveTab('home')}
        >
          Home
        </button>
        <button
          className={activeTab === 'about' ? 'active' : ''}
          onClick={() => setActiveTab('about')}
        >
          About
        </button>
        <button
          className={activeTab === 'contact' ? 'active' : ''}
          onClick={() => setActiveTab('contact')}
        >
          Contact
        </button>
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  )
}

export default App
