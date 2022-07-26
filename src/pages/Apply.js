import React from 'react'
import { useNavigate } from 'react-router-dom'
import { data } from '../data/data'
import { CandidateLoginContext } from '../Providers/CandidateLoginProvider'
import '../styles/about.css'

function Apply() {

    const { registerdAs } = React.useContext(CandidateLoginContext)
    const navigate = useNavigate()

    function handleClick() {
        registerdAs === 'Candidate' ?
            window.location.replace('https://forms.gle/9dMubHav3sDKhGur5') :
            window.location.replace('https://forms.gle/Rn2uCf7kAGDXregZ9')
    }

    return (
        <>
            <div className='container' style={{ height: '90vh' }}>
                <div className='row' style={{ height: '100%' }}>
                    <div className='col-lg-6 about-content'>
                        <h2 className='about-heading'>Apply Yourself</h2>
                        <p className='about-para'> {data.applyContent} </p>
                        <button className='apply-button' onClick={handleClick}> Apply here </button>
                    </div>
                    <div className='col-lg-6 image-section'>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Apply