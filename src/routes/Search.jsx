import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import MovieComp from 'components/MovieComp'

import { api_key, api_search } from 'variaveis';
import Form from 'components/Form';
import './Home.css'

export default function Search() {

  const [searhParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searhParams.get('q');

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results)
  }

  useEffect(() => {

    const searchWithQuety = `${api_search}?${api_key}&query=${query}`

    getSearchedMovies(searchWithQuety)
  }, [query])

  return (
    <div className='container-home'>
      <div className='header-group'>
      <h2 className='title'>Resultados: {query}</h2>
        <Form/>
      </div>
      <div className='container-movies'>
        {movies == 0 && (<h3 className='erro'>Nenhum filme encontrado</h3>)}
        {movies.length > 0 && movies.map((movie) =>
          <MovieComp key={movie.id} movie={movie} />
        )}
      </div>
    </div>
  )
}
