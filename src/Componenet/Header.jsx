import React from 'react'
import{ Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <header className="bg-light border-bottom  position-fixed w-100">
  <nav className="navbar navbar-expand-lg navbar-light container">
    <a className="navbar-brand logo" href="#">Kuldeep Furniture Work Shop</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/"className="nav-link active">Home</Link>
        
        </li>
        <li className="nav-item">
           <Link to="/bed"className="nav-link active">Bed&Almari</Link>
          
        </li>
      
        <li className="nav-item">
          <Link to="/door"className="nav-link active">Door&Window</Link>
          
        </li>
       
        <li className="nav-item">
          <Link to="/steel"className="nav-link active">Steel-Railing&Gliging-Pateson</Link>

          
        </li>
         <li className="nav-item">
          <Link to="/contact"className="nav-link active">Contact</Link>

          
        </li>
        

        
        
      </ul>
    </div>
  </nav>
</header>
      
    </div>
  )
}

export default Header
