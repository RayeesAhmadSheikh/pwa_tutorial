import React from 'react';
import './style.css'
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='About'>About</Link>
      <Link to='Contact'>Contact</Link>
      <Link to='ApiData'>ApiData</Link>
    </nav>
  );
}