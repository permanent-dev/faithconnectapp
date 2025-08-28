import { ScrollTrigger, SplitText } from "gsap/all"
import gsap from "gsap"
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
import Dashbooks from './pages/Dashbooks'


gsap.registerPlugin( ScrollTrigger, SplitText);

function App() {

  return (

    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Onboarding />} />
        <Route path='/podcast' element={<Podcast />} />
        <Route path="/books" element={<Book />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="blog" element={<Blog />} />
        <Route path='dashboard/home' element={<Dashboard />} />
        <Route path="dashboard/podcast" element={<Dashpodcast />} />
        <Route path="dashboard/book" element={<Dashbooks />} />


      </Routes>
    </Router >

  );
};

export default App
