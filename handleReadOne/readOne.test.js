'use strict';

const { handler } = require('./index.js');

describe('Testing the readComics lambda', () => {
  test('Should return a comic with the given id', async () => {

    const mockEventObj = {
      'pathParameters': {
        'id': 1 
      }
    };

    let response = await handler(mockEventObj);
    
    console.log(response);
    
    expect(response.statusCode).toEqual(200);
    
    let responseBody = JSON.parse(response.body);
    
    expect(responseBody[0]).toBeTruthy();
  });
})