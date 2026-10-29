import React from 'react'
import '../Styles/App.css'
import Navbar from './Navbar'
import Entry from './Entry'
import Profile from './Profile'
import PercentageOfStack from './PercentageOfStack'
import Experience from './Experience'
import ProjectContainer from './ProjectContainer'
import Achievements from './Achievements'
import Contact from './Contact'
import Footer from './Footer'
import Chatbot from './Chatbot'
import NeuralBackground from './NeuralBackground'
import SectionRail from './SectionRail'
import '../Styles/Neural.css'

function App() {
  return (
    <>
      <NeuralBackground />
      <Navbar />
      <SectionRail />
      <main className="mainContainer">
        <Entry />
        <Profile />
        <PercentageOfStack />
        <Experience />
        <ProjectContainer />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}

export default App
