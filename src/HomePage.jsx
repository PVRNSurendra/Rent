import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const HomePage = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate('/Interface');
  }

  return (
    <div className='main'>
      <header className="header">
        <div className="container">
          <h1 className="logo">House Rentals</h1>
          <nav className='navtags'>
            <ul className='listitems'>
              <li><a href="/">Home</a></li>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#contact-us">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className="hero-section">
        <div className="hero-content">
          <div className="home-container">
            <h1>Welcome to House Rentals</h1>
            <p>Browse through our catalog of dream homes!</p>
          </div>
          <h1 className="main-heading">Find Your Dream Home</h1>
          <p className="subheading">For comfort, convenience, and community</p>
        </div>

        <button id="btn1" onClick={handleClick}>Explore</button>
      </div>
    </div>
  );
};

export default HomePage;
