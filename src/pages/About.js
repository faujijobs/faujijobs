import React from 'react'
import { data } from '../data/data'
import '../styles/about.css'
import AboutImage from  '../assets/icons/About.jpg'
function About() {
  return (
    <>
      <div className='container' style={{height: '90vh'}}>
        <div className='row' style={{height: '100%'}}>
          <div className='col-lg-6 about-content'>
              <h2 className='about-heading'>About Fauji Jobs</h2>
              <p className='about-para'> {data.aboutContent} </p>
          </div>
          <div className='col-lg-6 image-section'>
          <img src={AboutImage} className='img-fluid img-responsive about-image'  />
          </div>
        </div>
      </div>
    </>
  )
}

export default About