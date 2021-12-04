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
      id: '',
      movie: {}
    }
  }

  showMain = () => {
    this.setState({id: ''})
  }

  showMovie = (idNum) => {
    const foundMovie = this.state.movies.find(movie => {
      return movie.id === parseInt(idNum)
    })
    console.log(foundMovie)
    this.setState({id: idNum, movie: foundMovie})
  }

  render() {
    return (
      <main>
        <header>
        <img src="https://fontmeme.com/permalink/211204/cca36d9d02af58d8feae92729d642f28.png" alt="squid-game-font" border="0" />
        </header>
        {this.state.id ? <MovieCard movie={this.state.movie} showMain={this.showMain}/> : <MovieContainer movies={this.state.movies} showMovie={this.showMovie} />
        }
      </main>
    )
  }
}

export default App