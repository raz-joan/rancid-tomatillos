import React, { Component } from 'react'
import './App.css'
import MovieContainer from './MovieContainer'
import Wrapper from './MovieCard'
import {Route, Routes, Link} from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: []
      // movie: {
      //   id: '',
      //   title: '',
      //   poster_path: '',
      //   release_date: '',
      //   average_rating: 0,
      //   genres: [],
      //   overview: '',
      //   runtime: ''
      // },
      // trailer: '',
      // error: ''
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

  // showMovie = (idNum) => {

  //   fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${idNum}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.setState({ movie: data.movie, error: '' })
  //     })
  //     .catch((err) => {
  //       this.setState({ error: err.message })
  //     })
  //   fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${idNum}/videos`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const trailerId = data.videos.find(video => video.type === 'Trailer')
  //       this.setState({ trailer: trailerId.key, error: '' })
  //     })
  //     .catch((err) => {
  //       this.setState({ error: err.message })
  //     })
  // }

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
            {/* <Route path="/:movieId" element={<MovieCard
              movie={this.state.movie} 
              trailer={this.state.trailer} />}
            /> */}
            {/* {this.state.movies.map(movie => {
              return (
                <Route key={movie.id} path={`/${movie.id}`} element={
                  <MovieCard
                    movie={this.state.movie}
                    trailer={this.state.trailer}
                  />}
                />
              )
            })} */}
            <Route path="*" element={<h2>404 Error Baby!</h2>}/>
          </Routes>
        </main>
      </>
    )
  }
}

export default App