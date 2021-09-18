import React from 'react'
import SingleInfo from './SingleInfo'
import Container from '@mui/material/Container'

function ResultList({ data, category, searchTerm }) {
  if (data)
    return (
      <div>
        <Container maxWidth='xl'>
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
        </Container>
      </div>
    )
}

export default ResultList
