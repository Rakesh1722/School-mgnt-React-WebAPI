import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import school from '../icons/schoollogo.jpg';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className='Home'>
      {/* Navbar */}
      <div className='header'>
        <div className='Home'>
          <Navbar bg="dark" variant="dark" expand="lg">
              <Container>
                  <Navbar.Brand href="">School Management System</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link href="#home">
                          <Link to="/" className="link">Home</Link>
                      </Nav.Link> 
                      <Nav.Link href="#link">
                          <Link to="/Admin" className="link" >
                              Admin
                          </Link>
                      </Nav.Link>
                      {/* <Nav.Link href="#link">Teacher</Nav.Link> */}
                      <Nav.Link href="#link">
                          <Link to="/StudentSignUp" className="link">
                              Student
                          </Link>
                      </Nav.Link>
                  </Nav>
                  <Nav.Link href="#home">
                    <Link to="#about" className="link">About Us</Link>
                  </Nav.Link>
                  <Nav.Link href="#home">
                    <Link to="#" className="link">Contact Us</Link>
                  </Nav.Link>
                  </Navbar.Collapse>
              </Container>
          </Navbar>      
        </div>
      </div>

      {/* Body */}
        
      <div className='body' style={{ background : '#f2f2f2' }}>
        <Container fluid /> 
            <img src={school} alt="school"/>
            {/* <div className='image-cart' >
              <Container>
                <Row>
                  <Col sm={4} className='col-sm-4' > 
                    <Link to="/Admin" className="link" >
                      <img src={admin} className="image-card" alt="admin"/>
                    </Link>
                  </Col>
                  <Col sm={4}>
                    <Link to="/Admin" className="link" >
                      <img src={teacher} className="image-card" alt="admin"/>
                    </Link>
                  </Col>
                  <Col sm={4} >
                    <Link to="/student" className='link'>
                      <img src={student} className="image-card" alt="admin"/>
                    </Link>
                  </Col>
                </Row>
              </Container>
            </div> */}
        <Container fluid />
        <br /><br />
      </div>

      {/* <img src={banner2} /> */}

      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home