import React from 'react'
import Image from '../pics/gallery.jpg'
import Image1 from '../pics/gallery1.jpg'
import Image2 from '../pics/gallery2.jpg'
import Image3 from '../pics/gallery3.jpg'
import Image4 from '../pics/gallery4.jpg'
import Image5 from '../pics/gallery5.jpg'

export default function Gallery() {
  return (
    <div className="col-sm-12 mt-4 mb-4" style={{backgroundColor:'black'}}>
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
