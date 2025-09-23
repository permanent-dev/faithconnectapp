import { ScrollTrigger, SplitText, } from "gsap/all"
import gsap from "gsap"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react";
import './App.css'
import './index.css'
import Loading from "./pages/Loading";
const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/login'));
const Onboarding = lazy(() => import('./pages/Onboarding'));
const Podcast = lazy(() => import('./pages/Podcast'));
const Aboutus = lazy(() => import('./pages/Aboutus'));
const Blog = lazy(() => import('./pages/Blog'));
const Book = lazy(() => import('./pages/Book'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Dashpodcast = lazy(() => import('./pages/Dashpodcast'));
const Dashbooks = lazy(() => import('./pages/Dashbooks'));
const SignupForm = lazy(() => import('./pages/SIGN-UP'));
const Page = lazy(() => import('./pages/Page'));


gsap.registerPlugin(ScrollTrigger, SplitText,);






function App() {

  return (

    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/register" element={<SignupForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Onboarding />} />
          <Route path='/podcast' element={<Podcast />} />
          <Route path="/books" element={<Book />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/blog" element={<Blog />} />
          <Route path='/dashboard/home' element={<Dashboard />} />
          <Route path="/dashboard/podcast" element={<Dashpodcast />} />
          <Route path="/dashboard/book" element={<Dashbooks />} />
          <Route path='page' element={<Page />} />
        </Routes>
      </Suspense>
    </Router >

  );
};

export default App
