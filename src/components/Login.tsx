import axios from 'axios';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import { Container, Row, Col, Button, Nav, Navbar } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';
import { AddUser } from '../redux/actions/actions';
import Footer from './Footer';

interface FormModel {
  email: string,
  password: string
}

function Login(props:any) {
  console.warn("login",props)

  const [message, setMessage] = useState('');

  let history = useHistory();

  const dispatch = useDispatch();

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
      console.log("values",values);
      dispatch(AddUser(values));

      const empInfo = { email: values.email, password: values.password };

      axios.post("http://localhost:49212/api/Login", empInfo)
        .then((result: any) => 
        {
          if (Response) 
          {
            const name = result.data.listName;
            const role = result.data.listRole;
            console.log("details",name);
            console.log("role",role);
            
            if(role == true)
            {
              console.warn("AdminPage");
              dispatch(AddUser(name));
              history.push('/AdminDashBoard');
            }
            else
              if(role == false)
              {
                console.warn("Teacherpage");
                dispatch(AddUser(name));
                history.push('/TeacherDashBoard');
              }
          }
        })
        .catch(function (response) 
        {
          setMessage("Invalid login credentials")
          console.log(response);
        });
    }
  });

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">School Management System</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">
                <Link to="/AdminDashBoard" className="link">Home</Link>
              </Nav.Link>
              <Nav.Link href="">Teacher</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br /><br /><br />
      <Container>
        <Row>
          <Col sm={2} md={3} lg={4} />
          <Col sm={8} md={6} lg={4} >
            <Row className="form">
              <Col sm={1} md={1} lg={1} />
              <Col sm={10} md={10} lg={10} >
                <div>
                  <form onSubmit={formik.handleSubmit}>
                    <br />
                    <h3 style={{ textAlign: 'center' }}>Login Page</h3>

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

const mapStateToProps = (state: { Login: any, details: any }) => {
  try {
    const username = state.Login.userinfo[0].details
    console.log('mapStateToProps', username);
    return {
      username: username
    }
  }
  catch (e) {
    console.log(e);
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return{
    changeName: (username: any) => { dispatch({type: "ADD_USER", payload: username})}
  }
}

let connectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login)

export default connectedLogin;

// export default connect(mapStateToProps,mapDispatchToProps)(Login)