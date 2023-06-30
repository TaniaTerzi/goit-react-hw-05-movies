import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

export const Cast = () => {
    const [movie, setMovie] = useState([]);
           
    const idParams = useParams();
    const id = idParams.movieId;
    console.log(id);

    useEffect(()=> {
    async function getMovies() {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}/credits`,
                {params: {api_key: '3e5c06f36af27128c6066a7b0679e96b',},
        }
        );
            const cast = response.data.cast;
            console.log(cast)
            setMovie(cast);           
        } catch (error) {
            console.error(error);
        }
        }
        getMovies();
    }, [id]);
   
    return <div style={{display: 'flex', flexWrap: 'wrap',  gap: '10px'}} >
    {movie.map(item => {
        return <div key={item.id}>
            <img src={`https://image.tmdb.org/t/p/original${item.profile_path}`} alt="" width={150}/>
            <p>{item.name}</p>
        </div>
    })}
    </div>
} ;
