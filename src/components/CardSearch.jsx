import { useSearchParams } from 'react-router-dom';
import './CardSearch.css'
import { useEffect, useState } from 'react';
import { api_key, api_search } from 'variaveis';

export default function CardSearch({ }) {

  const [searhParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searhParams.get('q');

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results)
  }

  useEffect(() => {

    const searchWithQuery = `${api_search}?${api_key}&query=${query}`

    getSearchedMovies(searchWithQuery)
  }, [query])


  return (
    <div className='card'>
        <h3>Resultado da busca</h3>
        <div className='option-card'>
            <p>Filmes</p>
            <p className='quantity'>{movies.length}</p>
        </div>
    </div>
  )
}
