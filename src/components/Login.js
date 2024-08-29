import React, { useRef, useState } from 'react'
import Header from './Header'
import { validate } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/fireBase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

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
    if(message){
      setErrorMessage(message);
    }
    if(!isSignIn){
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        updateProfile(user, {
          displayName: name.current.value, photoURL: "https://media.licdn.com/dms/image/v2/D5603AQH2mMTUIGJMog/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720825589274?e=1730332800&v=beta&t=vzOlBcy-rAlONnDQWwSf0u__l82j83Q5_pxMRmLyUsk"
        }).then(() => {
          const {uid,email,displayName,photoURL} = auth.currentUser;
          dispatch(addUser({uid: uid,email: email,name: displayName,photoURL:photoURL}));
          navigate('/browse')
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
        console.log(user);
        navigate('/browse');
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
        src='https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_small.jpg'
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
