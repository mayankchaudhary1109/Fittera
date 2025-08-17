import React from 'react';

export default function Iframe() {
  return (
    <div>
      <div className="row">
        <div className="col-md-6" style={{ padding: '40px 40px' }}>
          <h3>Gmail</h3>
          <p>ameynititn@gmail.com</p>
          <h3>Phone number</h3>
          <p>8600525512</p>
          <h3>Timing</h3>
          <p>7am-9pm</p>
          <h3>Location</h3>
          <p>Second Floor, ITI Rd, above Hotel Mainland China, near Sarjaa Hotel, Shambhu Vihar Society, Baner Chs, Aundh, Pune, Maharashtra 411007</p>
        </div>
        <div className="col-md-6">
          <div className="embed-responsive embed-responsive-16by9">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30256.862581004523!2d73.77463366870683!3d18.569177082139763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf0f32ed42c5%3A0x4bd1ba38faa3bdfa!2sFITTERA!5e0!3m2!1sen!2sin!4v1693939190405!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
