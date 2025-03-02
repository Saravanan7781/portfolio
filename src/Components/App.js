import React from 'react'
import '../Styles/App.css'
import Intro from './Intro'
import Profile from './Profile'
import PercentageOfStack from './PercentageOfStack'
import ProjectContainer from './ProjectContainer'
import Achievements from './Achievements'
import Contact from './Contact'
import Entry from './Entry'

function App() {
  return (
    <div className="mainContainer">
      {/* <Intro /> */}
      <Entry /> 
      <Profile />
      <PercentageOfStack />
      <ProjectContainer />
      <Achievements />
      <Contact />
    </div>
  )
}

export default App