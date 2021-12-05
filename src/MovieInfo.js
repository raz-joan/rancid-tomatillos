import React from 'react'

const MovieInfo = (props) => {
  const genreType = props.genre.map(type => {
    return (
      <p>{type}</p>
    )
  })
  return (
    <article>
      <h2>{props.title}</h2>
      <p>Release Date: {props.date}</p>
      <p>Rating: {(props.rating).toFixed(1)}</p>
      <p>Runtime: {props.runtime} min</p>
      <div>{genreType}</div>
      <p>{props.summary}</p>
    </article>
  )
}


export default MovieInfo