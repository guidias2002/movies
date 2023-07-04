import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

import { api_artist, api_key } from 'variaveis'
import CardArtist from './CardArtist'

import './Artist.css'

export default function Artist() {

    const [ artists, setArtists ] = useState([])
    const { id } = useParams()

    useEffect(() => {
        async function getArtists() {
            try {
                const res = await fetch(`${api_artist}${id}/credits?${api_key}`);
                const data = await res.json();
                const artists = data.cast;
                const mainArtists = artists.slice(0, 6);

                setArtists(mainArtists)
            } catch (error) {
                console.log('Erro ao buscar dados da API', error)
            }
        }
        getArtists()
    }, [])


    return (
        <ul className='listArtists'>
            {artists.map((artist) => {
                return (
                    <CardArtist key={artist.id} artist={artist}/>
                )
            })}
        </ul>
    )
}
