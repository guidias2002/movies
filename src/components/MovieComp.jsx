import { Link } from 'react-router-dom'
import { api_img } from 'variaveis'

import './MovieComp.css'


export default function MovieComp({ movie }) {


  return (
    <div className='movieComp'>
      <Link to={`/moviePage/${movie.id}`}>
        <img src={`${api_img}${movie.poster_path}`} alt="" />
        <div className='description-movieComp'>
          <h3>{movie.title}</h3>
          <p>{movie.release_date}</p>
          <p>{movie.id}</p>
        </div>
      </Link>
    </div>
  )
}
