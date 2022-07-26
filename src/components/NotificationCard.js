import React from 'react'
import { BsWallet, BsBag } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'

function NotificationCard(props) {
    return (
        <div className='card'>
            <h5 className='job-firm'> {props?.firmName} </h5>
            <h7 className='job-position'> {props?.designation} </h7>
            <div className='job-accessories'>
                <div className='job-salary'><span><BsWallet /></span> {props?.salary}/Month </div>
                <div className='job-type'> <span> <BsBag />  </span> Part Time</div>
                <div className='job-location'> <span> <GoLocation /> </span> {props?.location} </div>
            </div>
            <p className='job-description'> {props?.description} </p>
            <button className='job-save' onClick={() => props?.saveJob(props?.firmName, props?.designation,
                props?.salary, props?.location, props?.description
            )}  > Save Job </button>
        </div>
    )
}

export default NotificationCard