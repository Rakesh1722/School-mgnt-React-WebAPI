import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function AdminHeader() {
  return (
    <div>
        <div className='Home'>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">SCHOOL MANAGEMENT</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">
                        <Link to="/AdminDashBoard" className="link">
                            Home
                        </Link>
                    </Nav.Link>
                    <Nav.Link href="#link">
                        <Link to="/admin-Teacher" className="link">
                            Teachers
                        </Link></Nav.Link>
                    <Nav.Link href="#link">
                        <Link to="/admin-Student" className="link">
                            Students
                        </Link>
                    </Nav.Link>
                </Nav>
                {/* <Nav.Link href="#">
                    <Link to="/Login" className='link'>Logout</Link>
                </Nav.Link> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>      
        </div>
    </div>
  )
}

export default AdminHeader