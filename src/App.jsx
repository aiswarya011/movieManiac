import React, { useState } from 'react'
import './app.css'
import NavBar from './components/NavBar/NavBar'
import MovieList from './components/MovieList/MovieList'

const App = () => {

  return (
    <div className='app'>

      <NavBar></NavBar>

      <MovieList type={'upcoming'} title={'Upcoming Movies'}></MovieList>
      <MovieList type={'popular'} title={'Popular Movies'}></MovieList>
      <MovieList type={'top_rated'} title={'Top Rated Movies'}></MovieList>
     
    </div>
  )
}

export default App
