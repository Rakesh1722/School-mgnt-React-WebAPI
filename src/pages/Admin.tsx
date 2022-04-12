import React from 'react'
import { Container,Row,Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';
import Header from '../components/Header';

function Admin() {
  return (
    <div>
      <Header />
      <Container id="AdminPannel">
        <Row>
          <Col sm={3} />
          <Col sm={6}>
            <p className="admin-options">
              Hello, Admin
              <br />
                Welcome to School Management System.
              <br /><br /><br />
                You can access various features after Login/SignUp.
              <br /><br />
              <div>
                <Row>
                  <Col sm={2} />
                  <Col sm={3}>
                    <Link to="/AdminSignUp">
                      <Button>SignUp</Button>
                    </Link>
                  </Col>
                  <Col>
                    <Link to="/Login">
                      <Button>Login</Button>
                    </Link>
                  </Col>
                </Row>
              </div>
            </p>
          </Col>
          <Col sm={3} />
        </Row>
      </Container>
      <br /><br /><br />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Admin