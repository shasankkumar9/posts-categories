import React, { useState } from 'react'
import { useQuery } from 'react-query'
import DropDown from './DropDown'
import ResultList from './ResultList'
import Error from './Error'
import Loading from './Loading'

const url = 'https://jsonplaceholder.typicode.com/posts'

function Home() {
  const [category, setCategory] = useState(1)
  const { data, status } = useQuery('posts', () =>
    fetch(url).then((res) => res.json()),
  )

  if (status === 'loading') {
    return <Loading></Loading>
  } else if (status === 'error' || !Array.isArray(data)) {
    return <Error></Error>
  } else if (status === 'success') {
    return (
      <div>
        <DropDown setCategory={setCategory} />
        <ResultList data={data} category={category} />
      </div>
    )
  }
}

export default Home
