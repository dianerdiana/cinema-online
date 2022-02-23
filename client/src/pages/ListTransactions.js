//import conponents
import { useState } from "react"
import { Container } from "react-bootstrap"

//import component
import Navbar from "../components/Navbar";
import DataTransactions from "../components/DataTransactions"

export default function ListTransaction() {

  const [isLogin, setIsLogin] = useState(true)

  return (
    <Container fluid>
      <Navbar isLogin={isLogin}/>
      <DataTransactions />
    </Container>
  )
}