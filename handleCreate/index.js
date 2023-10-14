'use strict';

const chance = require('chance').Chance();

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { PutCommand, DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

exports.handler = async (event) => {

  const newComic = {
    'id' : chance.integer({ min: 20, max: 9999999 }),
    'title' : event.title,
    'value' : parseInt(event.value), // maybe I don't have to use String now
    'rarity': event.rarity
  };

  const command = new PutCommand({
    TableName: 'comics',
    Item: newComic,
  });
  
  const result = await docClient.send(command);

  const response = {
    statusCode: 201,
    body: JSON.stringify(newComic),
  };
  return response;
};
