import React, { useRef, useState } from 'react'
import Header from './Header'
import { validate } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/fireBase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, PHOTO_AVATAR } from '../utils/constants';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignIn,setIsSignIn]=useState(true);
  const [errorMessage,setErrorMessage] = useState('');
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const onClickHandler=()=>{
    setIsSignIn(!isSignIn);
  }
  const onSubmitHandler=()=>{
    const message = validate(email.current.value,password.current.value);
    
      setErrorMessage(message);
    if(message) return;
    if(!isSignIn){
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        updateProfile(user, {
          displayName: name.current.value, 
          photoURL: PHOTO_AVATAR
        }).then(() => {
          const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(addUser({uid: uid,email: email,name: displayName,photoURL:photoURL}));
        }).catch((error) => {
          setErrorMessage(error.message);
        });
       // navigate('/browse');
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+" - "+errorMessage);
        // ..
      });
    
    }else{
      signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+" - "+errorMessage);
      });
    
    }
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img 
        src={BG_URL}
        alt='logo'
        />
      </div>
      <form onSubmit={(e)=> e.preventDefault()} className='w-4/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg'>
            <text className='font-bold text-3xl'>{!isSignIn? 'Sign Up' : 'Sign In'}</text>
            {!isSignIn &&
            <input ref={name} className='my-5 px-2 py-4 w-full bg-gray-700' type='text' placeholder='Name'/>
            }
            <input ref={email} className='my-5 px-2 py-4 w-full bg-gray-700' type='text' placeholder='Email or Mobile Number'/>
            <input ref={password} className='my-5 px-2 py-4 w-full bg-gray-700' type='password' placeholder='Password'/>
            <p className='text-red-600 font-semibold'>{errorMessage}</p>
            <button onClick={onSubmitHandler} className='my-6 p-2 w-full bg-red-700 rounded-lg'>{!isSignIn? 'Sign Up' : 'Sign In'}</button>
            <button className='border border-0' onClick={()=>onClickHandler()}>
            {!isSignIn ? (<text>Already registered ? Sign In Now</text>):(<text>New to Netflix ?<span>Sign Up Now</span></text>)}
            </button>
        </form>

    </div>
  )
}

export default Login
