'use strict';

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { UpdateCommand, DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");
const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

exports.handler = async (event) => {
  let response = {}

  if ( event.id === undefined || event.id === null || ( event.title === null && event.value === null && event.rarity === null )) {
    response = {
      statusCode: 500,
      body: { "error": "Not enough information to complete update." },
    };
  }

  let updateExpression = "set "

  const eventBody = await JSON.parse(event.body);

  const id = event.pathParameters.id;
  const title = eventBody.title;
  const bookValue = eventBody.bookValue;
  const rarity = eventBody.rarity;

  const updateValues = {};

  if ( title ) {
    updateExpression = updateExpression + 'title = :title ';
    updateValues[':title'] = title
  };
  
  if ( bookValue ) {
    updateExpression = updateExpression + ', bookValue = :bookValue ';
    updateValues[':bookValue'] = parseInt(bookValue)
  };
  
  if ( rarity ) {
    updateExpression = updateExpression + ', rarity = :rarity';
    updateValues[':rarity'] = rarity
  };

  updateExpression = updateExpression.replace(/set \,/, 'set ');

  console.log(updateExpression);

  const command = new UpdateCommand({
    TableName: "comics",
    Key: {
      id: parseInt(id),
    },
    UpdateExpression: updateExpression,
    ExpressionAttributeValues: updateValues,
    ReturnValues: "ALL_NEW",
  });
  
  const result = await docClient.send(command);

  response = {
    statusCode: 200,
    body: JSON.stringify({ id, title, bookValue, rarity }),
  };
  return response;
};
