import React, { useState } from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap';

function Signup(props: { history: string[]; }) {
    const [person, setPerson] = useState({name:'',password:'', email:'',phoneNumber:''});
    const apiUrl="http://localhost:49212/api/AdminSignup";

    const AddPerson = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const data = { name:person.name, email: person.email, phoneNumber: person.phoneNumber,password: person.password};
        axios.post(apiUrl,data)
        .then((result) => 
        {
            console.log(data);
            props.history.push('/Login')
        });
    }

    const onChange = (e: { persist: () => void; target: { name: any; value: any; }; }) => {
        e.persist();
        setPerson({...person, [e.target.name]: e.target.value})
    }
  return (
    <div>
        <form onSubmit={AddPerson} className='form-fields' >
          <h3 style={{marginLeft:"100px"}}>Registration Form</h3>
          Name:
          <input type="text" id="name" name="name" value={person.name}
          onChange={onChange} 
          />
          Email:
          <input type="email" id="email" name="email" value={person.email} 
          onChange={onChange}  />
          phoneNumber:
          <input type="text" id="phoneNumber" name="phoneNumber" value={person.phoneNumber}
            onChange={onChange} />
          Password:
          <input type="password" id="password" name="password" value={person.password} 
            onChange={onChange} 
          />
          <br />
          <Button className="btn"
                type="submit">Signin
          </Button>
      </form>
    </div>
  )
}

export default Signup;