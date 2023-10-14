'use strict';

const dynamoose = require('dynamoose');
const chance = require('chance').Chance();

const comicsSchema = new dynamoose.Schema({
  id: Number,
  title: String,
  value: Number,
  rarity: String,
});

const comicsModel = dynamoose.model('comics', comicsSchema);

exports.handler = async (event) => {
    const { title, value, rarity } = event.body;

    let newComic = {
        id: chance.integer({ min: 20, max: 9999999 }),
        title,
        value: parseInt(value),
        rarity
    };

  let results = await comicsModel.create(newComic);

  const response = {
    statusCode: 201,
    body: JSON.stringify(results),
  };
  return response;
};