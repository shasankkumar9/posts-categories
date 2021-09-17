import React from 'react'
import SingleInfo from './SingleInfo'
import './styles/ResultList.css'

function ResultList({ data, category }) {
  return (
    <div>
      {data
        .filter((item) => item.id % category === 0)
        .map((item) => (
          <SingleInfo key={item.id} {...item} />
        ))}
    </div>
  )
}

export default ResultList
