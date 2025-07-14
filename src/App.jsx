import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from './pages/Register'
import './App.css'
import './index.css'
import Login from './pages/login'
import Onboarding from './pages/Onboarding'
import Podcast from './pages/Podcast'
import Aboutus from './pages/Aboutus'
import { Blog } from './pages/Blog'
import Book from './pages/Book'
import Dashboard from './pages/Dashboard'
import Dashpodcast from './pages/Dashpodcast'

function App() {

  return (

    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Onboarding />} />
        <Route path='/podcast' element={<Podcast />} />
        <Route path="/books" element={<Book />}></Route>
        <Route path="aboutus" element={<Aboutus />}></Route >
        <Route path="blog" element={<Blog />}></Route>
        <Route path='dashboard/home' element={<Dashboard />}></Route>
        <Route path="dashboard/podcast" element={<Dashpodcast />}></Route>


      </Routes>
    </Router >

  );
};

export default App
