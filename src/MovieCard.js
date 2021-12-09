import React, { Component } from 'react'
import './MovieCard.css'
import { Link, useParams } from 'react-router-dom'

const Wrapper = () => {
  const movieID = useParams().movieId

  class MovieCard extends Component {
    constructor() {
      super()
      this.state = {
        movie: {
          id: '',
          title: '',
          poster_path: '',
          release_date: '',
          average_rating: 0,
          genres: [],
          overview: '',
          runtime: ''
        },
        trailer: '',
        error: ''
      }
    }

    componentDidMount = () => {
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
        .then(res => {
          if (res.ok) {
            return res.json()
          } else {
            throw new Error()
          }
        })
        .then((data) => {
          this.setState({ movie: data.movie, error: '' })
        })
        .catch((err) => {
          this.setState({ error: err.message })
        })
      fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}/videos`)
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
          <h2 classsName='error'>404: Movie Not Found</h2>
        )
      }

      if (!this.state.movie.title) {
        return <h2 className="loading">LOADING...</h2>
      }

      return (
        <article className='movie-card-section'>
          <div className='movie-card-top-section'>
            <div className='movie-card-poster'>
              <img
                src={this.state.movie.poster_path}
                alt={this.state.movie.title}
              />
            </div>
            <div className='movie-card-info'>
              <article className='movie-info'>
                <h2>{this.state.movie.title}</h2>
                <p className='sub-detail'>Release Date: {this.state.movie.release_date}</p>
                <p className='sub-detail'>Rating: {(this.state.movie.average_rating).toFixed(1)}</p>
                <p className='sub-detail'>Runtime: {this.state.movie.runtime} min</p>
                <div className='genre'>Genre(s): {
                  this.state.movie.genres.map((type, index) => <p key={index}>{type}</p>)}
                </div>
                <p className='summary'>{this.state.movie.overview}</p>
              </article>
            </div>
          </div>
          <div className='trailer-section'>
            <iframe
              src={`https://www.youtube.com/embed/${this.state.trailer}`}
              title="YouTube video player"
              frameBorder="2"
            >
            </iframe>
            <Link to="/">
              <img
                className='back-img'
                src="https://fontmeme.com/permalink/211205/3aa3c3b8f115a7f3c42e0de18d43b8de.png"
                alt="return to main page button"
              />
            </Link>
          </div>
        </article>
      )
    }
  }

  return (
    <>
      <MovieCard />
    </>
  )
}


export default Wrapper