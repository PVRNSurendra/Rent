import { Link } from 'react-router-dom';
import './Interface.css';
import React from 'react';

export default function Interface() {
  return (
    <>
      <header className="header-container">
        <div className="header-content">
          <h1 className="logo">House Rentals</h1>
          <nav className="navigation">
            <ul className="nav-links">
              <li><Link to="/" id='nav1'>Home</Link></li> 
              <li><Link to="/login" id='nav2'>Login</Link></li> 
            </ul>
          </nav>
        </div>
      </header>
      <br />
      <div style={{display:"flex",border:"2px white solid",padding:"10px",flexDirection:"column",top:"50px",position:"relative"}}>
      <div style={{display:"flex",padding:"20px",flexDirection:"column"}}>
          <img src="https://imagecdn.99acres.com/media1/25897/11/517951463M-1726380369010.jpg" alt="Img" style={{width:'300px',height:'180px',position:"relative",left:"150px"}}/>

          <p style={{textAlign:"center",position:"relative",top:"10px"}}>
          Sree Vallabha Gardens
          RESALE
          4 Bedroom House for sale in Tadikonda, Guntur
          </p>
          </div>
          <div style={{display:"flex",flexDirection:"row",marginRight:"50px"}}>
          <button style={{width:"150px",height:"50px",position:"relative",left:"150px"}}>View Number</button>
          <button style={{width:"80px",height:"50px",left:"250px",position:"relative"}}>Call</button>
          </div>

          
          <div style={{display:"flex",padding:"20px",flexDirection:"column"}}>
          <img src="https://imagecdn.99acres.com/media1/26278/6/525566729M-1729249083335.jpg" alt="Img" style={{width:'300px',height:'180px',position:"relative",left:"150px"}}/>

          <p style={{textAlign:"center",position:"relative",top:"10px"}}>
          3 Bedroom House for sale in Nallapadu, Guntur
          </p>
          </div>
          <div style={{display:"flex",flexDirection:"row",marginRight:"50px"}}>
          <button style={{width:"150px",height:"50px",position:"relative",left:"150px"}}>View Number</button>
          <button style={{width:"80px",height:"50px",left:"250px",position:"relative"}}>Call</button>
          </div>

          <div style={{display:"flex",padding:"20px",flexDirection:"column"}}>
          <img src="https://imagecdn.99acres.com/media1/23316/17/466337090M-1728431344154.jpg" alt="Img" style={{width:'300px',height:'180px',position:"relative",left:"150px"}}/>

          <p style={{textAlign:"center",position:"relative",top:"10px"}}>
          7 Bedroom House for sale in Nallapadu, Guntur
          </p>
          </div>
          <div style={{display:"flex",flexDirection:"row",marginRight:"50px"}}>
          <button style={{width:"150px",height:"50px",position:"relative",left:"150px"}}>View Number</button>
          <button style={{width:"80px",height:"50px",left:"250px",position:"relative"}}>Call</button>
          </div>
      </div>


    </>
  );
}
