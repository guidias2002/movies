import { useState, useEffect} from 'react'
import { useParams } from 'react-router'
import { api_key, api_movies } from 'variaveis';

export default function MoviePage() {

  const {id} = useParams()
  const [ movie, setMovies ] = useState(null)

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json()

    setMovies(data)
  }

  useEffect(() => {
    const movieURL = `${api_movies}${id}?${api_key}`
    
    getMovie(movieURL)
  }, [])

  return (
    <div>
      {movie && (<p>{movie.title}</p>)}
    </div>
  )
}
