import React from 'react'
import NotificationCard from '../components/NotificationCard'
import { JobContext } from '../Providers/JobsProvider'

function SaveJob() {
    const {jobs, saveJob, deleteJob} = React.useContext(JobContext)
    // console.log('Save Job', jobs)
    return (
        <>
        <div className='container' style={{ marginTop: '3rem' }}>
                {jobs?.map((job) => {
                   return <NotificationCard firmName={job?.firmName} designation={job?.designation} salary={job?.salary}
                    location={job?.location} description={job?.description} saveJob={saveJob} saved={true} deleteSavedJob={deleteJob}
                />
                })}
            </div>
        </>
    )
}

export default SaveJob