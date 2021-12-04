import React from 'react'
import Movie from './Movie'
import MovieInfo from './MovieInfo'


const MovieCard =(props) => {
    return (
      <article>
        <Movie poster={props.movie.poster_path} title={props.movie.title}/>
        <MovieInfo title={props.movie.title} date={props.movie.release_date} rating={props.movie.average_rating}/>
       
        <iframe width="560" height="315" src="https://www.youtube.com/embed/ozUuAcGOhPs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <button onClick={() => props.showMain()}>Return</button>
      </article>
    )
}


export default MovieCard