import React from 'react'
import './Movie.css'

const Movie = ({id, title, poster, showMovie}) => {

    return (
        <img
            className='image'
            src={poster}
            alt={title}
            id={id}
            onClick={(event) => showMovie(event.target.id)}
        />
    )
}

export default Movie