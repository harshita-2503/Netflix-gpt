import { useState , useRef } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/validate"
import {createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";



const Login = () => {
    const [isSignIn, setIsSignIn]=useState(true)
    const [errorMessage,setErrorMessage]=useState(null);

    const dispatch=useDispatch();

    const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);

    const navigate=useNavigate();

    const handleButtonClick=()=>{
        //Validate the form data

        

        // console.log(email.current.value);
        // console.log(password.current.value);

        const message=checkValidData(email.current.value,password.current.value,name?.current?.value)
        setErrorMessage(message)

        if(message) return

        
        //sign or sign up logic

        if(!isSignIn){
          //Sign up logic
          createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
          .then((userCredential) => {
           // Signed up 
            const user = userCredential.user;
            console.log(user);

            updateProfile(user, {
              displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/112571316?v=4"
            }).then(() => {
              // Profile updated!

              const {uid, email, displayName, photoURL} = auth.currentUser;
       
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
              
              navigate("/browse")
            }).catch((error) => {
              // An error occurred
             setErrorMessage(error.message)
            });
            
            
            })
          .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           setErrorMessage(errorCode+" - "+errorMessage)
         });



        }
        else{
          //Sign in logic

          signInWithEmailAndPassword(auth, email.current.value,password.current.value)
          .then((userCredential) => {
          // Signed in 
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name?.current?.value, photoURL: "https://avatars.githubusercontent.com/u/112571316?v=4"
            }).then(() => {
              // Profile updated!

              const {uid, email, displayName, photoURL} = auth.currentUser;
       
              dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
              
              navigate("/browse")
            }).catch((error) => {
              // An error occurred
             setErrorMessage(error.message)
            });
            
            
           console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+" - "+errorMessage)
          });


        }
          


        


        
        
    }

    const toggleSignInForm=()=>{
          setIsSignIn(!isSignIn)
    }



  return (
    <div>
      <Header/>

      <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/IN-en-20241014-TRIFECTA-perspective_e7121311-c11e-4809-a3e6-22abffa33569_large.jpg" alt="logo"/>
      </div>

      <form onSubmit={(e)=>e.preventDefault()} className="w-3/12 absolute bg-black m-24  my-36 mx-auto right-0 left-0 text-white py-4 px-8 rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignIn? "Sign In" : "Sign Up"}</h1>
        
        {!isSignIn && <input ref={name} type="text" placeholder="Full Name" className="px-4 py-2 my-2 w-full bg-zinc-800 rounded-lg"/>}
        <input ref={email} type="text" placeholder="Email-Address" className="px-4 py-2 my-2 w-full bg-zinc-800 rounded-lg"/>

        <input ref={password} type="password" placeholder="Password" className="px-4 py-2 my-2 w-full bg-zinc-800 rounded-lg"/>
        <p className="text-red-500 text-lg py-2">{errorMessage}</p>
        <button className="p-2 my-6 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignIn? "Sign In" : "Sign Up"}</button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>{isSignIn? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>

      </form>
    </div>
  )
}

export default Login
