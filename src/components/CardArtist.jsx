import React from 'react'
import { api_img_small } from 'variaveis'

import './CardArtist.css'


export default function CardArtist({ artist }) {

    return (
        <li className='cardArtist'>
            <img src={`${api_img_small}${artist.profile_path}`} alt={`Foto ${artist.original_name}`} />
            <div className='cardArtist-description'>
                <p className='originalName'>{artist.original_name}</p>
                <p className='character'>{artist.character}</p>
            </div>
        </li>
    )
}
