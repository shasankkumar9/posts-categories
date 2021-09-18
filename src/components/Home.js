import React, { useState } from 'react'
import { useQuery } from 'react-query'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchAppBar from './SearchAppBar'
import Display from './Display'
import Error from './Error'

const URL = 'https://jsonplaceholder.typicode.com/posts'

function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  const { data, status } = useQuery('posts', () =>
    fetch(URL).then((res) => res.json()),
  )

  return (
    <Router>
      <SearchAppBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Switch>
        <Route exact path='/'>
          <Display
            category={1}
            searchTerm={searchTerm}
            data={data}
            status={status}
          />
        </Route>
        <Route exact path='/two'>
          <Display
            category={2}
            searchTerm={searchTerm}
            data={data}
            status={status}
          />
        </Route>
        <Route exact path='/five'>
          <Display
            category={5}
            searchTerm={searchTerm}
            data={data}
            status={status}
          />
        </Route>
        <Route exact path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default Home
