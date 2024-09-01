import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/fireBase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO_URL } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
  const onSignOut = ()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error");
    });
    
  }

  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid: uid,email: email,name: displayName,photoURL:photoURL}));
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });
    
    return ()=>unsubscribe();
  },[]);

  return (
    <div className='absolute px-10 py-3 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
      <img
       className='w-44'
       src={LOGO_URL}
       alt='icon-logo'
       />
       {user && <div className='flex p-4'>
         <img className='h-12 w-12' src={user?.photoURL} alt='user icons'/>
         <button onClick={onSignOut} className='bg-red-600 p-1 m-1 border-0 rounded-2xl text-white font-bold'>Sign Out</button>
       </div>}
    </div>
    
  )
}

export default Header
