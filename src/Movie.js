import React from 'react'
import './Movie.css'

const Movie = (props) => {

    return (
        <img
            className='image'
            src={props.poster}
            alt={props.title}
            id={props.id}
            onClick={(event) => props.showMovie(event.target.id)}
        />
    )
}

export default Movie