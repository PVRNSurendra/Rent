import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Interface from './Interface';
import Login from './Login'; 

function App() {
  return (
    <Router> 
      <Routes>
        <Route path="/" element={<HomePage />} ></Route>
        <Route path="/Interface" element={<Interface />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        {/* <Route path="/About" element={<About/>}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
