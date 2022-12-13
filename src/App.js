import './App.css';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom'
import  Home  from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ApiData from './pages/ApiData';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="ApiData" element={<ApiData />} />
      </Routes>
    </>
  )

}

export default App;
