import React from 'react'
import Movie from './Movie'
import './MovieContainer.css'

const MovieContainer = (props) => {
    const movieElements = props.movies.map(movie => {
        return <Movie poster={movie.poster_path} title={movie.title}/>
    })

    return (
        <div className='movie-container'>
            {movieElements}
        </div>
    )
}

export default MovieContainer