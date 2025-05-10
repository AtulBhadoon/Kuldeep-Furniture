import React from 'react'

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
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Bed">Bed&Almari</a>
        </li>
      
        <li className="nav-item">
          <a className="nav-link" href="/door">Door&Window</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link" href="/steel">Steel-Railing&Gliging-Pateson</a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
        

        
        
      </ul>
    </div>
  </nav>
</header>
      
    </div>
  )
}

export default Header
