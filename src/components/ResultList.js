import React from 'react'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import SingleInfo from './SingleInfo'
import './styles/ResultList.css'
import Error from './Error'

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
  const { results, loading, category, setError, setLoading } =
    useGlobalContext()

  if (loading) {
    return <Loading />
  }
  if (results.length < 1) {
    setLoading(false)
    setError(true)
  }

  return mapItems(results, category)
}

export default ResultList
