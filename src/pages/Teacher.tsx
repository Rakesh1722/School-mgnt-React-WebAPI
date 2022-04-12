import { Col, Container, Navbar, Nav, Row } from 'react-bootstrap'
import { FaEye, FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';
import Footer from '../components/Footer';
import { store } from '../store';

function Teacher() {

    const state = store.getState();
    const username = state.Login.userinfo[0].details;
    console.log("teacher",username);

  return (
    <div>
        <AdminHeader />
        <br /><br />
        <div className='body'>
            {/* <h2>{username}</h2> */}
            <Container>
                <Row>
                    <Col sm={4}  style={{marginTop:"10px"}}>
                        <Link to="/AdminViewTeacher" className="link">
                            <div className="teacher-cart" id="view-teacher">
                                <div className="text">
                                    <h6>View All Teachers</h6>
                                    <br />
                                    <FaEye size={25} />
                                </div>
                            </div>
                        </Link>
                    </Col>
                    <Col sm={4} style={{marginTop:"10px"}}>
                        <Link to="/admin-add-teacher" className="link">
                            <div className="student-cart">
                                <div className="text">
                                    <h6>Add Teacher</h6><br />
                                    <FaPlusCircle size={25} />
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

export default Teacher