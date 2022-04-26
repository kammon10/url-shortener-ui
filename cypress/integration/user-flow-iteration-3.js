describe('User flow for iteration 3', () => {
     let testData;

     beforeEach(() => {
          testData = {
               "urls": [
{
"id": 1,
"long_url": "https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
"short_url": "http://localhost:3001/useshorturl/1",
"title": "Awesome photo"
} ]
          }
     })

     it('When a user visits the page, they can view the page title and the existing shortened URLs', () => {
          cy.visit('http://localhost:3000/')
          cy.intercept('http://localhost:3001/api/v1/urls', testData)
          .get('h1').contains('URL Shortener')
     })

     it('When a user visits the page, they can view the Form with the proper inputs', () => {
          cy.visit('http://localhost:3000/')
          cy.intercept('http://localhost:3001/api/v1/urls', testData)
          .get('.title-input').should('exist')
          .get('.longUrl-input').should('exist')
     })


     it('When a user fills out the form, the information is reflected in the input fields', () => {
          cy.visit('http://localhost:3000/')
          cy.intercept('http://localhost:3001/api/v1/urls', testData)
          .get('.title-input').type('Awesome photo')
          .get('.longUrl-input').type("https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")
     })
})