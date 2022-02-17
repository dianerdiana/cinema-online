import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

import { Dropdown } from "react-bootstrap";

export default function Navbar(props) {

  const [navItem, setNavItem] = useState(null);
  const status = props.isLogin

  function item(status) {
    try {
      if(!status) {
        const item = (
        <>
          <button className="btn-login">Login</button>
          <button className="btn-register">Register</button>
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

              <Dropdown.Item href="#">
                <img src="/assets/icons/user.png" alt="user-icon"/>
                <span>Profile</span>
              </Dropdown.Item>
              
              <Dropdown.Item href="#/action-2">
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
    item(status)
  }, []);

  return (
    <div className="navbar">
      <div className="nav-left">
        <img src="/assets/icons/app-title.png"/>
      </div>
      <div className="nav-right">
        {navItem}
      </div>
    </div>
  )
}