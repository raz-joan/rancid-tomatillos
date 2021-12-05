import React from 'react'
import Movie from './Movie'
import MovieInfo from './MovieInfo'
import './MovieCard.css'


const MovieCard =(props) => {
    return (
      <article className='movie-card-section'>
        <div className='movie-card-top-section'>
          <div className='movie-card-poster'>
            <Movie 
            poster={props.movie.poster_path} 
            title={props.movie.title} 
            key={Date.now()}/>
          </div>
          <div className='movie-card-info'>
            <MovieInfo 
            key={Date.now() + 1} 
            title={props.movie.title} 
            date={props.movie.release_date} 
            rating={props.movie.average_rating} 
            summary={props.movie.overview} 
            runtime={props.movie.runtime} 
            genre={props.movie.genres} />
          </div>
        </div>
        <div className='trailer-section'>
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${props.trailer}`} title="YouTube video player" frameBorder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>  
          </iframe>
          <img className='back-img' src="https://fontmeme.com/permalink/211205/3aa3c3b8f115a7f3c42e0de18d43b8de.png" alt="squid-game-font" border="0" onClick={() => props.showMain()} />
        </div>
      </article>
    )
}


export default MovieCard