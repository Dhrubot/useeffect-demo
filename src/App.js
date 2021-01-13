import React, { useState, useEffect } from 'react'

const App = () => {

  const API_KEY = 'aagaadagadaadh4dddfgahahaha8sdfs61sdfsf8sfb7'
  const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=time&page=1`

  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const response = await fetch(API_URL)
    const result = await response.json()
    setMovieList(result.Search)
  }

  return (
    <div>
      <h1>Hello, This is a fetch demo using React's useEffect hook.</h1>
      <ul>
        { movieList.map((movie, idx) => <li key={idx}>{movie.Title} ------ {movie.Year}</li>)}
      </ul>
    </div>
  )
}

export default App

