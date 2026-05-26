import React, { useEffect } from 'react';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, addUser } from '../utils/userSlice';


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {                
          const {uid, email, displayName, photoURL  } = user
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
          navigate("/Browse")
        } else {
            dispatch(removeUser());
            navigate("/")
        }
      });
},[])

  const handleLoginLogout = () => {
    
    signOut(auth).then(() => {
      dispatch(removeUser())
    }).catch((error) => {
      // An error happened.
    });
    
  }
  
    return(

      <header className=  {`text-amber-50 flex justify-between px-36  z-50 top-0 left-0 w-full items-center  ${!user ? 'absolute' : ""}`} >
        <div className='bg-linear-to-b from-black w-1/7'>
          <img className=' ' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
        </div>
        <div className='flex gap-5 '>
          {!user &&  
          <>
          <select className="border border-white bg-black text-white rounded-md p-2">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select> 
        </>
        }

          {user?.photoURL && (
            <img className="w-10 h-10 rounded-md object-cover" src={user.photoURL} alt="Profile" />
          )}
          <button onClick={handleLoginLogout} className=' cursor-pointer border-2-red bg-red-900 rounded-md py-1 px-3 mr-3 font-medium'> {!user ? "Sign In" : "Log Out"}</button>

        </div>
      </header>
    )
}

export default Header;