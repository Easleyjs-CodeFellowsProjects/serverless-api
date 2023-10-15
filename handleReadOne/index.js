'use strict';

const dynamoose = require('dynamoose');

const comicsSchema = new dynamoose.Schema({
  id: Number,
  title: String,
  bookValue: Number,
  rarity: String,
});

// create our 'Model'
const comicsModel = dynamoose.model('comics', comicsSchema);

exports.handler = async (event) => {

  let results = await comicsModel.query('id').eq(parseInt(event.pathParameters.id)).exec();

  const response = {
    statusCode: 200,
    body: JSON.stringify(results),
  };
  return response;
};