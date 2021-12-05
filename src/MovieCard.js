import React from 'react'
import Movie from './Movie'
import MovieInfo from './MovieInfo'


const MovieCard =(props) => {
    return (
      <article>
        <Movie poster={props.movie.poster_path} title={props.movie.title} key={Date.now()}/>
        <MovieInfo key={Date.now() + 1} title={props.movie.title} date={props.movie.release_date} rating={props.movie.average_rating} summary={props.movie.overview} runtime={props.movie.runtime} genre={props.movie.genres} />
       
        <iframe width="560" height="315" src={`https://www.youtube.com/embed/${props.trailer}`} title="YouTube video player" frameBorder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        <button onClick={() => props.showMain()}>Return</button>
      </article>
    )
}


export default MovieCard