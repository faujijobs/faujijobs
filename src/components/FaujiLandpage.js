import React from 'react'
import '../styles/FaujiLandpage.css'
// import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Soldier from '../assets/icons/Soldier.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import { doc, getDoc, getFirestore } from "firebase/firestore";

function FaujiLandpage() {
  

  return (
    <>
      <div className='fauji-landpage'>
        <div className='landpage-wrap' />
        <div className='row landpage-row'>
          <div className='col-lg-6 landpage-content'>
            <div className='landpage-subheading'>We believe what we do</div>
            <h1 className='landpage-heading'>We are always ready for tomorrow</h1>
          </div>
          <div className='col-lg-6 landpage-style-hide'>
            <div className='landpage-strip' />
            <div className='landpage-strip-image'>
              <img src={Soldier} className='landpage-strip-image' />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default FaujiLandpage

{/* <div className='row landpage-row'>
          <div className='col-lg-6 landpage-content'>
            <div className='landpage-subheading'>We believe what we do</div>
            <h1 className='landpage-heading'>We are always ready for tomorrow</h1>
          </div>
          <div className='col-lg-6'>
            <div className='landpage-strip' />
            <div className='landpage-strip-image'>
              <img src={Soldier} className='landpage-strip-image' />
            </div>
          </div>
        </div> */}


// </Row>