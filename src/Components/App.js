import React from 'react'
import '../Styles/App.css'
import Intro from './Intro'
import Profile from './Profile'

function App() {
  return (
    <div className="mainContainer">
      <Intro />
      <Profile />
    </div>
  )
}

export default App