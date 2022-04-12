import axios from 'axios';
import{ useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap';
import Footer from '../components/Footer';

interface FormModel {
  name: string,
  phoneNumber: string,
  standard: string,
  email: string,
  password: string,
}

function StudentSignUp() {

  const [message, setMessage] = useState('');

  const[state, setState] = useState({
    name:"", phoneNumber:"",standard:"",email:"", password:""
  });
  
  let history = useHistory();

  const formik = useFormik<FormModel>({

    initialValues: {
      name: '',
      standard: '',
      phoneNumber:'',
      email: '',
      password: ''
    },

    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      phoneNumber: Yup.string().required('Required!').length(10,"must be 10"),
      standard: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email addresss').required('Required'),
      password: Yup.string().required('Required').min(6,'must be exactly 6 digits')
    }),

    onSubmit: (values) => {
      console.log(values);

      const studentInfo = { 
        name: values.name, phoneNumber: values.phoneNumber, standard: values.standard,email: values.email,  password: values.password 
      };

      axios.post("http://localhost:49212/api/StudentSignUp", studentInfo)
      .then((result:any) => {
        if(Response){
          console.log(studentInfo);
          setMessage("success");
          history.push('/StudentLogin');
        }
      })
      .catch(function (response) {
        setMessage("email id alredy existing");
        console.log(response);
      });
    }
  });

  console.log(formik.touched);

  return (
    <div>
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
                    </Nav.Link>
                    <Nav.Link href="">Student</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <br /><br /><br />     
      <Container>
        <Row>
          <Col sm={2} md={3} lg={2}/>
          <Col sm={8} md={6} lg={8} >
            <Row className="form">
              <Col sm={1} md={1} lg={1} />
              <Col sm={10} md={10} lg={10}>
                <div>
                <form  onSubmit={formik.handleSubmit}>
                <h3 style={{ textAlign : 'center' }}>Student Registration Form</h3>
                <Container>
                  <Row>
                    <Col sm={6}>
                      <div className="input-field">
                        <input placeholder="Name" id="name" name="name" type="text"
                            onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}
                        />
                        {formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null}
                      </div>

                      <div className="input-field">
                        <input placeholder="Mobile" id="phoneNumber" name="phoneNumber" type="text" 
                            onChange={formik.handleChange} value={formik.values.phoneNumber} onBlur={formik.handleBlur}
                        />
                        {formik.touched.phoneNumber && formik.errors.phoneNumber ? <p>{formik.errors.phoneNumber}</p> : null}
                      </div>

                      <div className="input-field">
                        <input placeholder="standard" id="standard" name="standard" type="text" 
                            onChange={formik.handleChange} value={formik.values.standard} onBlur={formik.handleBlur}
                        />
                        {formik.touched.standard && formik.errors.standard ? <p>{formik.errors.standard}</p> : null}
                      </div>
                    </Col>

                    <Col sm={6}>
                      <div className="input-field">
                        <input placeholder="email" id="email" name="email" type="email" 
                            onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
                      </div>

                      <div className="input-field">
                        <input placeholder="Password" id="password" name="password" type="password"
                            onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}
                        />
                        {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null}
                      </div>

                    {/* <div className='input-field'>
                        <input placeholder='roll' id='roll' name='roll' type='text' 
                            onChange={formik.handleChange} value={formik.values.roll} onBlur={formik.handleBlur}
                        />
                        {formik.touched.roll && formik.errors.roll ? <p>{formik.errors.roll}</p> : null}
                    </div> */}
                    </Col>
                  </Row>
                </Container>

                <div className="text-center">
                  <Button type="submit">SignUp</Button>
                </div>

                <Link to="/StudentLogin">Login</Link>
                <p className="error_message">{message}</p>
                </form>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <br /><br /><br />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default StudentSignUp
