import { FaSearch } from 'react-icons/fa'
import { useState } from 'react';
import { useNavigate } from 'react-router';

import './Form.css'

export default function Form() {

    const [ search, setSearch ] = useState('');
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault()
      if (!search) return
  
      navigate(`/search?q=${search}`)
      setSearch('')
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <input type="text" placeholder='Pesquisar filme' onChange={(e) => setSearch(e.target.value)} value={search} />
            <button type='submit'><FaSearch /></button>
        </form>
    )
}
