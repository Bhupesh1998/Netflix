import React, {useState} from 'react';
import Header from './Header';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    const handleSignIn = () =>{
        setIsSignIn(!isSignIn)
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

                <form className="flex flex-col gap-3.5">
                    {!isSignIn && <input
                        type="text"
                        className="rounded-md py-2 px-5 border-2 text-sm"
                        placeholder="Add your name"
                    />}
                    <input
                        type="text"
                        className="rounded-md py-2 px-5 border-2 text-sm"
                        placeholder="Add username"
                    />

                    <input
                        type="password"
                        className="rounded-md py-2 px-5 border-2 text-sm"
                        placeholder="Add Password"
                    />

                    <button className="bg-red-800 rounded-md text-md mt-3.5 py-2">
                        {/* {Submit} */}
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