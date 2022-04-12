import { useEffect, useState } from 'react';
import { Col, Container, Row, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { store } from '../store';
import Footer from '../components/Footer';

function AdminDashBoard() {

    console.warn("adminDashBoard")

    const state = store.getState();
    const username = state.Login.userinfo[0].details
    console.log("store->name:", username);

    const [count, setCount] = useState(0);
    const [studentCount,setStudentCount] = useState(0);
    const [user, setuser] = useState({ Email: '', Password: '' });

    useEffect(() => {  
        axios.get("http://localhost:49212/api/AdminDashBoard",)
        .then((response:any) => {
            setCount(response.data)
        })
    }, []);

    useEffect(() => {  
        axios.get("http://localhost:49212/api/AdminDashBoard/GetStudent",)
        .then((response:any) => {
            setStudentCount(response.data)
        })
    }, []);

    // if(!authorize) {
    //     return <Redirect to="/Login" />;
    // }
    // else
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">SCHOOL MANAGEMENT</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#link">
                        <Link to="/admin-Teacher" className='link'>
                            Teachers
                        </Link></Nav.Link>
                    <Nav.Link href="#link">
                        <Link to="/admin-Student" className='link'>
                            Students
                        </Link>
                    </Nav.Link>
                </Nav>
                {/* {userInfo ? (
                    <NavDropdown title={userInfo.name} id="name">
                        <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                    </NavDropdown>
                ) : (
                    <Link to="/Login">
                        <Nav.Link>
                            signin  
                        </Nav.Link>
                    </Link>
                )} */}
                </Navbar.Collapse>
            </Container>
        </Navbar> 
            <br />
            <br />
            <h2> Welcome  {username} </h2>
            <div className='body'>
                <Container>
                    <Row>
                        <Col sm={4}  style={{ marginTop : '10px' }}>    
                        <Link to="/admin-Teacher" style={{ textDecoration : 'none' }}>
                            <div className="teacher-cart">
                                <div className="text">
                                    <h5>Total Teachers</h5>
                                    <div className="count">
                                        <h5>{count}</h5>
                                    </div>
                                </div>
                            </div>
                        </Link>    
                        </Col>
                        <Col sm={4} style={{ marginTop : '10px' }}>
                            <Link to="/admin-Student" className="link">
                                <div className="student-cart">
                                    <div className="text">
                                    <h5>Total Students</h5>
                                    <div className="count">
                                        <h5>{studentCount}</h5></div>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
            <br /><br /><br /><br />
      <div>
        <Footer />
      </div>    
        </div>
    )
}
export default AdminDashBoard;