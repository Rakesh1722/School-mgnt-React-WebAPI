import { Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='Home'>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">School Management System</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">
                        <Link to="/" className="link">Home</Link>
                    </Nav.Link> 
                    <Nav.Link href="#link">
                        {/* <Link to="/Admin" className="link" >
                            Admin
                        </Link> */}
                    </Nav.Link>
                    <Nav.Link href="#link">Teacher</Nav.Link>
                    <Nav.Link href="#link">
                        {/* <Link to="" className='link'>
                            Students
                        </Link> */}
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>      
    </div>
  )
}

export default Header