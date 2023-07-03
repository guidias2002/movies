import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { api_key, api_movies, lang } from 'variaveis'

import './CardInfo.css'

export default function CardInfo() {

    const [infos, setInfos] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        async function getInfos() {
            try {
                const res = await fetch(`${api_movies}${id}?${lang}&${api_key}`);
                const data = await res.json();
                setInfos(data)
            } catch (error) {
                console.log('Erro ao buscar API', error)
            }
        }
        getInfos()
    }, [])

    return (
        <>
            {infos && (
                <ul className='listInfo'>
                    <li>
                        <p className='originalTitle'>Título original</p>
                        <p className='infosCard'>{infos.original_title}</p>
                    </li>
                    <li>
                        <p className='originalTitle'>Idioma original</p>
                        <p className='infosCard'>{infos.original_language}</p>
                    </li>
                    <li>
                        <p className='originalTitle'>Situação</p>
                        <p className='infosCard'>{infos.status}</p>
                    </li>
                    <li>
                        <p className='originalTitle'>Orçamento</p>
                        <p className='infosCard'>{(infos.budget).toLocaleString('pt-BR')}</p>
                    </li>
                </ul>
            )}
        </>
    )
}
