import {faker} from '@faker-js/faker'

let authToken

const data = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password()
}

const loginData = {
    email: 'warda@gmail.com',
    password: '123456'
}

describe('API mocking',()=>{
    it('Using GET request',()=>{
        cy.request('GET', 'https://practice.expandtesting.com/notes/api/health-check')
        .then((response) => {
        if (response.status !== 200) {
          throw new Error('Bad request');
        }
        //log the responses
        cy.log(response.body.status)
        cy.log(response.body.message)
        cy.log(response.body.success)
        //assert the responses
        expect(response.body.status).to.equal(200);
        expect(response.body.message).to.equal('Notes API is Running');
        expect(response.body.success).to.be.true;
      });
    })

    it('Using POST request',()=>{
        cy.request({
            method: 'POST',
            url: 'https://practice.expandtesting.com/notes/api/users/register',
            body: data,
          })
        .then((response) => {
        if (response.status !== 201) {
          throw new Error('Bad Request');
        }
        //log the responses
        cy.log(response.body.status)
        cy.log(response.body.message)
        cy.log(response.body.success)
        //assert the responses
        expect(response.body.status).to.equal(201);
        expect(response.body.message).to.equal('User account created successfully');
        expect(response.body.success).to.be.true;
      });
    })

    it('Using Delete request with then chain', () => {
        cy.request({
            method: 'POST',
            url: 'https://practice.expandtesting.com/notes/api/users/login',
            body: loginData,
        }).then((loginResponse) => {
            expect(loginResponse.body.status).to.equal(200);
            authToken = loginResponse.body.data.token;
            cy.log(authToken)
            cy.request({
                method: 'DELETE',
                url: 'https://practice.expandtesting.com/notes/api/users/logout',
                headers: {
                    'x-auth-token': authToken,
                },
            }).then((deleteResponse) => {
                expect(deleteResponse.status).to.equal(200);
                cy.log('Account deletion response:', deleteResponse.body);
            });
        })
    })

    it.only('Create a note with POST request and update completed attribute with PATCH request', () => {
        // Define the data for creating a new note
        const newNoteData = {
          title: 'New Note Title',
          description: 'Description of the new note',
          category: 'Category of the new note'
          // Add other necessary fields as required
        };
      
        // POST request to create a new note
        cy.request({
          method: 'POST',
          url: 'https://practice.expandtesting.com/notes/api/notes', // Replace with the actual endpoint URL for creating notes
          body: newNoteData,
        }).then((postResponse) => {
          expect(postResponse.status).to.equal(200); // Assuming 201 is the successful creation status code
      
          // Extract the created note ID from the response body
          const noteId = postResponse.body.id; // Adjust according to your API response structure
      
          // PATCH request to update the completed attribute of the created note
          const updatedCompletedValue = true; // New value for the completed attribute
          cy.request({
            method: 'PATCH',
            url: `https://practice.expandtesting.com/notes/api/notes/${noteId}`, // Replace with the endpoint for updating notes
            body: {
              completed: updatedCompletedValue,
              // Include other fields if required for the update
            },
          }).then((patchResponse) => {
            expect(patchResponse.status).to.equal(200); // Adjust status code as per your API's response
      
            // Check the response or perform additional assertions if needed
            cy.log('Note update response:', patchResponse.body);
          });
        });
      });
      
      
})