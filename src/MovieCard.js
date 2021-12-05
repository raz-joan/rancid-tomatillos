import React from 'react'
import './MovieCard.css'

const MovieCard = (props) => {
  const genreTypes = props.movie.genres.map((type, index) => {
    return (
      <p key={index}>{type}</p>
    )
  })

  return (
    <article className='movie-card-section'>
      <div className='movie-card-top-section'>
        <div className='movie-card-poster'>
          <img
            src={props.movie.poster_path}
            alt={props.movie.title}
          />
        </div>
        <div className='movie-card-info'>
          <article className='movie-info'>
            <h2>{props.movie.title}</h2>
            <p className='sub-detail'>Release Date: {props.movie.release_date}</p>
            <p className='sub-detail'>Rating: {(props.movie.average_rating).toFixed(1)}</p>
            <p className='sub-detail'>Runtime: {props.movie.runtime} min</p>
            <div className='genre'>Genre(s): {genreTypes}</div>
            <p className='summary'>{props.movie.overview}</p>
          </article>
        </div>
      </div>
      <div className='trailer-section'>
        <iframe
          src={`https://www.youtube.com/embed/${props.trailer}`}
          title="YouTube video player"
          frameBorder="2"
        >
        </iframe>
        <img
          className='back-img'
          src="https://fontmeme.com/permalink/211205/3aa3c3b8f115a7f3c42e0de18d43b8de.png"
          alt="return to main page button"
          onClick={() => props.showMain()}
        />
      </div>
    </article>
  )
}


export default MovieCard