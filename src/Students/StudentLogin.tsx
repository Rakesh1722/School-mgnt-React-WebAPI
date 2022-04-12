import axios from 'axios';
import{ useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Navbar, Nav } from 'react-bootstrap';
import Footer from '../components/Footer';

interface FormModel {
  email: string,
  password: string
}

function StudentLogin() {

  const [message, setMessage] = useState('');

  // const[state, setState] = useState({
  //    email:"", password:""
  // });
  
  // let history = useHistory();
  // const dispatch = useDispatch();

  const formik = useFormik<FormModel>({

    initialValues: {
      email: '',
      password: ''
    },

    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email addresss').required('Required'),
      password: Yup.string().required('Required')
    }),
    
    onSubmit: (values) => {
      console.log(values);

      const empInfo = { 
         email: values.email, password: values.password 
      };

      axios.post("http://localhost:49212/api/StudentLogin", empInfo)
      .then((result:any) => {
        if(Response)
        {
            setMessage("success")
        }
      })
      .catch(function (response) {
        setMessage("Invalid login credentials")
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
          <Col sm={2} md={3} lg={4}/>
          <Col sm={8} md={6} lg={4} >
            <Row className="form">
              <Col sm={1} md={1} lg={1} />
              <Col sm={10} md={10} lg={10} >
                <div>
                <form  onSubmit={formik.handleSubmit}>
                  <br />
                <h3 style={{ textAlign : 'center' }}>Login Page</h3>
                  <div className="input-field">
                    <input placeholder="enter email" id="email" name="email" type="email" 
                      onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
                  </div>

                  <div className="input-field">
                    <input placeholder="enter password" id="password" name="password" type="password" 
                      onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null}
                  </div>

                  <div className="text-center">
                    <Button type="submit">Signin</Button>
                  </div>
                  
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

export default StudentLogin