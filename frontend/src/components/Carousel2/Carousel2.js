import React from 'react'
import "./Carousel2.css"
import carousel2img from '../../assests/carousel2img.svg'
import star from '../../assests/star.svg'
import halfstar from '../../assests/halfstar.svg'
import commas from '../../assests/commas.svg'
import CarouselCard from '../CarouselCard/CarouselCard' 
const Carousel2 = () => {
  return (
   <>
   <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel"style={{width:"100vw",height:"23rem"}}>
  <div className="carousel-inner" style={{width:"100%",height:"23rem"}}>
    <div className="carousel-item active" data-bs-interval="2000" style={{width:"100%",height:"23rem"}}>
        <CarouselCard/>
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

export default Carousel2
{/* <div className='carousel2Card d-flex  justify-content-center align-items-center flex-row' style={{width:"100%",height:"100%"}}>
<div className='leftContainer d-flex  justify-content-center align-items-center flex-column' style={{backgorund:"#FFDF05"}}>
    <div className='imgcontainer'>
<img src={star}></img>
    </div>
    <div className='namecontainer'>

    </div>
</div>
<div className='rightcontainer' style={{backgorund:"#005CFF"}}>

</div>
</div> */}