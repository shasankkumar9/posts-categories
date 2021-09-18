import React, { useState } from 'react'
import { useQuery } from 'react-query'
import ResultList from './ResultList'
import Error from './Error'
import Loading from './Loading'

const url = 'https://jsonplaceholder.typicode.com/posts'

function Display({ category, searchTerm }) {
  const { data, status } = useQuery('posts', () =>
    fetch(url).then((res) => res.json()),
  )

  if (status === 'loading') {
    return <Loading></Loading>
  } else if (status === 'error' || !Array.isArray(data)) {
    return <Error></Error>
  } else if (status === 'success') {
    return (
      <ResultList data={data} category={category} searchTerm={searchTerm} />
    )
  }
}

export default Display
