import React from 'react'
import Movie from './Movie'
import MovieInfo from './MovieInfo'


const MovieCard =(props) => {
    return (
      <article>
        <Movie poster={props.movies[1].poster_path} title={props.movies[1].title}/>
        <MovieInfo />
       
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ozUuAcGOhPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <button onClick={() => props.showMain()}>Return</button>
      </article>
    )
}


export default MovieCard