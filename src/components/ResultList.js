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

  function mapItems(items, category) {
    return (
      <div>
        {items
          .filter((data) => data.id % category === 0)
          .map((data) => (
            <SingleInfo key={data.id} {...data} />
          ))}
      </div>
    )
  }

  function collectCategorized(category) {
    switch (category) {
      case 1:
        return mapItems(results, 1)
      case 2:
        return mapItems(results, 2)
      case 5:
        return mapItems(results, 5)
      default:
        return null
    }
  }

  return collectCategorized(category)
}

export default ResultList
