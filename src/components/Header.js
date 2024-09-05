import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/fireBase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO_URL, SUPPORTED_LANGUAGE } from '../utils/constants';
import { toggleGptSearch } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(store=>store.user);
  const gptSearch = useSelector(store=>store.gpt.gptSearch);
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

  const handleGptSearchButton = () =>{
    dispatch(toggleGptSearch());
  }

  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='absolute px-10 py-3 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row justify-between'>
      <img
       className='w-44 mx-auto md:mx-0'
       src={LOGO_URL}
       alt='icon-logo'
       />
       {user && <div className='flex justify-between p-4'>
         {gptSearch && 
          <select className='bg-transparent text-white rounded-lg border-blue-600 border-2 my-3' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGE.map(lang=><option className='text-black' key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>
         }
         <button onClick={handleGptSearchButton} className='px-2 bg-blue-700 rounded-lg py-0 my-1 mx-3 text-white'>{gptSearch ? "Home" : "GPT Search"}</button>
         <img className='hidden md:block h-12 w-12' src={user?.photoURL} alt='user icons'/>
         <button onClick={onSignOut} className='bg-red-600 mx-1 my-2 px-2 border-0 rounded-2xl text-white font-bold'>Sign Out</button>
       </div>}
    </div>
    
  )
}

export default Header
