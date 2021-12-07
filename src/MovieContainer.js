import React from 'react'
import Movie from './Movie'
import './MovieContainer.css'

const MovieContainer = ({movies, showMovie}) => {
    const movieElements = movies.map(movie => {
        return <Movie 
            key={movie.id}
            id={movie.id}
            poster={movie.poster_path}
            title={movie.title}
            showMovie={showMovie}
            />
    })

    return (
        <div className='movie-container'>
            {movieElements}
        </div>
    )
}

export default MovieContainer