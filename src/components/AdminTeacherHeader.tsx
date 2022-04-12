import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AdminTeacherHeader() {
  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">SCHOOL MANAGEMENT</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">
                        <Link to="/admin-Teacher" className="link">
                            Home
                        </Link>
                    </Nav.Link>
                    <Nav.Link href="">
                            Teachers
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>      
    </div>
  )
}

export default AdminTeacherHeader