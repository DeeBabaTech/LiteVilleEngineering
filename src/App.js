import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import Intro from './components/Intro'
import Profile from './components/Profile'
import Activities from './components/Activities'
import Maintenance from './components/Maintenance'
import Procurement from './components/Procurement'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Residential from './components/Residential'
import ProOne from './components/ProOne'
import ProTwo from './components/ProTwo'
import ProThree from './components/ProThree'
import ProFour from './components/ProFour'
import ProFive from './components/ProFive'
import ProSix from './components/ProSix'
import ProSeven from './components/ProSeven'
import ProEight from './components/ProEight'
import ProNine from './components/ProNine'

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/intro' element={<Intro />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/activities' element={<Activities />} />
          <Route path='/maintenance' element={<Maintenance />} />
          <Route path='/procurement' element={<Procurement />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/residential' element={<Residential />} />
          <Route path='/pro1' element={<ProOne />} />
          <Route path='/pro2' element={<ProTwo />} />
          <Route path='/pro3' element={<ProThree />} />
          <Route path='/pro4' element={<ProFour />} />
          <Route path='/pro5' element={<ProFive />} />
          <Route path='/pro6' element={<ProSix />} />
          <Route path='/pro7' element={<ProSeven />} />
          <Route path='/pro8' element={<ProEight />} />
          <Route path='/church' element={<ProNine />} />
          <Route path='/contact-us' element={<Contact />} />
        </Routes>
    </Router>
  )
}

export default App