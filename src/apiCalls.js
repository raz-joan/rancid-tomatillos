let apiCalls = {

    allMovies() {
        return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
            .then((res) => res.json())
            .catch((err) => err)
    }
}

export default apiCalls