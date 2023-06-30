import axios from "axios";
import {useState, useEffect} from 'react';
import {Link, useSearchParams} from "react-router-dom";



export const Movies = () => {
    const [movie, setMovie] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();

    const query = searchParams.get('query') ?? '';


    const handleChange = event => {
        const { value } = event.currentTarget;
        setInputValue(value);
        console.log('inputvalue', value);
      };

      const handleSubmit = event => {
        event.preventDefault();
    
        if (inputValue.trim() === '') {
          alert('Search query can not be empty.');
          return;
        }
        setSearchParams(inputValue !== '' ? { query: inputValue } : {});
        console.log('searchParams', searchParams);
      };


    async function getMovies(query) {
        try {
            const response = await axios.get(
                `https://api.themoviedb.org/3/search/movie?query=${query}`,
            {params: {api_key: '3e5c06f36af27128c6066a7b0679e96b',},
        }
        );
        return response.data;
        } catch (error) {
            console.error(error);
        }
        }
        useEffect(() => {
            if (query) {
              getMovies(query).then(resp => {
                setMovie([...resp.results]);
              });
            }
          }, [query]);



    return <div>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
        />
        <button type="submit">search</button>
      </form>
      <div>
        {movie.map(item => {
          return (
            <li style={{listStyle: 'none', margin: '5px 0 0'}} key={item.id}>
                <Link
                    
                to={`${item.id}`}
                //   state={{ from: location }}
                >
                {item.title}
            </Link>s 
            </li>
           
          );
        })}
      </div>
    </div>
} 
