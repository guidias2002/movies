import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { api_key, api_movies, api_img, lang, api_img_large } from 'variaveis';

import './MoviePage.css'
import { FaHeart, FaListUl, FaStar } from "react-icons/fa";

export default function MoviePage() {

  const { id } = useParams()
  const [movie, setMovies] = useState(null)

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json()

    setMovies(data)
  }

  useEffect(() => {
    const movieURL = `${api_movies}${id}?${lang}&${api_key}`

    getMovie(movieURL)
  })

  return (
    <>
      {movie && (
        <div
          className='container-moviePage'
          style={{
            backgroundImage: `url(${api_img_large}${movie.backdrop_path})`,
            backgroundRepeat: 'noRepeat',
            backgroundSize: 'cover',
          }}>
          <div className='container-moviePage-info'>
            <img src={`${api_img}${movie.poster_path}`} alt={`Capa ${movie.title}`} />
            <div className='container-description'>
              <div className='title-description'>
                <h2>{movie.title}</h2>
                <div className='group-description-movie'>
                  <p>{movie.release_date} | </p>
                  {movie.genres.map((tag) => {
                    return (
                      <p>{tag.name} | </p>
                    )
                  })}
                  <p>{(movie.runtime / 60).toFixed(2)}h</p>
                </div>
              </div>

              <div className='options-button'>
                <div className='avaliation'>
                  <p className='percentage'>{(movie.vote_average * 10).toFixed()}%</p>
                  <p>Avaliação dos usuários</p>
                </div>
                <button><FaListUl /></button>
                <button><FaHeart /></button>
                <button><FaStar /></button>
              </div>

              <div className='tagline-overview'>
                <p>{movie.tagline}</p>
                <h2>Sinopse</h2>
                <p>{movie.overview}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
