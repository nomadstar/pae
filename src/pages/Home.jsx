import { useState } from "react";
import Navbar from "../components/navbar/Navbar"
import Header from "../containers/header/Header"
import Main from "../containers/main/Main"
import Login from "../components/loginregisterhome/Login"
import Register from "../components/loginregisterhome/Register"
import "../components/login/login.css"
import "./style.css"

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className='home__container'>
      <Navbar changeLogin={setShowLogin} changeRegister={setShowRegister} />
      <Header/>
      <Main/>

      {
            showLogin && (
              <>
                <Login state={showLogin} changeState={setShowLogin} openRegister={setShowRegister}  />
                <div className="begin__main-overlay"></div>
              </>
            )
          }
          {
            showRegister && (
              <>
                <Register changeState={setShowRegister} state={showRegister} openLogin={setShowLogin} />
                <div className="begin__main-overlay"></div>
              </>
            )
          }
    </div>
  )
}

export default Home