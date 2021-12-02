import React, { Component } from 'react'
import './App.css'
import movieData from './movieData'
import MovieContainer from './MovieContainer'
import MovieDetails from './MovieDetails'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <main>
        <header>
          <h1>Rancid Tomatillos</h1>
        </header>
        <MovieContainer />
        {/* <MovieDetails /> */}
      </main>
    )
  }
}

export default App