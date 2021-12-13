import React, { Component } from 'react'
import './App.css'
import MovieContainer from './MovieContainer'
import Wrapper from './MovieCard'
import {Route, Routes, Link} from 'react-router-dom'
import apiCalls from './apiCalls'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      error: '',
      search: '',
      filteredMovies: []
    }
  }

  componentDidMount = () => {
    apiCalls.fetchInfo('')
      .then(data => {
        if (data.movies) {
          this.setState({ movies: data.movies, error: '' })
        } else {
          this.setState({ error: data.message })
        }
      })
  }

  handleChange = event => {
    this.setState({search: event.target.value})
    const searchedMovies = this.state.movies.filter(movie => {
      return movie.title.toLowerCase().includes(`${ event.target.value.toLowerCase() }`)
    })
    this.setState({ filteredMovies: searchedMovies })
    if (!event.target.value) {
      this.setState({ filteredMovies: [] })
    }
  }

  clearSearch = () => {
    this.setState({search: '', filteredMovies: []})
  }

  render() {
    if (this.state.error) {
      return (
        <h2 className='error'>Oops, something went wrong: '{this.state.error}'</h2>
      )
    }

    if (!this.state.movies[0]) {
      return <h2 className="loading">LOADING...</h2>
    }

    return (
      <>
        <header className='header'>
          <Link to='/'>
            <img
              className='title'
              src="https://fontmeme.com/permalink/211204/cca36d9d02af58d8feae92729d642f28.png" 
              onClick={event => this.clearSearch()}
              alt="Rancid Tomatillos Title"
            />
          </Link>
          <input
            type='text'
            placeholder='Search by Movie Title'
            name='search'
            value={this.state.search}
            onChange={event => this.handleChange(event)}
          />
        </header>
        <main className='body'>
          <Routes>
            <Route path="/" element={<MovieContainer 
              movies={this.state.filteredMovies.length ? this.state.filteredMovies : this.state.movies}
            />}
            />
            <Route path="/:movieId" element={<Wrapper />} />
          </Routes>
        </main>
      </>
    )
  }
}

export default App