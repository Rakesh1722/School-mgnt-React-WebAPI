import React, { useState, useEffect } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header';

interface Data {
    item: string[],
    id: number,
    name: string,
    email: string,
    phoneNumber: number
  }

function Edit(props:Data) {
    
    const[state, setState] = useState({
        name:"", email:"", phoneNumber:"", password:""
      });
    //   const [name,setName] = useState("");
    //   const [email,setEmail] = useState("");
    //   const [phoneNumber,setPhoneNumber] = useState("");
    //   const [password,setPassword] = useState("");


    // const onChange = (e:any) => {  
    //     e.persist();
    //     setState({ ...state, [e.target.name]: e.target.value });  
    //   }
    
      const [data, setData] = useState([state]);

      useEffect(() => {
        fetch("http://localhost:49212/api/Teachers/Edit?id=16")
          .then((result) => result.json())
          .then((result) => {
            setData(result);
            // setName(result[0]['name'])
            console.log(result[0]['name']);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
      
  return (
    <div>
         <div>
      <Header /><br /><br />
      <Container>
        <Row>
          <Col sm={2} md={3} lg={3}/>
          <Col sm={8} md={6} lg={6} >
            <Row className='form'>
              <Col sm={1} md={1} lg={1} />
              <Col sm={10} md={10} lg={10}>
                  <div>
                    <h3 style={{textAlign:"center"}}>Edit Form</h3>
                    <label>Name:</label>
                    <input type='text' id="name" name="name" value={data[0]['name']}  required
                        //onChange={e => {setData({name: e.target.value})}}
                     />
                    <label>Email:</label>
                    <input type='email' id="email" name="email" value={data[0]['email']} required
                       />
                    <label>phoneNumber:</label>
                    <input type="text" id="phoneNumber" name="phoneNumber" pattern="[1-9]{1}[0-9]{9}" maxLength={10} value={data[0]['phoneNumber']} required
                         />
                    <label>Password:</label>
                    <input type='text' id="password" name="password" value={data[0]['password']} required
                         
                    />
                    <br />
                    <div className='text-center'>
                      <Button className='btn' type="submit"
                        // onClick={handleSubmit}
                      >
                        Update
                      </Button>
                    </div>
                    
                    {/* <p className='error_message'>{message}</p> */}
                  </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  )
}

export default Edit