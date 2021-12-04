import React from 'react'

const MovieInfo = (props) => {
  return (
    <article>
      <h2>{props.title}</h2>
      <p>{props.date}</p>
      <p>{props.rating}</p>
    </article>
  )
}


export default MovieInfo