import React from 'react'
import image1 from './pics/back.jpeg'
import image2 from './pics/redgloves.jpg'
import image3 from './pics/girlboxingface.jpg'

export default function Upperbody() {
  return (
    <div className="col-sm-12 mt-4 mb-4">
    <div className="col-md-11 mx-auto d-flex flex-wrap justify-content-between mt-4 mb-4">
        <div className="col-md-4 mx-auto mb-3">
            <div className="col-sm-11 mx-auto">
                <img className="pic1 img-fluid" src={image1} alt="boxing" style={{width:'100%',height:'300px'}} />
                <div className="col-sm-12">
                    <h3 style={{textAlign:'center'}}>Strength training</h3>
                </div>
            </div>
        </div>
        <div className="col-md-4 mx-auto mb-3">
            <div className="col-sm-11 mx-auto">
                <img className="pic1 img-fluid" src={image2} alt="White Wine" style={{width:'100%',height:'300px'}} />
                <div className="col-sm-12">
                    <h3 style={{textAlign:'center'}}>Boxing Training</h3>
                </div>
            </div>
        </div>
        <div className="col-md-4 mx-auto mb-3">
            <div className="col-sm-11 mx-auto">
                <img className="pic1 img-fluid" src={image3} alt="Shots" style={{width:'100%',height:'300px'}} />
                <div className="col-sm-12">
                    <h3 style={{textAlign:'center'}}>Functional Training</h3>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
