import React from 'react'
import { Icon } from '@iconify/react';

export default function Footer() {
  return (
    <div className="card text-center">
    <div className="card-body" style={{ backgroundColor: '#1a1a1a',color: 'white' }}>
      <h3 className="card-title" >Fitt Era</h3>
      <p className="card-text" >
        Follow Us on </p>
     <span style={{marginRight:'1%'}}><Icon icon="skill-icons:instagram" /></span> 
     <span style={{marginRight:'1%'}}><Icon icon="logos:facebook" /></span>
      <span style={{marginRight:'1%'}}><Icon icon="skill-icons:linkedin" /></span>
    </div>
    <div className="card-footer text-body-secondary"  style={{ backgroundColor: 'black' }}>
    </div>
  </div>
  )
}
