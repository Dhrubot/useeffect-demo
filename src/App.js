import React from 'react'

const App = () => {

  const API_KEY = a48618b7
  const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=time&page=1`

  return (
    <div>
      <h1>Hello, This is a fetch demo using React's useEffect hook.</h1>
    </div>
  )
}

export default App

