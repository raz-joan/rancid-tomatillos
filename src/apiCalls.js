let apiCalls = {

    allMovies() {
        return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
            .then((res) => res.json())
            .catch((err) => err)
    },

    singleMovie(movieID) {
        return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}`)
        .then(res => {
            if (res.ok) {
              return res.json()
            } else {
              throw new Error()
            }
        })
        .catch((err) => err)
    },

    singleMovieVideo(movieID) {
        return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieID}/videos`)
        .then((res) => res.json())
        .catch((err) => err)
    }
}

export default apiCalls