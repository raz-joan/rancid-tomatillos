import React from 'react'
import Movie from './Movie'
import './MovieContainer.css'
import { useParams, Link } from 'react-router-dom';


const MovieContainer = ({movies, showMovie}) => {
    const movieElements = movies.map(movie => {
        return( 
        <Link to={`/${movie.id}`} key={movie.id}>
            <Movie 
                key={movie.id}
                id={movie.id}
                poster={movie.poster_path}
                title={movie.title}
                showMovie={showMovie}
                />
        </Link>
        )
    })

    return (
        <div className='movie-container'>
            {movieElements}
        </div>
    )
}

export default MovieContainer