import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar className='bg' data-bs-theme="dark">
                <Container>
                    <Nav className="me-auto">
                        <NavLink to="/" className={"li"}>Home</NavLink>
                        <NavLink to="/Add" className={"li"}>Add Emp</NavLink>
                        <NavLink to="/" className={"li"}>View Emp</NavLink>
                        <NavLink to="/signup" className={"li"}>Sign Up</NavLink>


                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;