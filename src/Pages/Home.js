import axios from "axios";
import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";

export const Home = () => {
    const [movies, setMovie] = useState([])
    useEffect(()=> {
    async function getMovies() {
        try {
            const response = await axios.get(
            'https://api.themoviedb.org/3/trending/all/day',
            {params: {api_key: '3e5c06f36af27128c6066a7b0679e96b',},
        }
        );
            const movies = response.data.results;
            console.log(movies);
            setMovie(movies);
        } catch (error) {
            console.error(error);
        }
        }
        getMovies();
    }, []
    )

    return <main>
        <h2>Trending movies today</h2>
        <ul >
            {movies.map(movie => {
            return (
                <li style={{listStyle: 'none', margin: '5px 0 0'}} key={movie.id}>
                    <Link
                        to={`/movies/${movie.id}`}>                    
                        {movie.title || movie.name}
                    </Link>
                </li>
            );
            })}
        </ul> 
    </main>
} ;