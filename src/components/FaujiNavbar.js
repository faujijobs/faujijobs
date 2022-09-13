import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/FaujiNavbar.css'
import { BellFill, PersonFill } from 'react-bootstrap-icons'
import { BsSave } from 'react-icons/bs';
import { CandidateLoginContext } from '../Providers/CandidateLoginProvider';
import Dropdown from 'react-bootstrap/Dropdown';
import { JobContext } from '../Providers/JobsProvider'
import { collection, doc, getDocs, getDocFromServer, getFirestore } from 'firebase/firestore'

function FaujiNavbar() {
    const { registerdAs, user, logout } = React.useContext(CandidateLoginContext)
    const { getData } = React.useContext(JobContext)
    console.log('isCandidate', registerdAs)



    return (
        <>
            <Navbar className="fauji-navbar" expand="lg">
                <Container>
                    <Navbar.Brand className='navbar-icon' href="#home">Fauji Jobs</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link>
                                <Link className='nav-menu-item' to="/">
                                    Home
                                </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='nav-menu-item' to="/about">
                                    About
                                </Link>
                            </Nav.Link>
                            {user?.email && <Nav.Link>
                                <Link className='nav-menu-item' to="/apply">
                                    Apply
                                </Link>
                            </Nav.Link>}
                            <Nav.Link>
                                <Link className='nav-menu-item' to="/contact">
                                    Contact
                                </Link>
                            </Nav.Link>
                            {console.log('registeredAs', registerdAs)}
                            {registerdAs === 'Candidate' && <>
                                <Nav.Link>
                                    <Link className='nav-menu-item' to="/notifications">
                                        Find Jobs
                                    </Link>
                                </Nav.Link>
                                <Nav.Link onClick={getData} >
                                    <Link className='nav-menu-item' to="/savedJobs">
                                        Saved Jobs
                                    </Link>
                                </Nav.Link></>}
                            {user?.email ? <Nav.Link>
                                <Dropdown align={'end'} style={{ margin: '0px', padding: '0px' }}>
                                    <Dropdown.Toggle style={{ backgroundColor: 'transparent', margin: '0px', padding: '0px 0px 4px 4px', border: 'none', fontSize: '18px' }}>
                                        Profile
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu style={{ margin: '0px' }}>
                                        <Dropdown.Item >{user?.displayName}</Dropdown.Item>
                                        <Dropdown.Item >{user?.email}</Dropdown.Item>
                                        <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav.Link> : <Nav.Link>
                                <Link to="/profile" className='nav-menu-item'>
                                    Login
                                </Link>
                            </Nav.Link>}
                            
                        </Nav>
                        {/* 
                        <Nav className="justify-content-end">

                        </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default FaujiNavbar