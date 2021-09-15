import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://jsonplaceholder.typicode.com/posts'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState(1)
  const [error, setError] = useState(false)

  const fetchResult = useCallback(async () => {
    setLoading(true)
    setError(false)
    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data && Array.isArray(data)) {
        setResults(data)
      } else {
        setResults([])
      }
      setLoading(false)
    } catch (err) {
      console.log(err)
      setLoading(false)
      setError(true)
    }
  }, [])
  useEffect(() => {
    fetchResult()
  }, [fetchResult])
  return (
    <AppContext.Provider
      value={{
        loading,
        results,
        category,
        error,
        setCategory,
        setLoading,
        setError,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
