import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/FaujiNavbar.css'
import { BellFill , PersonFill } from 'react-bootstrap-icons'
import { BsSave } from 'react-icons/bs';
import { CandidateLoginContext } from '../Providers/CandidateLoginProvider';
import Dropdown from 'react-bootstrap/Dropdown';

function FaujiNavbar() {
    const { registerdAs, user, logout } = React.useContext(CandidateLoginContext)
    console.log('isCandidate', registerdAs)
    return (
        <>
            <Navbar className="fauji-navbar" expand="lg">
                <Container>
                    <Navbar.Brand className='navbar-icon' href="#home">Fauji Jobs</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-center flex-grow-1 pe-3">
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
                        </Nav>
                        {/* {user.email} */}
                        <Nav className="justify-content-end">
                            {console.log('registeredAs', registerdAs)}
                            {registerdAs === 'Candidate' && <>
                                <Nav.Link>
                                    <Link className='nav-menu-item' to="/notifications">
                                        <BellFill />
                                    </Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link className='nav-menu-item' to="/savedJobs">
                                        <BsSave />
                                    </Link>
                                </Nav.Link></>}
                            <Nav.Link >
                                <Link style={{ padding: '0px', margin: '0px' }} className='nav-menu-item' to={!user?.email && "/profile"}>
                                    {user?.email ? <Dropdown align={'end'} style={{ margin: '0px', padding: '0px' }}>
                                        <Dropdown.Toggle style={{ backgroundColor: 'transparent', margin: '0px', padding: '0px', border: 'none' }}>
                                            <PersonFill />
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu style={{ margin: '0px' }}>
                                            <Dropdown.Item >{user?.displayName}</Dropdown.Item>
                                            <Dropdown.Item >{user?.email}</Dropdown.Item>
                                            <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown> : <PersonFill />}
                                </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default FaujiNavbar