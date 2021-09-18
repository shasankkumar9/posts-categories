import React from 'react'
import SingleInfo from './SingleInfo'
import './styles/ResultList.css'

function ResultList({ data, category, searchTerm }) {
  if (data)
    return (
      <div className='list-view'>
        {data
          .filter((item) => item.id % category === 0)
          .filter((item) => {
            if (searchTerm === '') {
              return item
            } else if (
              item.title.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return item
            }
          })
          .map((item) => (
            <SingleInfo key={item.id} {...item} />
          ))}
      </div>
    )
}

export default ResultList
