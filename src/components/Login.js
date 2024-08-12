import React, { useRef, useState } from 'react'
import Header from './Header'
import { validate } from '../utils/validate';

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const email= useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleToggleButton=()=>{
     setIsSignInForm(!isSignInForm);
  }
  const onSubmitHandler=()=>{
    //validation
    console.log(email.current.value);
    console.log(password.current.value);
    //console.log(name.current.value);
    const message = validate(email.current.value,password.current.value)
    setErrorMessage(message);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img 
        src='https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_small.jpg'
        alt='logo'
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className='w-4/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg'>
            <text className='font-bold text-3xl'>{!isSignInForm ? "Sign Up" : "Sign In"}</text>
            {!isSignInForm && 
            (<input className='my-5 px-2 py-4 w-full bg-gray-700' ref={name} type='text' placeholder='Full Name'/>)}
            <input className='my-5 px-2 py-4 w-full bg-gray-700' ref={email} type='text' placeholder='Email or Mobile Number'/>
            <input className='my-5 px-2 py-4 w-full bg-gray-700' ref={password} type='password' placeholder='Password'/>
            <p className='font-bold text-red-500 py-2'>{errorMessage}</p>
            <button className='my-6 p-2 w-full bg-red-700 rounded-lg' onClick={()=>onSubmitHandler()}>{!isSignInForm ? "Sign Up" : "Sign In"}</button>
            <p className='cursor-pointer' onClick={()=>handleToggleButton()}>{!isSignInForm ? "Already registered? Sign In now" : "New to register? Sign Up now"}</p>
      </form>

    </div>
  )
}

export default Login
