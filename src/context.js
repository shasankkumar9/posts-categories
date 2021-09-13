import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://jsonplaceholder.typicode.com/posts'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState('all')

  const fetchResult = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data) {
        setResults(data)
      } else {
        setResults([])
      }
            setLoading(false)

    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  }, [category])
  useEffect(() => {
    fetchResult()
  }, [category, fetchResult])
  return (
    <AppContext.Provider value={{ loading, results, category, setCategory }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
