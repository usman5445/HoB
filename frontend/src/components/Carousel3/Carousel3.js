import React from 'react'

const Carousel3 = () => {
  return (
    <>
   <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel"style={{width:"100vw",height:"23rem"}}>
  <div className="carousel-inner" style={{width:"100%",height:"23rem"}}>
    <div className="carousel-item active" data-bs-interval="2000" style={{width:"100%",height:"23rem"}}>
        
    </div>
    <div className="carousel-item" data-bs-interval="2000">
        <CarouselCard/>
     
    </div>
    <div className="carousel-item"data-bs-interval="2000">
        <CarouselCard/>
     
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   </>
  )
}
  

export default Carousel3
