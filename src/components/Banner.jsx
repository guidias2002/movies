import React from 'react'
import Form from './Form'

import './Banner.css'

export default function Banner() {
  return (
    <section>
        <div className='container-banner'>
            <h1>Bem vindo(a).</h1>
            <h2>Milhões de filmes. Explore já.</h2>
            <Form/>
        </div>
    </section>
  )
}
