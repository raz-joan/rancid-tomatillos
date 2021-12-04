import React from 'react'
import './Movie.css'

const Movie = (props) => {

    return (
        
        <img src={props.poster} alt={props.title} width='250px' height='350px' id={props.id} onClick={(event) => props.showMovie(event.target.id)}/>
    )
}

export default Movie