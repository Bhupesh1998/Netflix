import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './Login';
import Browse from './Browse';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

 

const Body = () => {
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    const myRoutes = createBrowserRouter([
        {
            path : "/",
            element: <Login/>
        },
        {
            path : "/Browse",
            element: <Browse/>
        }
    ])

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {                
              const {uid, email, displayName, photoURL  } = user
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
            //   navigate("/Browse")
            } else {
                dispatch(removeUser());
                // navigate("/")
              // User is signed out
              // ...
            }
          });
    },[])


    return(
       <>
          <RouterProvider router={myRoutes}/>      
       </>
    )
}

export default Body;