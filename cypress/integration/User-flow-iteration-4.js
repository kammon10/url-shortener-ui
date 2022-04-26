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

     it('When a user fills out and submits the form, the new shortened URL is rendered', () => {
          cy.intercept('http://localhost:3001/api/v1/urls', testData)
          cy.visit('http://localhost:3000/')
          .get('.title-input').type('Awesome photo')
          .get('.longUrl-input').type("https://images.unsplash.com/photo-1531898418865-480b7090470f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80")
          .get('.submit').click()
          .get('.url').contains('http://localhost:3001/useshorturl/1')
     })   
})