//import conponents
import { useState } from "react"
import { Container } from "react-bootstrap"
import Navbar from "../components/Navbar"

export default function ListTransaction() {

  const [isLogin, setIsLogin] = useState(true)

  return (
    <Container fluid>
      <Navbar isLogin={isLogin}/>
    </Container>
  )
}