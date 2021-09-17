import React, { useState } from 'react'
import { useQuery } from 'react-query'
import DropDown from './components/DropDown'
import ResultList from './components/ResultList'
import Error from './components/Error'
import Loading from './components/Loading'

const url = 'https://jsonplaceholder.typicode.com/posts'

const fetchData = async () => {
  const response = await fetch(url)
  return response.json()
}

function App() {
  const [category, setCategory] = useState(1)
  const { data, status } = useQuery(['posts'], fetchData)

  return (
    <div>
      {status === 'loading' && <Loading />}

      {status === 'error' && <Error />}

      {status === 'success' && (
        <div>
          <DropDown setCategory={setCategory} />
          <ResultList data={data} category={category} />
        </div>
      )}
    </div>
  )
}

export default App
