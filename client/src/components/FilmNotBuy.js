import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { API } from '../config/api'
import NumberFormat from 'react-number-format';


export default function FilmNotBuy() {

  const params = useParams();
  const id = params.id

  const [dataFilm, setDataFilm] = useState();

  const getFilm = async (id) => {

    try {

      const response = await API.get("/detail-film/" + id)

      setDataFilm(response.data.data.film)
      
    } catch (error) {
      console.log(error)
    }
  }
  
  let price = dataFilm?.price;


  useEffect(() => {
    let abortController = new AbortController();
    getFilm(id)

    return () => {  
      abortController.abort();  
      } 
  }, []);


  return(
    <>
      <div className="detail-film">
          <div className="detail-film-img">
          <img src={dataFilm?.thumbnail} alt="image-film"/>
        </div>
        <div className="detail-film-data">
          <div className="detail-film-title">
            <div>
              <h2>
                {dataFilm?.title}
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
              <img src={dataFilm?.imgPreview} alt="image-preview" />
              <button className="btn-play">
                <span className="play-icon"></span>
              </button>
            </div>   
          </div>
          <h4 className="detail-film-category">
            {dataFilm?.category}
          </h4>
          <h4 className="detail-film-price">
            <NumberFormat 
              value={price}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'Rp. '}
            />
          </h4>
          <div className="detail-film-desc">
            <p>
              {dataFilm?.descriptions}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}