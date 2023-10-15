'use strict';

const dynamoose = require('dynamoose');

// define our schema
const comicsSchema = new dynamoose.Schema({
  id: Number,
  title: String,
  bookValue: Number,
  rarity: String,
});

// create our 'Model'
const comicsModel = dynamoose.model('comics', comicsSchema); // the first argument shuold match the table name on dynamoDB.

exports.handler = async (event) => {
  console.log('HERE IS THE EVENT OBJECT', event);
  // TODO implement
  console.log('HERE are the path parameters', event.pathParameters);

    //.query('id').eq(1).exec();
  let results = await comicsModel.scan().exec();

  const response = {
    statusCode: 200,
    body: JSON.stringify(results),
  };
  return response;
};

