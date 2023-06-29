import { useNavigate } from 'react-router';
import { useState } from 'react';

import './FormSearch.css'
import { FaSearch } from 'react-icons/fa';

export default function FormSearch() {

    const [ search, setSearch ] = useState('');
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault()
      if (!search) return
  
      navigate(`/search?q=${search}`)
      setSearch('')
    }

    return (
        <div>
            <form className='form-search' onSubmit={handleSubmit}>
                <FaSearch/>
                <input type="text" placeholder='Buscar por filme' onChange={(e) => setSearch(e.target.value)} value={search}/>
            </form>
        </div>
    )
}
