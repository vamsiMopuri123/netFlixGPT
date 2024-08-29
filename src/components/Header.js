import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/fireBase';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
  const onSignOut = ()=>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
    
  }
  return (
    <div className='absolute px-10 py-3 bg-gradient-to-b from-black z-10 w-full flex justify-between'>
      <img
       className='w-44'
       src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
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
