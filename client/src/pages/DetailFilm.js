import { useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

//import components
import Navbar from "../components/Navbar";

//import data
import { dataFilm } from "../fake-data/data-film";

export default function DetailFilm() {

  const params = useParams()
  const id = params.id

  const [isLogin, setIsLogin] = useState(true)

 return(
   <Container>
     <Navbar isLogin={isLogin}/>
     <div className="detail-film">
       <div className="detail-film-img">
         <img src="" alt="image-film"/>
       </div>
       <div className="detail-film-data">
         <h2 className="detail-film-title">
           {}
         </h2>
         <button className="btn-buy detail-film-btn">
           Buy Now
         </button>
         <div className="detail-film-video">
           <img src="" alt="image-preview"/>
         </div>
         <h4 className="detail-film-genre">
           {}
         </h4>
         <div className="detail-film-desc">
           <p>
             {}
           </p>
         </div>
       </div>
     </div>
   </Container>
 )
}