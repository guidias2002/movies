import { useState, useEffect } from 'react'
import { api_key, api_movies, lang } from 'variaveis';
import MovieComp from 'components/MovieComp';

import './Home.css'
import Banner from 'components/Banner';

export default function Home() {

  const [bestMovies, setBestMovies] = useState([])

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setBestMovies(data.results)
  }

  useEffect(() => {

    const topRatedMovies = `${api_movies}popular?${lang}&${api_key}`

    getTopRatedMovies(topRatedMovies)
  }, [])

  return (
    <>
      <Banner/>
      <div className='container-home'>
        <div className='header-group'>
          <h2 className='title'>Tendências</h2>
        </div>
        <div className='container-movies'>
          {bestMovies.length > 0 && bestMovies.map((movie) =>
            <MovieComp key={movie.id} movie={movie}/>
            )}
        </div>
      </div>
    </>
  )

}
