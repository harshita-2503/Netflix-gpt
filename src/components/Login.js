import { useState } from "react"
import Header from "./Header"

const Login = () => {
    const [isSignIn, setIsSignIn]=useState(true)

    const toggleSignInForm=()=>{
          setIsSignIn(!isSignIn)
    }

  return (
    <div>
      <Header/>

      <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_large.jpg" alt="logo"/>
      </div>

      <form className="w-3/12 absolute bg-black m-24  my-36 mx-auto right-0 left-0 text-white py-4 px-8 rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignIn? "Sign In" : "Sign Up"}</h1>
        
        {!isSignIn && <input type="text" placeholder="Full Name" className="px-4 py-2 my-2 w-full bg-zinc-800 rounded-lg"/>}
        <input type="text" placeholder="Email-Address" className="px-4 py-2 my-2 w-full bg-zinc-800 rounded-lg"/>

        <input type="password" placeholder="Password" className="px-4 py-2 my-2 w-full bg-zinc-800 rounded-lg"/>
        <button className="p-2 my-6 bg-red-700 w-full rounded-lg">{isSignIn? "Sign In" : "Sign Up"}</button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>{isSignIn? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>

      </form>
    </div>
  )
}

export default Login
