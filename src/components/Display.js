import React from 'react'
import ResultList from './ResultList'
import Error from './Error'
import Loading from './Loading'

function Display({ category, searchTerm, data, status }) {
  return (
    <>
      {status === 'loading' && <Loading />}
      {status === 'success' && Array.isArray(data) && (
        <ResultList data={data} category={category} searchTerm={searchTerm} />
      )}
      {(status === 'error' || !Array.isArray(data)) && <Error />}
    </>
  )
}

export default Display
