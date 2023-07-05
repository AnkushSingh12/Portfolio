import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // <div >
        // <div className="container-fluid col-lg-12" style={{backgroundColor:"#212529"}}>
          <div className="container-fluid" style={{display:"flex", flexDirection:"row", marginTop:"5px", padding:"15px",backgroundColor:"#212529"}}>
            <div className="col-lg-3">
              <h5 style={{color:"white", fontSize:"15px"}}>ANKITA</h5>
              <p style={{color:"white", wordWrap:"break-word",fontSize:"15px"}}>Self-independent, reliable and firendly individual who works hard
                to achieve her goals. Adaptable quickly and oragnized well, interested in learning the latest web and software 
                technologies quickly. Able to work in teams as well as individually . My future goal is to 
                become a senior full-stack developer.</p>
            </div>
            <div className="col-lg-5" style={{display:"flex", flexDirection:"column", alignItems:"center", color:"white"}}>
              <h5>EXPLORE</h5>
              <ul>
                <li style={{listStyleType:"none"}}><Link style={{color:"white", textDecoration:"none"}} to="/">Home</Link></li>
                <li style={{listStyleType:"none"}}><Link style={{color:"white", textDecoration:"none"}} to="/about">About</Link></li>
                <li style={{listStyleType:"none"}}><Link style={{color:"white", textDecoration:"none"}} to="/Portfolio">Portfolio</Link></li>
                <li style={{listStyleType:"none"}}><Link style={{color:"white", textDecoration:"none"}} to="/Contact">Contact</Link></li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h5 style={{color:"white"}}>Contact me</h5>
              <br />
              <input style={{padding:"5px", width:"90%",borderRadius:"5px",border:"2px solid white", float:"right"}} type="email" id="email" name="email" placeholder="email address"></input>
            </div>
          </div>

          

        // </div>
    // </div>
  )
}

export default Footer
