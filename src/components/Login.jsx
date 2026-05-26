import React, { useState, useRef } from 'react';
import Header from './Header';
import { validateUserInput } from '../utils/validations';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSignIn, setIsSignIn] = useState(true);
    const [validationError, setValidationError] = useState(false)
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);


    const handleSignIn = () => {
        setIsSignIn(!isSignIn)
    }

    const handleSubmitButton = () => {

        const validationresult = validateUserInput(email.current.value, password.current.value);
        setValidationError(validationresult)

        if (validationresult) return;

        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;

                    updateProfile(auth.currentUser, {
                        displayName: name.current.value, photoURL: "https://lh3.googleusercontent.com/a/ACg8ocL7jhlkWRFb0zgRCDcr9aNCrTmGAB1UPitVITzUS150iIkPBjgr=s576-c-no"
                      }).then(() => {
                        const {displayName,email, photoURL, uid} = auth.currentUser
                        dispatch(addUser({displayName : displayName,email : email, photoURL : photoURL, uid: uid}))
                        navigate('/Browse');

                        
                      }).catch((error) => {
                        setValidationError("Somethings Error in set image", error)
                      });
                    
                    

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setValidationError(errorCode + " - " + errorMessage)
                    console.log(errorCode + " - " + errorMessage);

                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const { uid, email, displayName, photoURL } = userCredential.user;
                    dispatch(addUser({ uid, email, displayName, photoURL }));
                    navigate('/Browse');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setValidationError(errorCode + " - " + errorMessage)
                    console.log("@@@@Error", errorCode + " - " + errorMessage);

                });

        }



    }

    return (
        <div className="relative h-screen w-full">
            <Header />

            <div className="absolute inset-0 z-10">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg"
                    alt="ContentImage"
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="absolute h-auto w-1/4 bg-black/65 px-5 py-16 rounded-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white">

                <h1 className="py-6 text-3xl font-bold">
                    {isSignIn ? "Sign In" : "Sign Up"}
                </h1>

                <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3.5">
                    {!isSignIn && <input
                        type="text"
                        ref={name}
                        className="rounded-md py-2 px-5 border-2 text-sm"
                        placeholder="Add your name"
                    />}
                    <input
                        type="text"
                        ref={email}
                        className="rounded-md py-2 px-5 border-2 text-sm"
                        placeholder="Add username"
                    />

                    <input
                        type="password"
                        ref={password}
                        className="rounded-md py-2 px-5 border-2 text-sm"
                        placeholder="Add Password"
                    />

                    <h1 className='font-bold text-amber-400 py-1.5'>{validationError}</h1>

                    <button onClick={handleSubmitButton} className="bg-red-800 rounded-md text-md mt-3.5 py-2">
                        {isSignIn ? "Submit" : "Register Now"}
                    </button>
                </form>

                <h3 className="mt-6 text-sm text-gray-400">
                    New to Netflix?
                    <span onClick={handleSignIn} className="text-white cursor-pointer ml-1">
                        {isSignIn ? "Sign In" : "Register Now"}
                    </span>
                </h3>

            </div>
        </div>

    )
}

export default Login;