import React from 'react'
import { BsWallet, BsBookmark, BsBookmarkFill } from 'react-icons/bs'
import { TbBadge } from 'react-icons/tb'
import { GoLocation } from 'react-icons/go'
import '../styles/notifications.css'

function NotificationCard(props) {
    function saveOrDelete() {
        if(!props?.saved) {
            return props?.saveJob(props?.jobId, props?.firmName, props?.designation, props?.salary, props?.location, props?.description)
        } else {
            return props?.deleteSavedJob(`${props?.firmName} + ${props?.designation} + ${props?.salary} + ${props?.location} + ${props?.description}`)
        }
    }
    return (
        <div className='card' style={{ width: '18rem' }} >
            <div className='card-header-sec'>
                <div className='card-image'> hello </div>
                <div key={props?.jobId} className='save-job' onClick={saveOrDelete}>
                    { props?.saved ? <BsBookmarkFill /> : <BsBookmark />}
                </div>
            </div>
            <h5 className='card-heading'> {props?.designation}  </h5>
            <p className='card-description'> {props?.description} </p> 
            <div className='card-designation'>
                <div className='designation-icon'> <TbBadge /> </div>
                <div className='designation-content'> {props?.designation} </div>
            </div>
            <div className='card-location'>
                <div className='location-icon'> <GoLocation /> </div>
                <div className='location-content'> {props?.location} </div>
            </div>
            <div className='card-salary'>
                <div className='salary-icon'> <BsWallet /> </div>
                <div className='salary-content'> {props?.salary} / Month </div>
            </div>
        </div>
    )
}

export default NotificationCard
