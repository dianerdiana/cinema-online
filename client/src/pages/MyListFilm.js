import { useState } from "react";
import { Container } from "react-bootstrap";

//import components
import Navbar from "../components/Navbar";

//import data
import { myListFilm } from "../fake-data/my-list-film"
import { dataFilm } from "../fake-data/data-film"

export default function MyListFilm() {

  console.log(myListFilm)
  console.log(dataFilm)

  const [isLogin, setIsLogin] = useState(true)

  return(
    <Container fluid>
      <Navbar isLogin={isLogin}/>
      <div className="my-list-film">
        <h2>
          My List Film
        </h2>
        <div className="my-list-film-img-group">
          {myListFilm.map((img)=> {
            return(
              <div key={img.id} className="my-list-film-img">
                <img src={img.url}/>
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
}