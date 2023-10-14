'use strict';

const { handler } = require('./index.js');

describe('Testing the createComic lambda', () => {
  test('Should be able to create a comic with the given body data', async () => {

    const mockEventObj = {
      'body': {
        'title': 'Uncanny X-Men #300',
        'rarity': 'Common',
        'value': '150'
      }
    };

    let response = await handler(mockEventObj);
    
    expect(response.statusCode).toEqual(201);
    
    let responseBody = JSON.parse(response.body);
    
    expect(responseBody).toBeTruthy();
  });
})