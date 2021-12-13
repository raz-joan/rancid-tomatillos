import React from 'react'
import './Movie.css'

const Movie = ({ id, title, poster }) => {

    return (
        <img
            className='image'
            src={poster}
            alt={title}
            id={id}
        />
    )
}

export default Movie