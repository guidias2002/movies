import { useState, useEffect } from 'react'
import { api_key, api_movies } from 'variaveis';
import MovieComp from 'components/MovieComp';

import './Home.css'
import Form from 'components/Form';

export default function Home() {

  const [bestMovies, setBestMovies] = useState([])

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setBestMovies(data.results)
  }

  useEffect(() => {

    const topRatedMovies = `${api_movies}popular?${api_key}`

    getTopRatedMovies(topRatedMovies)
  }, [])

  return (
    <div className='container-home'>
      <div className='header-group'>
        <h2 className='title'>Filmes Populares</h2>
        <Form/>
      </div>
      <div className='container-movies'>
        {bestMovies.length > 0 && bestMovies.map((movie) =>
          <MovieComp key={movie.id} movie={movie}/>
        )}
      </div>
    </div>
  )

}
