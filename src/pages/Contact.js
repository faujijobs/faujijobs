import React from 'react'
import '../styles/contact.css'
import Image1 from '../assets/collage/header.jpg'
import {BsTelephoneFill} from 'react-icons/bs'
import {MdLocationPin, MdEmail} from 'react-icons/md'
function Contact() {
  console.log('Contact Page')
  return (
    <>
        <div className='row'>
          <div className='col-lg-6 contact-first-section'>
              <img src={Image1} className='img-fluid' style={{height: '90vh'}} alt="contact" />
              <div className='img-cover' />
          </div>
          <div className='col-lg-6 contact-second-section'>
              <h1 className='contact-heading'>Contact Us</h1>
              <div className='contact-sec'>
                <h5 className='contact-icon'> <BsTelephoneFill /> </h5>
                <h5 className='contact-detail'>+91 - 9816772326</h5>
              </div>
              <div className='contact-sec'>
                <h5 className='contact-icon'> <MdLocationPin /> </h5>
                <h5 className='contact-detail'>Lorem Ipsum, India</h5>
              </div>
              <div className='contact-sec'>
                <h5 className='contact-icon'> <MdEmail /> </h5>
                <h5 className='contact-detail'>exfaujijob@gmail.com</h5>
              </div>
              <br />
              <br />
              <iframe src="//maps.google.com/maps?q=53.3381768,-6.2613077&z=15&output=embed" 
              height="50%" 
              width="100%" 
              title='map'
              
              >

              </iframe>
          </div>
          
        </div>
    </>
  )
}

export default Contact