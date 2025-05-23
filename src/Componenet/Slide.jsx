import React from 'react'

function Slide() {
  return (
    <div >
        <div id="carouselExampleAutoplaying" className="carousel slide first-slider " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="public/slide-1.webp" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="public/slide-2.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="public/slide-3.jpeg" className="d-block w-100" alt="..."/>
    </div>
     <div className="carousel-item">
      <img src="public/slide-4.jpeg" className="d-block w-100" alt="..."/>
    </div>
     <div className="carousel-item">
      <img src="public/slide-5.jpeg" className="d-block w-100" alt="..."/>
    </div>
     <div className="carousel-item">
      <img src="public/slide-6.webp" className="d-block w-100" alt="..."/>
    </div>
     <div className="carousel-item">
      <img src="public/slide-7.jpeg" className="d-block w-100" alt="..."/>
    </div>
    
    <div class="carousel-item">
      <img src="public/myca-4.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="public/myca-5.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="public/myca-6.jpg" class="d-block w-100" alt="..."/>
    </div>
    
    <div class="carousel-item">
      <img src="public/myca-8.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="public/myca-9.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="public/myca-10.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="public/myca-11.jpg" class="d-block w-100" alt="..."/>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="video">
  <video autoPlay loop muted src="public/109087-683060438_small.mp4"></video>
</div>
</div>

  )
}

export default Slide
