import React from 'react';
import axios from "axios";
import {useState, useEffect } from 'react';
import {Link, Outlet, useParams} from "react-router-dom";

export const MovieDetails = () => {
    const [movie, setMovie] = useState([]);
    const [genre, setGenre] = useState([]);
    const [date, setDate] = useState('');

       
    const idParams = useParams();
    const id = idParams.movieId;
    console.log(id);

    useEffect(()=> {
    async function getMovies() {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}`,
                {params: {api_key: '3e5c06f36af27128c6066a7b0679e96b',},
        }
        );
            const movie = response.data;
            const genre = response.data.genres;
            const date = response.data.release_date;
           
            setMovie(movie);
            setGenre(genre);
            setDate(date);
        } catch (error) {
            console.error(error);
        }
        }
        getMovies();
    }, [id]);
   

    const year = date.substring(0, 4);

    return <main style={{width: '1200px'}}>
        <h2>{movie.title} ({year})</h2>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt=""
          width={200}
        />
        
            <span>Overview: {movie.overview}</span>
        
        <p>
            <span>Genres:</span>
          </p>
          {genre.map(genr => {
            return <p key={genr.id}>{genr.name}</p>;})}
        <ul>
            <li>
                <Link to="cast">
                Cast
                </Link>
            </li>
            <li>
            <Link  to="revievs">
                Reviews
            </Link>
            </li>
        </ul>
        <Outlet/>
    </main>
} ;