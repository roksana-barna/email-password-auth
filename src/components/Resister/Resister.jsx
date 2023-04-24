import React, { useState } from 'react';


const Resister = () => {
   

    // const [email,setEmail]=useState('');
    const handleSubmit =(event)=>{
        event.preventDefault();
        const email=event.target.email.value;
         const password = event.target.password.value;
        console.log(email,password);
    }
    // create user on firebase

    const handleEventChange=(event)=>{
        // console.log(event.target.email.value);
        // setEmail(event.target.email.value)


    }
   
    const handlePasswordBlur =(event)=>{
       
        // console.log(event.target.value)
    }
    return (
        <div className='w-50 mx-auto'>
            <h4> Please Resister</h4>
            <form>
                <input className='w-50 mb-4' onChange={handleEventChange} type='email' name='email'  id='email ' placeholder='Your Email'></input>
                <br/>
                <input  className='w-50 mb-4'  onBlur={handlePasswordBlur} type="password" name="password" id="password"  placeholder=' your password'/>
                <br/>
  <input onClick={handleSubmit} type="submit" value="Register"/>
            </form>
            
        </div>
    );
};

export default Resister;