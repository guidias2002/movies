import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import MovieSearch from 'components/MovieSearch';
import { api_key, api_search, lang } from 'variaveis';

import './Search.css'
import CardSearch from 'components/CardSearch';
import FormSearch from 'components/FormSearch';


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

    const searchWithQuery = `${api_search}?${lang}&${api_key}&query=${query}`

    getSearchedMovies(searchWithQuery)
  }, [query])


  return (
    <div className='container-search'>
        <FormSearch  movie={movies}/>

      <div className='group-search'>
        <CardSearch />
        <div className='container-moviesSearch'>
          {movies == 0 && (<h3 className='erro'>Nenhum filme encontrado</h3>)}
          {movies.length > 0 && movies.map((movie) =>
            <MovieSearch key={movie.id} movie={movie} />
          )}
        </div>
      </div>
    </div>
  )
}
