import React from 'react'
import '../styles/notifications.css'
import NotificationCard from '../components/NotificationCard'
import { JobContext } from '../Providers/JobsProvider'
import 'bootstrap/dist/css/bootstrap.min.css';
function Notifications() {

    const { data, saveJob, getJobsData, deleteJob } = React.useContext(JobContext)
    const [saved, setSaved] = React.useState([])
    React.useEffect(() => {
        getJobsData().then((data) => setSaved(data))
    }, [])

    function handleSaved(jobId) {
        const dummy = saved.find(item => item.id === jobId)
        if (dummy) {
            return true;
        }
        
        return false;
    }

    function isJobSaved(job) {
        return handleSaved(`${job?.FirmName} + ${job?.Designation} + ${job?.Salary} + ${job?.Location} + ${job?.Description}`)
    }

    return (
        <>
            <div className='container' style={{ marginTop: '3rem' }}>
                <div className='row'>
                    {data?.map(job => {
                        return <div className='col-lg-4'>
                            <NotificationCard jobId={job?.jobId}
                                firmName={job?.FirmName}
                                designation={job?.Designation}
                                salary={job?.Salary}
                                location={job?.Location}
                                description={job?.Description}
                                saved={isJobSaved(job)}
                                saveJob={saveJob}
                                savedData={saved}
                                data={data}
                                deleteSavedJob={deleteJob}
                            />
                        </div>
                    })}
                </div>
            </div>
        </>
    )
}

export default Notifications