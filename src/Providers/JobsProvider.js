import React from 'react'
import { addDoc, collection, getFirestore, getDocs, updateDoc, deleteField, where, query } from 'firebase/firestore'
import { CandidateLoginContext } from '../Providers/CandidateLoginProvider'
import { v4 as uuidv4 } from 'uuid';


const JobContext = React.createContext()
function JobsProvider(props) {
    const [data, setData] = React.useState()
    const [jobs, setJobs] = React.useState([])
    const { user } = React.useContext(CandidateLoginContext)
    React.useEffect(() => {
        fetch('https://sheetsu.com/apis/v1.0su/9dc6c4e45798').then(res => {
            return res.json()
        }).then(data => setData(data?.map((prev) => {
            return { ...prev, jobId: uuidv4(), saveJob: false}
        })))
    }, [])


    async function saveJob(jobId, firmName, designation, salary, location, description) {
        const db = getFirestore()
        const jobsRef = collection(db, 'savedJobs', user?.uid, 'jobIds')
        //for getting the jobs
        const docSnap = await getDocs(jobsRef)
        //pushing the jobs
        let revisedJobs = []
        docSnap?.forEach((doc) => {
            revisedJobs.push(doc.data())

        });

        const findJob =  revisedJobs.find((item) => item.id === `${firmName} + ${designation} + ${salary} + ${location} + ${description}`)
        if(!findJob) {
            await addDoc(jobsRef, { 
                id: `${firmName} + ${designation} + ${salary} + ${location} + ${description}`,
                jobId: jobId, 
                firmName: firmName, 
                designation: designation, 
                salary: salary, 
                location: location, 
                description: description, 
                saved: true 
            })
        } else {
            alert('Already Added')
        }
    }

    async function deleteJob(jobId) {
        const db = getFirestore()
        const docSnap = await getDocs(collection(db, 'savedJobs', user.uid, 'jobIds'))
        let revisedJobs = []
        docSnap?.forEach((doc) => {
            revisedJobs.push(doc.data())
        });

        const jobsRef = collection(db, 'savedJobs', user.uid, 'jobIds')
        const q = query(jobsRef, where())
        
        const ifJobPresent = revisedJobs?.find((job) => job.id === jobId)
        console.log(ifJobPresent)
        if(ifJobPresent) {
            await updateDoc(
                docSnap, {
                    id: deleteField(),
                    jobId: deleteField(),
                    firmName: deleteField(),
                    designation: deleteField(), 
                    salary: deleteField(),
                    location: deleteField(),
                    description: deleteField()
                }
            )

            console.log('Job Got Deleted')
        }
    }

    async function getData() {
        const db = getFirestore()
        const docSnap = await getDocs(collection(db, 'savedJobs', user.uid, 'jobIds'))
        let revisedJobs = []
        docSnap?.forEach((doc) => {
            revisedJobs.push(doc.data())

        });

        setJobs(revisedJobs)
    }

    async function getJobsData() {
        const db = getFirestore()
        const docSnap = await getDocs(collection(db, 'savedJobs', user.uid, 'jobIds'))
        let revisedJobs = []
        docSnap?.forEach((doc) => {
            revisedJobs.push(doc.data())

        });

        return revisedJobs
    }



    return (
        <JobContext.Provider value={{ data, saveJob, jobs, getData, deleteJob, getJobsData }}>
            {props.children}
        </JobContext.Provider>
    )
}

export { JobsProvider, JobContext }