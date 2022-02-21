import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Player, BigPlayButton, PlayToggle, ControlBar } from "video-react";

//import components
import Navbar from "../components/Navbar";

//import data
import { dataFilm as film } from "../fake-data/data-film";

export default function DetailFilm() {

  const params = useParams()
  const id = params.id
  
  const [dataFilm, setDataFilm] = useState({data: film});
  const [isLogin, setIsLogin] = useState(true);
  const [playButton, setPlayButton] = useState();

  
  const getDataFilm = async (film) => {
    
    let filmChecked;

    try {

      filmChecked = await (film?.find((item)=> item.id == id))

      setDataFilm({
        data: filmChecked
      })

      console.log(filmChecked)

      let video;

      if (filmChecked?.status === "finished") {
        video = (
          <GetFullFilm film={filmChecked}/>
        )

        setPlayButton(video)
      } else if (filmChecked?.status !== "finished"){
        video = (
          <GetPreviewImg film={filmChecked}/>
        )
        setPlayButton(video)
      }

      
    } catch (error) {
      console.log(error)
    }
  }

  console.log(playButton)

  // const checkFilm = async (status, dataFilm) => {
  //   try {

  //     let video;

  //     if (status && dataFilm?.status === "finished") {

  //       video = (
  //         <GetFullFilm film={dataFilm}/>
  //       )

  //       setPlayButton(video)
        
  //     } else if (status && dataFilm?.status !== "finished"){
  //       video = (
  //         <GetPreviewImg imgPreview={dataFilm}/>
  //       )
  //       setPlayButton(video)
  //     }
      
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const filmPreview = dataFilm?.data

  useEffect(()=>  {
    getDataFilm(film);
    // checkFilm(isLogin, dataFilm?.data);
    
    // GetFullFilm (dataFilm?.data);
    // GetPreviewImg(dataFilm?.data);
  }, []);
  

 return(
   <Container fluid>
     <Navbar isLogin={isLogin}/>
     <div className="detail-film">
       <div className="detail-film-img">
         <img src={filmPreview?.url} alt="image-film"/>
       </div>
       <div className="detail-film-data">
         <div className="detail-film-title">
          <div>
            <h2>
              {filmPreview?.title}
            </h2>
          </div>
          <div>
            <button className="btn-buy detail-film-btn">
              Buy Now
            </button>
          </div>
         </div>
         <div className="detail-film-video">
           <GetFullFilm film={dataFilm}/>
         </div>
         <h4 className="detail-film-category">
           {filmPreview?.category}
         </h4>
         <div className="detail-film-desc">
           <p>
             {filmPreview?.desc}
           </p>
         </div>
       </div>
     </div>
   </Container>
 )
}

function GetPreviewImg(props) {

  return (
    <>
      <div className="poster">
        <img src={props?.film?.imgPreview} alt="image-preview" />
        <button className="btn-play">
          <span className="play-icon"></span>
        </button>
      </div>
    </>
  )
}

function GetFullFilm(props) {
  
  const detailFilm = props?.film?.data

  return (
    <>
      <Player
        fluid={false}
        width={870}
        height={350}
        poster={detailFilm?.imgPreview}
        src={detailFilm?.videoUrl}
        >
          <BigPlayButton position="center"/>
        </Player>
    </>
  )
}