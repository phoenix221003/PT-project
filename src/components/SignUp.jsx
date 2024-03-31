import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import "../CSS/Signup.css";
import { useEffect, useState } from "react";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/signUp")
    .then((res) => console.log(res));
  });

  function handleName(e) {
    setName(e.target.value);
    
  }
  function handleEmail(e) {
    setEmail(e.target.value);

  }
  function handlePassword(e) {
    setPassword(e.target.value);

  }

  function handleClick(e) {
    e.preventDefault();

    const usersDetails = {
      name: name,
      email: email,
      password: password
    }

    axios.post('http://localhost:3000/signUp/add', usersDetails)
    .then(res => console.log(res))

    window.location = '/login'
  }


  return (
    <div className="s1">
      <h3>MEDSPRINT</h3>
      <Form className="s2">
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control value={name} onChange={handleName} type="name" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control value={email} onChange={handleEmail} type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control value={password} type="password" onChange={handlePassword} placeholder="Password" />
        </Form.Group>
        <Button variant="outline-dark" onClick={(e) => handleClick(e)}>
          Sign-Up
        </Button>{" "}
      </Form>
    </div>
  );
}

export default SignUp;
