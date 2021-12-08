import React, { Component } from 'react'
import './App.css'
import MovieContainer from './MovieContainer'
import Wrapper from './MovieCard'
import {Route, Routes, Link} from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      error: ''
    }
  }

  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ movies: data.movies, error: '' })
      })
      .catch((err) => {
        this.setState({ error: err.message })
      })
  }

  render() {
    if (this.state.error) {
      return (
        <h2>Oops, something went wrong. Try again later. Error: '{this.state.error}'</h2>
      )
    }
    
    return (
      <>
        <header className='header'>
          <Link to='/'>
            <img
              className='title'
              src="https://fontmeme.com/permalink/211204/cca36d9d02af58d8feae92729d642f28.png"
              alt="Rancid Tomatillos Title"
            />
          </Link>
        </header>
        <main className='body'>
          <Routes>
            <Route path="/" element={<MovieContainer 
              movies={this.state.movies}
              showMovie={this.showMovie} />}
            />
            <Route path="/:movieId" element={<Wrapper />} />
          </Routes>
        </main>
      </>
    )
  }
}

export default App