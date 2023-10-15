'use strict';

const { handler } = require('./index.js');

describe('Testing the updateComic lambda', () => {
  test('Should be able to update a comic with the given body data', async () => {

    const mockEventObj = {
        'id': 5,
        'title': 'Spider-Man #2',
        'rarity': 'Common',
    };

    let response = await handler(mockEventObj);
    
    expect(response.statusCode).toEqual(200);
    console.log(response);
    //let responseBody = JSON.parse(response);
    
    //expect(responseBody).toBeTruthy();
  });
})