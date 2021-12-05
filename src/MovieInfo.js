import React from 'react'
import './MovieInfo.css'

const MovieInfo = (props) => {
  const genreType = props.genre.map(type => {
    return (
      <p>{type}</p>
    )
  })
  return (
    <article className='movie-info'>
      <h2 className='title'>{props.title}</h2>
      <p className='sub-detail'>Release Date: {props.date}</p>
      <p className='sub-detail'>Rating: {(props.rating).toFixed(1)}</p>
      <p className='sub-detail'>Runtime: {props.runtime} min</p>
      <div className='genre'>{genreType}</div>
      <p className='summary'>{props.summary}</p>
    </article>
  )
}


export default MovieInfo