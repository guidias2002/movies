import React from 'react'
import { Link } from 'react-router-dom'
import { api_img_small } from 'variaveis'

import './MovieSearch.css'

export default function MovieSearch({ movie }) {
  return (
    <Link to={`/moviePage/${movie.id}`}>
      <div className='movieSearch'>
        <img src={`${api_img_small}${movie.poster_path}`} alt="" />
        <div className='description-movieSearch'>
          <h3>{movie.title}</h3>
          <p className='date'>{movie.release_date}</p>
          <p className='overviewSearch'>{movie.overview}</p>
        </div>
      </div>
    </Link>
  )
}
