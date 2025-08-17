import React from 'react';
import Image from './pics/akash2.jpg'
import Image1 from './pics/fittera0.png'

export default function AboutUs() {
  return (
    <div>
       <div className="row my-4" style={{ backgroundColor: '#1a1a1a', color: 'white' }}>
        <div className="col-md-6 d-flex align-items-center" style={{ padding: '50px' }}>
          <div>
            <h1>FITTERA</h1>
            <p>FITTERA is the boxing gym and  sole boxing fitness gym located in close proximity to Aundh and Baner.</p>
            <p>FITTERA's primary objective is to engage individuals of all generations in fitness activities, encompassing a wide range of disciplines such as ground training, yoga, meditation, self-defense, bodyweight training, strength training, and instilling a strong determination to combat various challenges.</p>
            <p>The trainers at FITTERA are not only highly experienced but also distinguished players in the Indian boxing industry.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="embed-responsive embed-responsive-16by9">
            <img src={Image1} alt="FittEra" className="img-fluid w-100" />
          </div>

        </div>
      </div>
    </div>
  );
}
