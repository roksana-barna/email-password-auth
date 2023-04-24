import { createUserWithEmailAndPassword, getAuth, } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../Firebase/FirebaseConfig';
import { Link } from 'react-router-dom';

const Login = () => {
    const auth=getAuth(app)
    const [error,setError]=useState('')
    const [succes,setSuccess]=useState('')
  
    const handleSubmit = (event) => {
        event.preventDefault();
        
        
        const form=event.target;
        const email=form.email.value;
        const password =form.password.value;
        console.log(email,password)
        
        setError('');
        setSuccess('');
        // validation
        if(!/(?=.*[A-Z].*[A-Z])/.test(password)){
            setError('please add some uppercase');
            return;
        }
        // else if(!/(?=.*[!@#$&*]) /.test(password)){
        //     setError('please add some special character');
        //     return;
        // }
     createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
      const loggedUser=result.user;
      console.log(loggedUser)
      setError('');
      event.target.reset();
      setSuccess('user has created successfully')
    })
    .catch(error=>{
      console.error(error.message);
      setError(error.message)
      setSuccess('')
        
    })
    };



      // Handle form submission here

   
    return (
        <div className='mx-auto w-50'>
              <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
          name="email"
          required
        
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          name="password"
          required
        />
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    <p className='text-danger'>{error}</p>
    <p className='text-success'>{succes}</p>
    <p>are you new user?please <Link to='/resister'>REsister</Link></p>
 
 
        </div>
    );
};

export default Login;