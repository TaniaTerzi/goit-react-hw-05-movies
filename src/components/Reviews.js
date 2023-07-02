import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function Reviews() {
    const [movie, setMovie] = useState([]);
           
    const idParams = useParams();
    const id = idParams.movieId;
    console.log(id);

    useEffect(()=> {
    async function getMovies() {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/movie/${id}/reviews`,
                {params: {api_key: '3e5c06f36af27128c6066a7b0679e96b',},
        }
        );
            const revie = response.data.results;
            console.log(revie)
            setMovie(revie);           
        } catch (error) {
            console.error(error);
        }
        }
        getMovies();
    }, [id]);
   
    return <div>
        {movie.map(item => {
        return <div key={item.id}> <span > {item.author}:
        </span> {item.content}</div>
      })}
    </div>
}

export default Reviews;