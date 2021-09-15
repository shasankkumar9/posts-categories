import React from 'react'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import SingleInfo from './SingleInfo'
import './styles/ResultList.css'

// function collectCategorized(dataArray, category) {
//   switch (category) {
//     case 1:
//       return mapItems(dataArray, category)
//     case 2:
//       return mapItems(dataArray, category)
//     case 5:
//       return mapItems(dataArray, category)
//     default:
//       return null
//   }
// }

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

function ResultList() {
  const { results, loading, category } = useGlobalContext()

  if (loading) {
    return <Loading />
  }
  if (results.length < 1) {
    return <h2 className='no-results'>No data found!</h2>
  }

  return mapItems(results, category)
}

export default ResultList
