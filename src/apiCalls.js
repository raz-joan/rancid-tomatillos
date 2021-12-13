let apiCalls = {

    fetchInfo(path) {
        return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${path}`)
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error('Server is down, try again later!')
                }
            })
            .catch(err => err)
            
    }
}

export default apiCalls