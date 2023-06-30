import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { api_key, api_movies, lang, api_img_companie, api_img_small } from 'variaveis'

import './ProdCompanies.css'

export default function ProdCompanies() {

    const [prodCompanies, setProdCompanies] = useState([])
    const { id } = useParams()

    useEffect(() => {
        async function getCompanie() {
            try {
                const res = await fetch(`${api_movies}${id}?${lang}&${api_key}`);
                const data = await res.json();
                const result = data.production_companies;
                const threeCompanies = result.slice(0,3)

                setProdCompanies(threeCompanies)
            } catch (error) {
                console.log('Erro ao buscar API', error)
            }
        }
        getCompanie()
    }, [])
        

    return (
        <div className='containerProdCompanies'>
            {prodCompanies.map((companie) => {
                return (
                    <img src={`${api_img_small}${companie.logo_path}`} alt={`Logo ${companie.name}`} />
                )
            })}
        </div>
    )
}
