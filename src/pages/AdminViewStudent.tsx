import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {Row,Col,Button} from 'react-bootstrap';
import AdminStudentHeader from '../components/AdminStudentHeader';
import Footer from '../components/Footer';

interface Data {
    id: number,
    name: string,
    password: string,
    email: string,
    phoneNumber: string,
    standard: string
}

function AdminViewStudent() {

    const [data,setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:49212/api/Student")
          .then((res) => res.json())
          .then((res) => {
            setData(res);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    
    const Delete = (id:number) => {
      axios.delete("http://localhost:49212/api/Student/Delete?id=" +id)
      .then((result) => {
        if(Response) {
          alert("Items deleted cannot be restored")
          window.location.reload();
        }
      })
      .catch((error) => {
        alert("error");
      })
    }
  return (
    <div>
        <AdminStudentHeader />
      <br /><br />
      <div className='container' style={{ padding : '10px' }}>
        <Row >
          <Col sm={12} lg={12}>
            No. of Students: {data.length}
            <br /><br />
            <table className="table table-striped">
              <thead>
                <tr className="table-heading">
                  <th colSpan={6}>Students</th>
                </tr>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>PhoneNumber</th>
                  <th>Standard</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item: Data, i) =>
                    <tr key={i}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phoneNumber}</td> 
                      <td>{item.standard}</td>
                      <td><Button onClick={() => Delete(item.id)}>Delete</Button></td>
                     </tr>
                  )
                }
              </tbody>
            </table>
          </Col>
        </Row>
      </div>
      <br /><br /><br />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default AdminViewStudent