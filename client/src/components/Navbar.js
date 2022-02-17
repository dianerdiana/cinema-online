import { useState, useEffect } from "react"
import { Dropdown } from "react-bootstrap";

//import components
import Login from "./auth/Login";
import Register from "./auth/Register";

export default function Navbar(props) {

  const [navItem, setNavItem] = useState(null);
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  const status = props.isLogin

  function NavItem(status) {

    try {
      if(!status) {
        const item = (
        <>
          <button onClick={() => setShowLogin(true)} className="btn-login">
            Login
          </button>
          <button onClick={() => setShowRegister(true)} className="btn-register">
            Register
          </button>
        </>
        )

        setNavItem(item)
      } else {

        const item = (
        <>
          <Dropdown>
            <Dropdown.Toggle variant="link">
              <img src="/assets/images/profile-circle.png" />
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">

              <div className="triangle"></div>

              <Dropdown.Item as="div">
                <img src="/assets/icons/user.png" alt="user-icon"/>
                <span>Profile</span>
              </Dropdown.Item>
              
              <Dropdown.Item as="div">
                <img src="/assets/icons/board.png" alt="board-icon"/>
                <span>My List Film</span>
              </Dropdown.Item>

              <hr />

              <Dropdown.Item href="#/action-2">
                <img src="/assets/icons/logout.png" alt="logout-icon"/>
                <span>Logout</span>
              </Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>
        </>
        )

        setNavItem(item)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=> {
    NavItem(status)
  }, []);

  return (
    <div className="navbar">
      <div className="nav-left">
        <img src="/assets/icons/app-title.png"/>
      </div>
      <div className="nav-right">
        {navItem}
        <Login 
          show={showLogin}
          onHide={() => setShowLogin(false)}
        />

        <Register 
          show={showRegister}
          onHide={() => setShowRegister(false)}
        />
      </div>
    </div>
  )
}