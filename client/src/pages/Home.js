import {dataFilm} from "../fake-data/data-film"

import { useState, useEffect } from "react"
import { Container } from "react-bootstrap"

//import components
import Navbar from "../components/Navbar"
import Login from "../components/auth/Login"

export default function Home() {

  const [isLogin, setIsLogin] = useState(false);

  return(
    <Container fluid>
      <Navbar isLogin={isLogin}/>

      <div className="hero-film-image">
        <img src="/assets/images/dead-pool.jpg"/>

        <div className="hero-film-detail">
          <h1 className="hero-film-title">
            <span className="hero-film-first-title">DEAD</span>
            <span className="hero-film-second-title">POOL</span>
          </h1>
          <h6 className="hero-film-genre">
            Action
          </h6>
          <h5 className="hero-film-price">
            Rp. 99,000
          </h5>
          <p className="hero-film-desc">
            Hold onto your chimichangas, folks. From the studio that brought you all 3 Taken films comes the block-busting, fourth-wall-breaking masterpiece about Marvel Comics’ sexiest anti-hero! Starring God’s perfect idiot Ryan Reynolds and a bunch of other "actors," DEADPOOL is a giddy slice of awesomeness packed with more twists than Deadpool’s enemies’ intestines and more action than prom night. Amazeballs!  
          </p>
          <button className="btn-buy hero-film-btn">
            Buy Now
          </button>
        </div>
      </div>

      <div className="list-film-group">
        <h4>List Film</h4>
        <div className="list-film">
          {dataFilm.map((image) => {
            return(
              <div key={image.id} className="list-film-img-wrapper">
                <img src={image.url}/>
              </div>
            )
          })}
        </div>
      </div>
    </Container>
  )
}