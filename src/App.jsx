import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/Homepage'
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom'
import Projectspage from './pages/Projectspage'
import Nav2 from './components/Nav2'
import Projects from './components/Projects'
import ScrollToTop from './components/ScrollToTop'
import ProjectDetailsPage from './pages/ProjectDetailsPage'

function App() {
  

  return (
    <>
      <Router>
    <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/projects' element={<Projectspage/>}/>
          <Route path='/projects/:id' element={<ProjectDetailsPage/>}/>
        </Routes>
      </Router>
      
      
    </>
  )
}

export default App
