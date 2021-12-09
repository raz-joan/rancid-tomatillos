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
    cy.get('.movie-container').find('img').should('have.attr', 'id').should('include', '694919')
    cy.get('.movie-container').find('img').should('have.attr', 'id').should('include', '337401')
    cy.get('.movie-container').find('img').should('have.attr', 'id').should('include', '718444')

  })
})