import React from 'react'
import '../styles/notifications.css'
import NotificationCard from '../components/NotificationCard'
import { doc, getFirestore, setDoc } from 'firebase/firestore'
import { CandidateLoginContext } from '../Providers/CandidateLoginProvider'

function Notifications() {
    const [data, setData] = React.useState()
    const { user } = React.useContext(CandidateLoginContext)
    React.useEffect(() => {
        fetch('https://sheetdb.io/api/v1/xas830yyo4i3j').then(res => {
            return res.json()
        }).then(data => setData(data))
    }, [])

    console.log('Sheets Data', data)

    async function saveJob(firmName, designation, salary, location, description) {
        const db = getFirestore()
        const usersRef = doc(db, 'savedJobs', user?.uid)
        await setDoc(usersRef, { firmName: firmName, designation: designation, salary: salary, location: location, description: description },
            { merge: true })
        console.log('Job Saved', user.uid)
    }

    console.log(data)
    return (

        <>
            <div className='container' style={{ marginTop: '3rem' }}>
                {data?.map(job => {
                    return <NotificationCard firmName={job?.FirmName} designation={job?.Designation} salary={job?.Salary}
                        location={job?.Location} description={job?.Description} saveJob={saveJob}
                    />
                })}
            </div>
        </>
    )
}

export default Notifications