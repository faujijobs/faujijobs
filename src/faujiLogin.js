import React from 'react'
import './styles/FaujiLogin.css'
import FaujiTabs from './utilities/FaujiTabs';
import { CandidateLoginContext } from './Providers/CandidateLoginProvider';
import ArmyIllustration from './assets/icons/armyIllustration.webp'
// import {useNavigate} from 'react-router-dom'

function FaujiLogin() {
    // const navigate = useNavigate()

    const [tabSelectedIndex, setTabSelectedIndex] = React.useState(0)
    const [registerUsername, setRegisterUsername] = React.useState("")
    const [registerEmail, setRegisterEmail] = React.useState("")
    const [registerPassword, setRegisterPassword] = React.useState("")
    const [loginEmail, setLoginEmail] = React.useState("")
    const [loginPassword, setLoginPassword] = React.useState("")
    const [registeredAs, setRegisteredAs] = React.useState('')

    const { register, login, handleRegisteredAs } = React.useContext(CandidateLoginContext)
     return (
        <div style={{backgroundColor: '#7F8A6C', height: '90vh'}}>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 login-background' style={{justifyContent: 'center', display:'flex', flexDirection: 'column'}}>
                        <img src={ArmyIllustration} className='img-fluid img-reponsive' alt='Indian Army' />
                        {/* <h1 className='slogan-heading'>INITIATIVE FOR OUR SOLDIERS</h1> */}
                    </div>
                    <div className='col-lg-6 login-section'>
                        <div className='recruiter-section'>
                            <FaujiTabs tab1={"Register"} tab2={"Login"} tabSelectedIndex={tabSelectedIndex} setTabSelectedIndex={setTabSelectedIndex}
                            />
                            
                            <div className='recruiter-content'>
                                {tabSelectedIndex === 0 ? <>
                                    <input 
                                        className='form-input'
                                        placeholder={"Enter your email Id"}
                                        type="text"
                                        onChange={(e) => setRegisterEmail(e.target.value)}
                                    />
                                    <input
                                        className='form-input'
                                        placeholder={"Enter your password"}
                                        type="password"
                                        onChange={(e) => setRegisterPassword(e.target.value)}
                                    />
                                    <input style={{marginRight: '6px' }} type='radio' onChange={() => handleRegisteredAs('Candidate')} name="position" value='candidate' />
                                    <label style={{marginRight: '10px'}}>Candidate</label>
                                    <input style={{marginRight: '6px'}} type='radio' onChange={() => handleRegisteredAs('Recruiter')} name="position" value='recruiter' />
                                    <label style={{marginRight: '10px'}}>Recruiter</label>
                                    <button className='form-submit' onClick={() => register(registeredAs, registerEmail, registerPassword, registerUsername)}> Register </button>
                                </> : <>
                                    <input
                                        className='form-input'
                                        type={"text"}
                                        placeholder={"Enter your email Id"}
                                        onChange={(e) => setLoginEmail(e.target.value)}
                                    />
                                    <input
                                        className='form-input'
                                        type={"password"}
                                        placeholder={"Enter your password"}
                                        onChange={(e) => setLoginPassword(e.target.value)}
                                    />
                                    <button className='form-submit' onClick={() => login(registeredAs, loginEmail, loginPassword)}> Login </button>
                                </>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FaujiLogin