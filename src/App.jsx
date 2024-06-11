import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import "./App.css"
import Skills from './components/Skills'
import PortFolio from './components/PortFolio'
import ContactMe from './components/ContactMe'


function App() {
  

  return (
    <div className='App'>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <PortFolio />
      <ContactMe />
      <Footer />
      
      
    </div>
  )
}

export default App
