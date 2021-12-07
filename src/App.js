import React, { Component } from 'react'
import './App.css'
import MovieContainer from './MovieContainer'
import MovieCard from './MovieCard'
import {Route, Routes, Link} from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      movie: {},
      trailer: '',
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
    
  // showMain = () => {
  //   this.setState({id: ''})
  // }

  showMovie = (idNum) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${idNum}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.movie, 'data.movie')
        this.setState({ movie: data.movie, error: '' })
      })
      .catch((err) => {
        this.setState({ error: err.message })
      })
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${idNum}/videos`)
      .then((res) => res.json())
      .then((data) => {
        const trailerId = data.videos.find(video => video.type === 'Trailer')
        this.setState({ trailer: trailerId.key, error: '' })
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
          <img
            className='title'
            src="https://fontmeme.com/permalink/211204/cca36d9d02af58d8feae92729d642f28.png"
            alt="Rancid Tomatillos Title"
            
          />
        </header>
        <main className='body'>
          <Routes>
            <Route path="/" element={<MovieContainer 
              movies={this.state.movies}
              showMovie={this.showMovie} />} />

            <Route path="/:movieId" element={<MovieCard
              movie={this.state.movie} 
              trailer={this.state.trailer} />} />
          </Routes>
          {/* {this.state.id ? 
            <MovieCard 
              movie={this.state.movie} 
              trailer={this.state.trailer} 
              showMain={this.showMain}
            /> :
            <MovieContainer 
              movies={this.state.movies} 
              showMovie={this.showMovie}
            /> */}
          }
        </main>
      </>
    )
  }
}

export default App