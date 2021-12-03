import React from 'react'
import Movie from './Movie'


const MovieCard =(props) => {
    return (
      <article>
        {/* <Movie poster={movie.poster_path} title={movie.title}/> */}
        {/* <video controls width="500" src="https://www.youtube.com/watch?v=ozUuAcGOhPs">
          {/* <source src="https://www.youtube.com/watch?v=ozUuAcGOhPs" /> */}
          Sorry, your browser doesn't support embedded videos.
        {/* </video> */} */
        <iframe src='https://www.youtube.com/watch?v=ozUuAcGOhPs'
        // frameborder='0'
        // allow='autoplay; encrypted-media'
        // allowfullscreen
        title='video'
/>
      </article>
    )
}


export default MovieCard