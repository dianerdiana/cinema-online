import { useState, useEffect } from "react"
import { Dropdown } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

//import components
import Login from "./auth/Login";
import Register from "./auth/Register";

export default function Navbar(props) {

  const navigate = useNavigate()

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

              <Dropdown.Item href="/profile">
                <img src="/assets/icons/user.png" alt="user-icon"/>
                <span>Profile</span>
              </Dropdown.Item>
              
              <Dropdown.Item href="/my-list-film">
                <img src="/assets/icons/board.png" alt="board-icon"/>
                <span>My List Film</span>
              </Dropdown.Item>

              <hr />

              <Dropdown.Item as="button">
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
        <Link to="/">
          <img src="/assets/icons/app-title.png"/>
        </Link>
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