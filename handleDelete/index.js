'use strict';

const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DeleteCommand, DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb");
const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

exports.handler = async (event) => {
  let response = {}

  if ( event.id === undefined ) {
    response = {
      statusCode: 500,
      body: { "error": "Not enough information to complete update." },
    };
  }

  const id = event.pathParameters.id;

  const command = new DeleteCommand({
    TableName: "comics",
    Key: {
      id: parseInt(id)
    },
  });

  const result = await docClient.send(command);
  console.log(result);

  response = {
    statusCode: 200,
    body: JSON.stringify( result.body ),
  };
  return response;
};