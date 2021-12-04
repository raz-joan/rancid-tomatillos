import React, { Component } from 'react'
import './App.css'
import movieData from './movieData'
import MovieContainer from './MovieContainer'
import MovieCard from './MovieCard'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData.movies,
      id: ''
    }
  }

  showMain = () => {
    this.setState({id: ''})
  }

  showMovie = (idNum) => {
    console.log(idNum, "idnum")
    this.setState({id: idNum})
  }

  render() {
    return (
      <main>
        <header>
          <h1>Rancid Tomatillos</h1>
        </header>
        {this.state.id ? <MovieCard movies={this.state.movies} showMain={this.showMain}/> : <MovieContainer movies={this.state.movies} showMovie={this.showMovie} />
        }
      </main>
    )
  }
}

export default App