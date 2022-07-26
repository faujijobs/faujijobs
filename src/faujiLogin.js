import React from 'react'
import './styles/FaujiLogin.css'
import FaujiTabs from './utilities/FaujiTabs';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebase-config'
import { CandidateLoginContext } from './Providers/CandidateLoginProvider';
// import {useNavigate} from 'react-router-dom'

function FaujiLogin() {
    // const navigate = useNavigate()

    const [tabSelectedIndex, setTabSelectedIndex] = React.useState(0)
    const [registerUsername, setRegisterUsername] = React.useState("")
    const [registerEmail, setRegisterEmail] = React.useState("")
    const [registerPassword, setRegisterPassword] = React.useState("")
    const [loginEmail, setLoginEmail] = React.useState("")
    const [loginPassword, setLoginPassword] = React.useState("")

    const [company, setCompany] = React.useState("")
    const [registerRecruiterEmail, setRegisterRecruiterEmail] = React.useState("")
    const [registerRecruiterPassword, setRegisterRecruiterPassword] = React.useState("")
    const [loginRecruiterEmail, setLoginRecruiterEmail] = React.useState("")
    const [loginRecruiterPassword, setLoginRecruiterPassword] = React.useState("")
    const { register, login } = React.useContext(CandidateLoginContext)



    const [selectedIndex, setSelectedIndex] = React.useState(0)

    return (
        <>
            <div className='fauji-loginpage'>
                <div className='row loginpage-row'>
                    <div className='col-lg-6 loginpage-section-a'>
                        <h3 className='recruiter-heading'>Candidate</h3>
                        <div className='recruiter-section'>
                            <FaujiTabs tab1={"Register"} tab2={"Login"} tabSelectedIndex={tabSelectedIndex} setTabSelectedIndex={setTabSelectedIndex}
                            />
                            <div className='recruiter-content'>
                                {tabSelectedIndex === 0 ? <>
                                    <input className='form-input'
                                        placeholder={"Please enter your username"}
                                        type="text"
                                        onChange={(e) => setRegisterUsername(e.target.value)}
                                    />
                                    <input className='form-input'
                                        placeholder={"Please enter your email Id"}
                                        type="text"
                                        onChange={(e) => setRegisterEmail(e.target.value)}
                                    />
                                    <input
                                        className='form-input'
                                        placeholder={"Please enter your password"}
                                        type="password"
                                        onChange={(e) => setRegisterPassword(e.target.value)}
                                    />
                                    <button className='form-submit' onClick={() => register('Candidate', registerEmail, registerPassword, registerUsername)}> Register </button>
                                </> : <>
                                    <input
                                        className='form-input'
                                        type={"text"}
                                        placeholder={"Please enter your email Id"}
                                        onChange={(e) => setLoginEmail(e.target.value)}
                                    />
                                    <input
                                        className='form-input'
                                        type={"password"}
                                        placeholder={"Please enter your password"}
                                        onChange={(e) => setLoginPassword(e.target.value)}
                                    />
                                    <button className='form-submit' onClick={() => login('Candidate', loginEmail, loginPassword)}> Login </button>
                                </>}
                            </div>  
                        </div>
                    </div>
                    <div className='col-lg-6 loginpage-section-a'>
                        <h3 className='recruiter-heading'>Recruiter</h3>
                        <div className='recruiter-section'>
                            <FaujiTabs tab1={"Register"} tab2={"Login"} tabSelectedIndex={selectedIndex} setTabSelectedIndex={setSelectedIndex}
                            />
                            <div className='recruiter-content'>
                                {selectedIndex === 0 ? <>
                                    <input className='form-input'
                                        placeholder={"Please enter your company name"}
                                        type="text"
                                        onChange={(e) => setCompany(e.target.value)}
                                    />
                                    <input className='form-input'
                                        placeholder={"Please enter your email Id"}
                                        type="text"
                                        onChange={(e) => setRegisterRecruiterEmail(e.target.value)}
                                    />
                                    <input
                                        className='form-input'
                                        placeholder={"Please enter your password"}
                                        type="password"
                                        onChange={(e) => setRegisterRecruiterPassword(e.target.value)}
                                    />
                                    <button className='form-submit' onClick={() => register('Recruiter', registerRecruiterEmail, registerRecruiterPassword, company)}> Register </button>
                                </> : <>
                                    <input
                                        className='form-input'
                                        type={"text"}
                                        placeholder={"Please enter your email Id"}
                                        onChange={(e) => setLoginRecruiterEmail(e.target.value)}
                                    />
                                    <input
                                        className='form-input'
                                        type={"password"}
                                        placeholder={"Please enter your password"}
                                        onChange={(e) => setLoginRecruiterPassword(e.target.value)}
                                    />
                                    <button className='form-submit' onClick={() => login('Recruiter', loginRecruiterEmail, loginRecruiterPassword)}> Login </button>
                                </>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FaujiLogin