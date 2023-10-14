'use strict';

const { handler } = require('./index.js');

describe('Testing the createComic lambda', () => {
  test('Should be able to create a comic with the given body data', async () => {

    const mockEventObj = {
        'title': 'X-Force #2',
        'rarity': 'Common',
        'value': '35'
    };

    let response = await handler(mockEventObj);
    
    expect(response.statusCode).toEqual(201);
    console.log(response);
    //let responseBody = JSON.parse(response);
    
    //expect(responseBody).toBeTruthy();
  });
})