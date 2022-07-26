import React from 'react'
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../firebase-config'
import { firestore, getFirestore } from 'firebase/firestore'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

const CandidateLoginContext = React.createContext()
function CandidateLoginProvider(props) {

    const [registerdAs, setRegisteredAs] = React.useState("")
    const [user, setUser] = React.useState({})
    const navigate = useNavigate();
    console.log('run')


    React.useEffect(() => {
        registerdAs && navigate('/')
        onAuthStateChanged(auth, async (currrentUser) => {
            console.log('State Changed')
            setUser(currrentUser)
            

            const db = getFirestore()
            const docRef = doc(db, "usersData", currrentUser.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log("Users Data After Refresh", docSnap.data().uid)
                if (docSnap.data().registeredAs === 'Candidate') {
                    console.log('Candidate found After Refresh')
                    setRegisteredAs('Candidate')
                } else {
                    setRegisteredAs('Recruiter')
                }
            }
        })
    }, [registerdAs])


    async function register(registerdUser, email, password, username) {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            console.log(user)
            user.user.displayName = username

            const db = getFirestore()
            const usersRef = doc(db, 'usersData', user.user.uid);
            await setDoc(usersRef, { uid: user.user.uid, registeredAs: registerdUser }, { merge: true });

            if (registerdUser === 'Candidate') {
                setRegisteredAs('Candidate')
            } else {
                setRegisteredAs('Recruiter')
            }

        } catch (error) {
            console.log(error.message)
        }

    }

    async function checkIsCandidate(uid) {
        const db = getFirestore()
        const docRef = doc(db, "usersData", uid);
        const docSnap = await getDoc(docRef);



        if (docSnap.exists()) {
            // console.log("Users Data", docSnap.data().registeredAs)
            if (docSnap.data().registeredAs === 'Candidate') {
                console.log('Candidate found')
                setRegisteredAs('Candidate')
            } else {
                setRegisteredAs('Recruiter')
            }
        }
    }


    async function login(registeredAs, email, password) {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            console.log("Login User", user)
            checkIsCandidate(user.user.uid)
            console.log('Login Found', registeredAs)


        } catch (error) {
            console.log(error.message)
        }
    }

    async function logout() {
        await signOut(auth)
        navigate('/')
    }



    return (
        <CandidateLoginContext.Provider value={{
            register, login, registerdAs, user, logout
        }}>
            {props.children}
        </CandidateLoginContext.Provider>
    )
}

export { CandidateLoginProvider, CandidateLoginContext }
