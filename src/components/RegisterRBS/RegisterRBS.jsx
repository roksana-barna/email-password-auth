import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {createUserWithEmailAndPassword, getAuth}from "firebase/auth";
import app from '../../Firebase/FirebaseConfig';
import { Link } from 'react-router-dom';

const RegisterRBS = () => {
  // state for succes messege
  const [success,setSuccess]=useState('')
  // state for see erroro mesdsage on ui
  const [error,setError]=useState('')
  const auth = getAuth(app);
  const handleRegister=event=>{
    // 1.create prevent
    event.preventDefault();
    setSuccess('')
    setError('')
    // 2.collect data
    const email=event.target.email.value;
    const password=event.target.password.value;
    console.log(email,password);
    // regular expression for validation
    if(!/(?=. *[A-Z])/.test(password)){
      setError('add upperxare')
      return;
    }
     // create user on firebase
    createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
      const loggedUser=result.user;
      console.log(loggedUser)
      setError('');
      setSuccess('user has created successfully')
    })
    .catch(error=>{
      console.error(error.message);
      setError(error.message)
      setSuccess('')
     
    })
  }
    return (
        <div className='mx-auto w-50'>
             <Form  onSubmit={handleRegister} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  name="email"placeholder="Enter email " required />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password"  required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="accept terms and conditions" />
      </Form.Group>
      <Button  variant="primary" type="submit">
        Submit
      </Button>
    </Form>
            {/* for error */}
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
            <p>are you resistered user plx <Link to='/login'>Login</Link></p>
        </div>
    );
};

export default RegisterRBS;