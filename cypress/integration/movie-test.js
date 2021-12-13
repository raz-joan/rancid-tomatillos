describe('Main page', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      "movies": [
        {
        "id": 694919,
        "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        "title": "Money Plane",
        "average_rating": 6.625,
        "release_date": "2020-09-29"
        },
        {
        "id": 337401,
        "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
        "title": "Mulan",
        "average_rating": 5.2727272727272725,
        "release_date": "2020-09-04"
        },
        {
        "id": 718444,
        "poster_path": "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
        "title": "Rogue",
        "average_rating": 6.166666666666667,
        "release_date": "2020-08-20"
        }
      ]
    })       
    .visit('http://localhost:3000')

  })

  it('should display Rancid Tomatillos main page', () => {
    cy.get('header').find('img').should('have.attr', 'src').should('include', 'https://fontmeme.com/permalink/211204/cca36d9d02af58d8feae92729d642f28.png')
  })

  it('should display 3 movie posters', () => {
    cy.get('.movie-container').find('[id=694919]')
    .get('.movie-container').find('[id=337401]')
    .get('.movie-container').find('[id=718444]')
  })

  it('should display movie details of movie clicked and return home if back is clicked', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919',{
      movie:{
        average_rating: 6.625,
        backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        budget: 0,
        genres: ['Action'],
        id: 694919,
        overview: "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
        poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        release_date: "2020-09-29",
        revenue: 0,
        runtime: 82,
        tagline: "",
        title: "Money Plane"
      }
  })
    .intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919/videos', {
      videos: [{
        id: 330,
        key: "aETz_dRDEys",
        movie_id: 694919,
        site: "YouTube",
        type: "Trailer"}]
    })
    .get('.movie-container').find('[id=694919]').click()
    .url().should('include', '/694919')

    .get('.movie-card-poster').find('img').should('have.attr', 'src').should('include', 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg')    
    .get('h2').contains('Money Plane')
    .get('.sub-detail').contains('82 min')
    .get('.trailer-section').find('iframe').should('have.attr', 'src').should('include', "https://www.youtube.com/embed/aETz_dRDEys")

    .get('.back-img').click()
    .url().should('include', '/')

    .get('.movie-container').find('[id=694919]')
    .get('.movie-container').find('[id=337401]')
    .get('.movie-container').find('[id=718444]')
  })

  it('should search for a movie and display all movies when search is cleared', () => {
    cy.get('.movie-container').find('[id=694919]')
    .get('.movie-container').find('[id=337401]')
    .get('.movie-container').find('[id=718444]')

    .get('input').type('money')
    .get('.movie-container').find('[id=694919]')
    .get('.movie-container').find('[id=337401]').should('not.exist')
    .get('.movie-container').find('[id=718444]').should('not.exist')

    .get('input').clear()
    .get('.movie-container').find('[id=694919]')
    .get('.movie-container').find('[id=337401]')
    .get('.movie-container').find('[id=718444]')
  })

  it('should have sad paths', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/00001',{
        "error": "No movie found with id:00001"
    })
    .visit('http://localhost:3000/00001')
    .get('.error').contains('404: Movie Not Found')
  })
})