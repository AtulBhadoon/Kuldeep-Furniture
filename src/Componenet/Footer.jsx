import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="footer">
  <div className="container">
    <div className="row">
     
      <div className="col-md-4 mb-4">
        <h4 className="text-white">FurniStyle</h4>
        <p>Designing homes with elegance and comfort. High-quality furniture for modern living.</p>
       
      </div>

      
      <div className="col-md-4 mb-4">
        <h5 className="text-white">Quick Links</h5>
        <ul className="list-unstyled">
          <li><a href="/bed">Bed&Almari</a></li>
        
          <li><a href="/door">Door&Window</a></li>
         
          <li><a href="/steel">Steel-Railing&Gliging-Pateson</a></li>
         
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

     
      <div class="col-md-4 mb-4">
        <h5 class="text-white">Owner by Vinod Jangid</h5>
        <p>Mobile-Number:+91-9610554227</p>
        <form>
          <div class="input-group">
            <input type="email" class="form-control newsletter-input" placeholder="Email Address" />
            <button class="btn btn-outline-light" type="submit">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
    <hr class="border-light" />
    <div class="text-center small">
      2025 FurniStyle. All rights reserved.
    </div>
  </div>
</footer>
      
    </div>
  )
}

export default Footer
