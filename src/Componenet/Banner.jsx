import React from 'react'

function Banner() {
  return (
    <div>
     <section className="furniture-banner text-center ">
  <div className="banner-overlay">
    <div className="container">
      <h1 className="display-4 fw-bold">Modern Furniture Collection</h1>
      <p className="lead mb-4">Upgrade your home with stylish, comfortable, and affordable furniture.</p>
      <a href="#" className="btn btn-light btn-lg">Shop Now</a>
    </div>
  </div>
</section> 
<div className="video">
  <video  autoPlay loop muted src="public/11294-229221031_medium.mp4" ></video>
</div>
    </div>
  )
}

export default Banner
