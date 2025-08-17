import React from 'react'
import Image from '../pics/gallery.jpg'
import Image1 from '../pics/gallery1.jpg'
import Image2 from '../pics/gallery2.jpg'
import Image3 from '../pics/gallery3.jpg'
import Image4 from '../pics/gallery4.jpg'
import Image5 from '../pics/gallery5.jpg'

export default function Gallery() {
  return (
    
    <div className="col-sm-12 " style={{backgroundColor:'black'}}>
         <div id="carouselExampleAutoplaying" class="carousel slide"  data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active ">
        <img src={Image1} class="img1 d-block" alt="bartender" style={{width:'100%',height:'700px',margin:'auto'}}/>
      </div>
      <div class="carousel-item">
        <img src={Image2} class="img2 d-block " alt="bartender" style={{width:'100%',height:'800px'}}/>
      </div>
      <div class="carousel-item">
        <img src={Image3} class="img3 d-block" alt="bartender" style={{width:'100%',height:'800px'}}/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

    <div className="col-md-11 mx-auto d-flex flex-wrap justify-content-between mt-4 mb-4">
        <div className="col-md-4 mx-auto mb-3">
            <div className="col-sm-11 mx-auto">
                <img className="pic1 img-fluid" src={Image} alt="boxing" style={{width:'100%',height:'300px'}} />
                <div className="col-sm-12">
               
                </div>
            </div>
        </div>
        <div className="col-md-4 mx-auto mb-3">
            <div className="col-sm-11 mx-auto">
                <img className="pic1 img-fluid" src={Image1} alt="White Wine" style={{width:'100%',height:'300px'}} />
                <div className="col-sm-12">
                  
                </div>
            </div>
        </div>
        <div className="col-md-4 mx-auto mb-3">
            <div className="col-sm-11 mx-auto">
                <img className="pic1 img-fluid" src={Image2} alt="Shots" style={{width:'100%',height:'300px'}} />
                <div className="col-sm-12">
                   
                </div>
            </div>
        </div>
    </div>
    <div className="col-md-11 mx-auto d-flex flex-wrap justify-content-between mt-4 mb-4">
        <div className="col-md-4 mx-auto mb-3">
            <div className="col-sm-11 mx-auto">
                <img className="pic1 img-fluid" src={Image3} alt="boxing" style={{width:'100%',height:'300px'}} />
                <div className="col-sm-12">
               
                </div>
            </div>
        </div>
        <div className="col-md-4 mx-auto mb-3">
            <div className="col-sm-11 mx-auto">
                <img className="pic1 img-fluid" src={Image4} alt="White Wine" style={{width:'100%',height:'300px'}} />
                <div className="col-sm-12">
                  
                </div>
            </div>
        </div>
        <div className="col-md-4 mx-auto mb-3">
            <div className="col-sm-11 mx-auto">
                <img className="pic1 img-fluid" src={Image5} alt="Shots" style={{width:'100%',height:'300px'}} />
                <div className="col-sm-12">
                   
                </div>
            </div>
        </div>
    </div>
    
    </div>
  )
}



