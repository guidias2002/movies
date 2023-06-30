import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { api_key, api_trailer, url_yt } from 'variaveis';

import './Trailer.css'

function Trailer() {
  const [trailerKey, setTrailerKey] = useState('');
  const { id } = useParams()

  useEffect(() => {
    async function fetchTrailerKey() {
      try {
        const response = await fetch(
          `${api_trailer}${id}/videos?${api_key}`
        );
        const data = await response.json();
        const trailers = data.results;
        const result = trailers.find((trailer) => trailer.name === 'Official Trailer');
        if (result) {
          setTrailerKey(result.key);
        }
      } catch (error) {
        console.log('Erro ao buscar os dados da API:', error);
      }
    }

    fetchTrailerKey();
  }, []);

  return (
    <div>
      <iframe className='video' src={`${url_yt}${trailerKey}`}></iframe>
    </div>
  );
}

export default Trailer;