import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Player, BigPlayButton } from "video-react";

//import components
import Navbar from "../components/Navbar";
import FilmNotBuy from "../components/FilmNotBuy";
import FilmApproved from "../components/FilmApproved";

import { API } from '../config/api'


export default function DetailFilm() {

  const params = useParams()
  const id = params.id
  
  const [playButton, setPlayButton] = useState();

  const [video, setVideo] = useState({})

  const getFilm = async (id) => {

    try {
      
      const response = await API.get("/detail-transaction/" + id)

      setVideo(response.data.data.bill)

    } catch (error) {
      console.log(error)
    }
  }

  console.log(video)

  
  function renderFilm(video) {

    let renderDisplay;

    if (video?.status === "Pending") {

      renderDisplay = (
        <FilmApproved />
      )
      setPlayButton(renderDisplay)

    } else if (video?.status === "Approve") {

      renderDisplay = (
        <FilmNotBuy />
      )
      setPlayButton(renderDisplay)

    }
  }
  
  useEffect(()=>  {
    let abortController = new AbortController();
    getFilm(id);
    renderFilm(video)
    
    return () => {  
      abortController.abort();  
      } 
  }, []);
  

 return(
   <Container fluid>
     <Navbar />
     {playButton && playButton}
   </Container>
 )
}

function GetPreviewImg(props) {

  const data = props.film

  return (
    <>
      <div className="detail-film">
          <div className="detail-film-img">
          <img src={data?.film?.thumbnail} alt="image-film"/>
        </div>
        <div className="detail-film-data">
          <div className="detail-film-title">
            <div>
              <h2>
                {data?.film?.title}
              </h2>
            </div>
            <div>
              <button className="btn-buy detail-film-btn">
                Buy Now
              </button>
            </div>
          </div>
          <div className="detail-film-video">
            <div className="poster">
              <img src={data?.film?.imgPreview} alt="image-preview" />
              <button className="btn-play">
                <span className="play-icon"></span>
              </button>
            </div>   
          </div>
          <h4 className="detail-film-category">
            {data?.film?.category}
          </h4>
          <div className="detail-film-desc">
            <p>
              {data?.film?.descriptions}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

function GetFullFilm(props) {

  const data = props?.film
  

  return (
    <>
      <div className="detail-film">
          <div className="detail-film-img">
          <img src={data?.film?.thumbnail} alt="image-film"/>
        </div>
        <div className="detail-film-data">
          <div className="detail-film-title">
            <div>
              <h2>
                {data?.film?.title}
              </h2>
            </div>
          </div>
          <div className="detail-film-video">
            <Player
              fluid={false}
              width={870}
              height={350}
              poster={data?.film?.imgPreview}
              src={data?.film?.filmUrl}
              >
                <BigPlayButton position="center"/>
            </Player>   
          </div>
          <h4 className="detail-film-category">
            {data?.film?.category}
          </h4>
          <div className="detail-film-desc">
            <p>
              {data?.film?.descriptions}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}