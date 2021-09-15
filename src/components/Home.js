import React from 'react'
import DropDown from './DropDown'
import ResultList from './ResultList'
import Error from './Error'
import { useGlobalContext } from '../context'

function Home() {
  const { error } = useGlobalContext()
  return (
    <>
      {error ? (
        <Error />
      ) : (
        <div>
          <DropDown />
          <ResultList />
        </div>
      )}
    </>
  )
}

export default Home
