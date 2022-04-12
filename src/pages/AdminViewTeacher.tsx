import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/Footer';
import AdminTeacherHeader from '../components/AdminTeacherHeader';

interface Data {
  item: string[],
  id: number,
  name: string,
  email: string,
  phoneNumber: number,
  password: string
}

function AdminViewTeacher(props: Data) {

  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [id, setId] = useState(null);


  useEffect(() => {
    fetch("http://localhost:49212/api/Teachers")
      .then((res) => res.json())
      .then((res) => {
        setData(res);

        setName(res[0].name);
        setEmail(res[0].email);
        setPhoneNumber(res[0].phoneNumber);
        setPassword(res[0].password);
        setId(res[0].id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function Delete(id: number) {
    axios.delete("http://localhost:49212/api/Teachers/Delete?id=" + id)
      .then((result) => {
        if (Response) {
          alert("deleted");
          window.location.reload();
        }
        else {
          alert("Not deleted");
        }
      })
      .catch((error) => {
        alert("error");
      });
  }

  //function Edit(id: number) {
  // console.log("function called",data[id-1])
  // let item = data[id-1];
  //   setName(item.name);
  //   setEmail(item.email);
  //   setPhoneNumber(item.phoneNumber);
  //   setPassword(item.password);
  //   setId(item.id);
  //}

  return (
    <div>
      <AdminTeacherHeader />
      <br /><br />
      <Container style={{ padding: '10px' }}>
        <Row>
          <Col sm={12} md={12}>
            No. of Teachers: {data.length}
            <br /><br />
            <table className="table table-striped ">
              <thead>
                <tr className="table-heading">
                  <th colSpan={6}>Teachers</th>
                </tr>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>PhoneNumber</th>
                  {/* <th>Edit</th> */}
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item: Data, index) =>
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phoneNumber}</td>
                      <td><Button onClick={() => Delete(item.id)}>Delete</Button></td>
                      {/* <td><Button onClick={() => Edit(item.id)}>Edit</Button></td> */}
                    </tr>
                  )
                }
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
      <br /><br /><br />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default AdminViewTeacher;