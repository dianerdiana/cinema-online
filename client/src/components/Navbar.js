import { useState, useContext, useEffect } from "react"
import { UserContext } from '../context/userContext';
import { Dropdown, } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";

//import components
import Login from "./auth/Login";
import Register from "./auth/Register";

export default function Navbar() {

  const [state, dispatch] = useContext(UserContext)

  const navigate = useNavigate()

  const [navItem, setNavItem] = useState(null);
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)

  const logout = () => {
    console.log(state);
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

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
          <Dropdown className="dropdown-profile">
            <Dropdown.Toggle className="dropdown-toggle-profile" variant="link">
              <img src="/assets/images/profile-circle.png" />
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu-profile" variant="dark">

              <div className="triangle"></div>

              <Dropdown.Item className="dropdown-item-profile" as={Link} to="/profile">
                <img src="/assets/icons/user.png" alt="user-icon"/>
                <span>Profile</span>
              </Dropdown.Item>
              
              <Dropdown.Item className="dropdown-item-profile" as={Link} to="/my-list-film">
                <img src="/assets/icons/board.png" alt="board-icon"/>
                <span>My List Film</span>
              </Dropdown.Item>

              <hr />

              <Dropdown.Item onClick={logout} as="button">
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
    NavItem(state.isLogin)
  }, [state.isLogin]);

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