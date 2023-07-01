import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

import { api_key, api_movies, api_img, lang, api_img_large } from 'variaveis';
import { FaHeart, FaListUl, FaStar } from "react-icons/fa";

import './BannerMovie.css'

export default function BannerMovie() {

    const { id } = useParams()
    const [movie, setMovies] = useState(null)


    useEffect(() => {
        async function getMovie() {
            try {
                const res = await fetch(`${api_movies}${id}?${lang}&${api_key}`)
                const data = await res.json()
                setMovies(data)
            } catch (error) {
                console.log('Erro ao buscar API', error)
            }
        }
        getMovie()
    }, [])

    return (
        <>
            {movie && (
                <section className='section-MoviePage' style={{
                    backgroundImage: `url(${api_img_large}${movie.backdrop_path})`,
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
                                            <p key={tag.id}>{tag.name} | </p>
                                        )
                                    })}
                                    <p>{(movie.runtime / 60).toFixed(2)}h</p>
                                </div>
                            </div>

                            <div className='options-button'>
                                <button><FaListUl /></button>
                                <button><FaHeart /></button>
                                <button><FaStar /></button>
                            </div>

                            <div className='tagline-overview'>
                                <p className='tagline'>{movie.tagline}</p>
                                <h2>Sinopse</h2>
                                <p>{movie.overview}</p>
                            </div>
                        </div>
                    </div>

                </section>
            )}
        </>
    )
}
