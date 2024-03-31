// import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../CSS/Login.css"
import { useState, useEffect } from 'react'
import axios from 'axios';


    function Login () {
      const [login, setLogin] = useState([])
      useEffect(() => {
        axios.get("http://localhost:3000/signUp")
        .then((res) => {
          setLogin(res.data)
        .catch(err => console.log(err))
        })
      },[])

      function handleLoginClick () {
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        console.log(email, password)
        if (!email || !password) {
          alert('Please enter both email and password');
          return; // Prevent further processing if validation fails
        }
        
        // Efficient login check using find
        const isValidLogin = login.find(
          (login) => login.email === email && login.password === password
        );
    
        if (isValidLogin) {
          alert('Successfully logged in!');
          window.location.href = '/'; // Redirect to home page
        } else {
          alert('Invalid Email or Password');
          window.location = '/login'; // Redirect back to login page
        }
      
      }

      return (
    <div className='l1'>
        <h3>MEDSPRINT</h3>
        <Form className='l2'>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control id='email' type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control id='password' type="password" placeholder="Password" />
          </Form.Group>
          <Button onClick={handleLoginClick} variant="outline-dark">Log-in</Button>{' '}
        </Form>
    </div>   
      );
    }
    
    export default Login;
    
    


