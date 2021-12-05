import React from 'react'
import './MovieCard.css'

const MovieCard = (props) => {
  const genreType = props.movie.genres.map((type, index) => {
    return (
      <p key={index}>{type}</p>
    )
  })
  return (
    <article>
      <img
        src={props.movie.poster_path}
        alt={props.movie.title}
        width='250px'
        height='350px'
      />
      <article>
        <h2>{props.movie.title}</h2>
        <p>Release Date: {props.movie.release_date}</p>
        <p>Rating: {(props.movie.average_rating).toFixed(1)}</p>
        <p>Runtime: {props.movie.runtime} min</p>
        <div>Genre(s): {genreType}</div>
        <p>{props.movie.summary}</p>
      </article>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${props.trailer}`}
        title="YouTube video player"
        frameBorder="2">
      </iframe>
      <button onClick={() => props.showMain()}>Return</button>
    </article>
  )
}

export default MovieCard