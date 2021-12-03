import React, { Component } from 'react'
import './App.css'
import movieData from './movieData'
import MovieContainer from './MovieContainer'
import MovieCard from './MovieCard'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies
    }
  }

  render() {
    return (
      <main>
        <header>
          <h1>Rancid Tomatillos</h1>
        </header>
        {/* <MovieContainer movies={this.state.movies}/> */}
        <MovieCard />
      </main>
    )
  }
}

export default App