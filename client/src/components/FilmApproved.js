import { Player, BigPlayButton } from "video-react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { API } from '../config/api'

export default function FilmApproved() {

  const params = useParams();
  const id = params.id

  const [dataFilm, setDataFilm] = useState()

  const getFilms = async (id) => {

    try {
      
      const response = await API.get("/detail-film/" + id)

      setDataFilm(response.data.data)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    let abortController = new AbortController();
    getFilms(id)

    return () => {  
      abortController.abort();  
      } 
  }, []);


  return (
    <>
      <div className="detail-film">
          <div className="detail-film-img">
          <img src={dataFilm?.film?.thumbnail} alt="image-film"/>
        </div>
        <div className="detail-film-data">
          <div className="detail-film-title">
            <div>
              <h2>
                {dataFilm?.film?.title}
              </h2>
            </div>
          </div>
          <div className="detail-film-video">
            <Player
              fluid={false}
              width={870}
              height={350}
              poster={dataFilm?.film?.imgPreview}
              src={dataFilm?.film?.filmUrl}
              >
                <BigPlayButton position="center"/>
            </Player>   
          </div>
          <h4 className="detail-film-category">
            {dataFilm?.film?.category}
          </h4>
          <div className="detail-film-desc">
            <p>
              {dataFilm?.film?.descriptions}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}