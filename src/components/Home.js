import React, { useState } from 'react'
import SearchAppBar from './SearchAppBar'
import Display from './Display'

function Home() {
  const [category, setCategory] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <SearchAppBar
        category={category}
        setCategory={setCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Display category={category} searchTerm={searchTerm} />
    </>
  )
}

export default Home
