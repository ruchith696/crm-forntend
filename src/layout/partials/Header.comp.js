import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import './Header.style.css'

export const Header = () => {

  return (
    <Navbar collapseOnSelect bg="info" variant='dark' expand="md"  >
        <Navbar.Brand className='brand-pad' >logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/Tickets">Tickets</Nav.Link>
                <Nav.Link href="/Logout">Logout</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
