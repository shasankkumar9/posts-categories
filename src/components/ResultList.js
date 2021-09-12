import React, { useReducer } from 'react'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import SingleInfo from './SingleInfo'
import './styles/ResultList.css'

function ResultList() {
  const { results, loading, category } = useGlobalContext()

  if (loading) {
    return <Loading />
  }
  if (results.length < 1) {
    return <h2 className='no-results'>No data found!</h2>
  }

  function mapItems(item) {
    return <SingleInfo key={item.id} {...item} />
  }

  if (category === 'all') {
    return <div>{results.map((data) => mapItems(data))}</div>
  } else if (category === 'five') {
    return (
      <div>
        {results
          .filter((data) => data.id % 5 === 0)
          .map((data) => mapItems(data))}
      </div>
    )
  } else if (category === 'two') {
    return (
      <div>
        {results
          .filter((data) => data.id % 2 === 0)
          .map((data) => mapItems(data))}
      </div>
    )
  }
}

export default ResultList
