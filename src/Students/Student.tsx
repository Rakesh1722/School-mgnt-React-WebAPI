import { Container,Row,Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer';
import Header from '../components/Header';

function Student() {
  return (
    <div>
        <Header />
      <Container id="AdminPannel">
        <Row>
          <Col sm={3} />
          <Col sm={6}>
            <p className="admin-options">
              Hello, Student
              <br />
                Welcome to School Management System.
              <br /><br /><br />
                You can access various features after Login/SignUp.
              <br /><br />
              <div>
              <Link to="/StudentSignUp">
                <Button>SignUp</Button>
              </Link><br /><br />
              <Link to="/StudentLogin">
              <Button>Login</Button>
              </Link>
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

export default Student