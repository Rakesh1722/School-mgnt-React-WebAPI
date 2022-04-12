import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdminHeader from '../components/AdminHeader'
import { FaEye, FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function StudentDashBoard() {
  return (
    <div>
        <AdminHeader /><br /><br />
        <div className='body'>
            <Container>
                <Row>
                    <Col sm={4}  style={{marginTop:"10px"}}>
                        <Link to='/AdminViewStudent' className="link">
                            <div className="student-cart" style={{ background : '#ff66d9' }} id="view-teacher">
                                <div className="text">
                                    <h6>View All Students</h6>
                                    <br />
                                    <FaEye size={25}/>
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col sm={4}  style={{ marginTop : '10px' }}>
                        <Link to="/admin-add-student" className="link">
                            <div className="student-cart">
                                <div className="text">
                                    <h6>Add Student</h6><br />
                                    <FaPlusCircle size={25} />
                                </div>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
        <br /><br /><br />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default StudentDashBoard