import React, { useState, useEffect } from 'react'

const App = () => {

  const API_KEY = 'a48618b7'
  const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=time&page=1`

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(API_URL).then(res => res.json()).then(data => console.log(data.Search))
  }, [])

  return (
    <div>
      <h1>Hello, This is a fetch demo using React's useEffect hook.</h1>
    </div>
  )
}

export default App

