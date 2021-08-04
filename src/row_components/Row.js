import React, {useState, useEffect} from "react";
import api_service from "../API/api_service";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "../row_components/Row.css";


const baseImageURL = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLarge = false}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData(){
            const res = await api_service.get(fetchUrl);
            setMovies(res.data.results);
            return res;
        }
        fetchData();
    }, [fetchUrl]);


    const opts= {
      hight: "450",
      width: "100%",
      playerVars: {
        autoplay: 1
      }
    };

    const handleClick = (movie)=> {
      if(trailerUrl){
        setTrailerUrl("");
      }else{
        console.log(movie);
        movieTrailer(`${movie?.name || movie?.original_title || movie?.title}`, { id: true } )
        .then((id) => {
          setTrailerUrl(id);
        }).catch((error)=> console.log(error));
      }
    };

    return (
      <div className="row">
        <h2>{title}</h2>
        <div className={`row_posters`}>
           {movies.map((movie)=> {
             return (
              <img
              key={movie.id}
              className={`row_poster ${isLarge && `row_posterLarge`}`}
              src={`${baseImageURL}${isLarge? movie.poster_path:movie.backdrop_path}`}
              onClick={()=> handleClick(movie)}
              alt={movie.name}/>
             );
             }
           )}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
      </div>
    );
  }
  
  export default Row;