import {signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  const navigate=useNavigate();
  const user=useSelector(store=> store.user)
  const handleSignOut=()=>{


   signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/");
   }).catch((error) => {
    navigate("/error")
  // An error happened.
  });

  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between text-white">

        <img className="w-44 h-24 " src="./images/Netflix-logo.png" alt="logo"/>
        {user &&(
          <div className="flex p-2">
        <img className="w-12 h-12 m-2" src={user?.photoURL} alt="user icon"/>
        <button onClick={handleSignOut} className="text-lg font-bold">Log Out</button>
        </div>
        )}
        
    </div>

    
  )
}

export default Header
