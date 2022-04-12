import axios from 'axios';
import{ useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Footer from './Footer';
import AdminTeacherHeader from './AdminTeacherHeader';

interface FormModel {
  name: string,
  email: string,
  phoneNumber: string,
  password: string
}

function AdminAddTeacher() {

  const [message, setMessage] = useState('');

  const[state, setState] = useState({
    name:"", email:"", phoneNumber:"", password:""
  });
  
  let history = useHistory();

  const formik = useFormik<FormModel>({
    initialValues: {
      name: '',
      email: '',
      phoneNumber:'',
      password: ''
    },

    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email addresss').required('Required'),
      phoneNumber: Yup.string().required('Required!').length(10,"must be 10"),
      password: Yup.string().required('Required').min(6,'must be exactly 6 digits')
    }),

    onSubmit: (values) => { 
      console.log(values);

      const empInfo = { 
        name: values.name, email: values.email, phoneNumber: values.phoneNumber, password: values.password 
      };

      axios.post("http://localhost:49212/api/AdminSignup", empInfo)
      .then((result:any) => {
        if(Response){
          console.log(empInfo);
          history.push('/admin-Teacher');
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
      <AdminTeacherHeader />
      <br /><br /><br />     
      <Container>
        <Row>
          <Col sm={2} md={3} lg={3}/>
          <Col sm={8} md={6} lg={6} >
            <Row className="form">
              <Col sm={1} md={1} lg={1} />
              <Col sm={10} md={10} lg={10}>
                <div>
                <form  onSubmit={formik.handleSubmit}>
                <h3 style={{ textAlign: 'center' }}>Teacher Signup</h3>

                  <div className="input-field">
                    <input placeholder="enter name" id="name" name="name" type="text"
                      onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null}
                  </div>

                  <div className="input-field">
                    <input placeholder='enter email' id='email' name='email' type='email' 
                      onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
                  </div>

                  <div className="input-field">
                    <input placeholder="enter phoneNumber" id="phoneNumber" name="phoneNumber" type="text"
                      onChange={formik.handleChange} value={formik.values.phoneNumber} onBlur={formik.handleBlur}
                    />
                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? <p>{formik.errors.phoneNumber}</p> : null}
                  </div>

                  <div className="input-field">
                    <input placeholder="enter password" id="password" name="password" type="password"
                      onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p> : null}
                  </div>

                  <div className="text-center">
                    <Button type="submit">SignUp</Button>
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

export default AdminAddTeacher
