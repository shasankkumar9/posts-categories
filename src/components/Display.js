import React, { useState } from 'react'
import { useQuery } from 'react-query'
import ResultList from './ResultList'
import Error from './Error'
import Loading from './Loading'

function Display({ category, searchTerm, data, status }) {
  if (status === 'loading') {
    return <Loading></Loading>
  } else if (status === 'error' || !Array.isArray(data)) {
    return <Error />
  } else if (status === 'success') {
    return (
      <ResultList data={data} category={category} searchTerm={searchTerm} />
    )
  }
}

export default Display
