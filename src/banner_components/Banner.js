import React, {useState, useEffect} from 'react';
import api_service from '../API/api_service';
import requests from '../API/requests';
import '../banner_components/Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchBannerMovie(){
            const res = await api_service.get(requests.fetchNetflixOriginal);
            console.log(res.data.results);
            setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length)]);
            return res;
        }
        fetchBannerMovie();
    }, []);
    console.log(movie);

    function truncateWithEllipses(text, max) {
        return text?.length > max? text.substr(0, max-1)+"...":text;
    }

    return (
        <header className="banner"
            style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center center"
            }}>
            <div className="banner_details">
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className= "banner_button">Play</button>
                    <button className= "banner_button">Add to List</button>
                </div>
                <h1 className="banner_description">{truncateWithEllipses(movie?.overview, 150)}</h1>
            </div>
            <div className="banner_fadeBottom"/>
        </header>
    )
}

export default Banner
