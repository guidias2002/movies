import React from 'react'

import './Footer.css'

export default function Footer() {
    return (
        <section className='sectionFooter'>
            <div className='containerFooter'>
                <ul className='ulFooter'>
                    <li className='liTitle'>O básico</li>
                    <li className='liChild'>Sobre o TMDB</li>
                    <li className='liChild'>Contate-nos</li>
                    <li className='liChild'>Suporte</li>
                    <liv>API</liv>
                    <li className='liChild'>Status do Sistema</li>
                </ul>
                <ul className='ulFooter'>
                    <li className='liTitle'>Envolva-se</li>
                    <li className='liChild'>Bíblia do Colaborador</li>
                    <li className='liChild'>Adicionar um novo Filme</li>
                    <li className='liChild'>Adicionar uma nova Série</li>
                </ul>
                <ul className='ulFooter'>
                    <li className='liTitle'>Comunidade</li>
                    <li className='liChild'>Diretrizes</li>
                    <li className='liChild'>Discussões</li>
                    <li className='liChild'>Placar de colaboradores</li>
                    <li className='liChild'>Twitter</li>
                </ul>
                <ul className='ulFooter'>
                    <li className='liTitle'>Legalidade</li>
                    <li className='liChild'>Termos de uso</li>
                    <li className='liChild'>Termos de Uso da API</li>
                    <li className='liChild'>Política de privacidade</li>
                </ul>
            </div>
        </section>
    )
}
