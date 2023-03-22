import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Add from './pages/add/Add'
import Gig from './pages/gig/Gig'
import Gigs from './pages/gigs/Gigs'
import Home from './pages/home/Home'
import Message from './pages/message/Message'
import Messages from './pages/messages/Messages'
import MyGigs from './pages/myGigs/MyGigs'
import Orders from './pages/orders/Orders'

import './App.scss'
import About from './pages/about/about'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='add' element={<Add />} />
          <Route path='orders' element={<Orders />} />
          <Route path='gigs' element={<Gigs />} />
          <Route path='mygigs' element={<MyGigs />} />
          <Route path='messages' element={<Messages />} />
          <Route path='about-us' element={<About />} />

          <Route path='message' >
            <Route path=':id' element={<Message />} />
          </Route>

          <Route path='gig'>
            <Route  path=':id' element={<Gig />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
