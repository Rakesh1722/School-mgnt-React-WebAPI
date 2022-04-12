import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
      <div>
        <div style={{background:'black',color:'white'}}>
            <Container>
                <Row style={{padding:"20px"}}>
                    <Col sm={2}><h6><Link to="" className="link">EVENT GALLERY</Link></h6></Col>
                    <Col sm={2}><h6><Link to="" className="link">VIDEO GALLERY</Link></h6></Col>
                    <Col sm={3}><h6><Link to="" className="link">ADMISSION PROCESS</Link></h6></Col>
                </Row>
            </Container>
        </div>
        <div className="footer" style={{ background : '#0d0d0d' , color : 'white' }}>
        <br />
            <Container>
                <Row>
                    <Col sm={7} >
                        <Row>
                        <Col sm={4}>
                        <ul>
                            <h6><li>ABOUT US</li></h6>
                            <li>School overview</li>
                            <li>Careers</li>
                            <li>Infrastructure</li>
                        </ul>
                    </Col>
                    <Col sm={4}>
                        <ul>
                            <h6><li>ADMISSIONS</li></h6>
                            <li>Process of admission</li>
                            <li>Eligibility criteria</li>
                        </ul>
                    </Col>
                    <Col sm={4}>
                        <ul>
                            <h6><li>ACADEMICS</li></h6>
                            <li>Curriculum</li>
                            <li>Results</li>
                        </ul>
                    </Col>
                        </Row>
                    </Col>
                    <Col sm={5}>
                        <ul>
                            <h6><li>Contact Us</li></h6>
                            <li>
                                <p>Toll Free - 1800 41 99099<br />
                                Monday - Saturday (9:00AM to 11:00PM IST)</p>
                            </li>
                            <li>Email - newmarketschool.com</li>
                            <li>Connect with us</li>
                            <div className='socail-media-icons'>
                                <Link to="" className="link"><FaFacebookF /></Link>&nbsp;&nbsp;
                                <Link to="" className="link"><FaYoutube /></Link>&nbsp;&nbsp;
                                <Link to="" className="link"><FaTwitter /></Link>&nbsp;&nbsp;
                                <Link to="" className="link"><FaInstagram /></Link>
                            </div>
                        </ul>
                    </Col>
                </Row>
                <Row>
                <div className="copyright" style={{ color : '#919191' }}>
                    <hr />
                    &nbsp;&nbsp;&nbsp;
                    (Last updated: April  2022) - © 2022 New Market Elementary School. All rights are reserved.
                </div>
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default Footer