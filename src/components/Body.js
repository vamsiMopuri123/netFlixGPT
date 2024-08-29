<<<<<<< HEAD
import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/fireBase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();
=======
import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const Body = () => {
>>>>>>> 1b9ed82d099514fbcedda93bc3bef4eff21d2636
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        }
    ])
<<<<<<< HEAD

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid: uid,email: email,name: displayName,photoURL:photoURL}));
        } else {
          dispatch(removeUser());
        }
      });
      
    })
=======
>>>>>>> 1b9ed82d099514fbcedda93bc3bef4eff21d2636
  return (
    <RouterProvider router={appRouter}/>
  )
}

export default Body
