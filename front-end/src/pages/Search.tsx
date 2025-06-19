import React, { useState } from 'react'

const Search = () => {
    const [searchTerm , setSearchTerm] = useState('')
  return (
    <div>
          <input type='text' onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search' value={searchTerm} className='w-[calc(100vw-60px)] mx-auto' />
          <div>Hello Guys jgj</div>
    </div>
  )
}

export default Search