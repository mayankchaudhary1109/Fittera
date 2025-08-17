import React from 'react'
import Image from './pics/logo.png'
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light px-4" style={{backgroundColor:'transparent', position:'fixed',width: "100%",zIndex: "1000",border:'0px solid black'}} >
  <img src={Image} style={{width:'15%'}}/>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" style={{marginLeft:'250px'}} id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
      < Link to="/" className="nav-link" style={{color:'white'}}>Home</Link> <span class="sr-only"></span>
      </li>
      <li class="nav-item">
      < Link to="image" className="nav-link" style={{color:'white'}}>Gallery</Link>
      </li>
      <li class="nav-item">
      < Link to="about" className="nav-link" style={{color:'white'}}>About Us</Link> <span class="sr-only"></span>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}
