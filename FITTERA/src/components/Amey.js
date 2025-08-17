import React from 'react';
import Image from './pics/ameywall.jpg';

export default function Iframe() {
  return (
    <div>
      <div className="row my-4" style={{ backgroundColor: '#1a1a1a', color: 'white' }}>
        <div className="col-md-6 d-flex align-items-center" style={{ padding: '50px' }}>
          <div>
            <h1>Amey Nitin Kalambe</h1>
            <p>Amey Nitin Kalambe is the founder of FITTERA.</p>
            <p>He is not only a national medalist but also an international professional boxer.</p>
            <p>Amey holds the distinction of being the sole player from Maharashtra to compete in the World Boxing Council India title.</p>
            <p>In 2021, he received the prestigious title of the Best Sportsman of Pune.</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="embed-responsive embed-responsive-16by9">
            <img src={Image} alt="Amey Nitin Kalambe" className="img-fluid"  />
          </div>
        </div>
      </div>
    </div>
  );
}
