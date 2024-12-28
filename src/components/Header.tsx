import { Link, NavLink } from "react-router-dom"
import { auth, provider } from "../FireBase/config";
import { signInWithPopup, signOut } from "firebase/auth";
import Logo from '../assets/logo.png'
import { useState } from "react";


const Header = () => {
  
  const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("isAuth")) || false) 

  function handleLogin(){
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true)
      console.log(result)
      localStorage.setItem("isAuth", true)
    })
  }
  
  function handleLogout(){
    signOut(auth)
     setIsAuth(false)
     localStorage.setItem("isAuth", false)
  }

  return (
    <header>
      <Link to='/' className="logo">
        <img src={Logo} alt="writenode" />
        <span>WriteNode</span>
      </Link>
      <nav className="nav">
        <NavLink to='/' className="link">Home</NavLink>
        {isAuth ? (
          <>
           <NavLink to='/create' className="link">Create</NavLink>
           <button onClick={handleLogout} className="auth"><i className="bi bi-box-arrow-right"></i>  Logout</button>
          </>
        ) : (
           <button onClick={handleLogin} className="auth"><i className="bi bi-google"></i>  Login</button>
        )}
      </nav>
    </header>
  )
}

export default Header