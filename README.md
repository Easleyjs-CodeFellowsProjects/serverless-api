# serverless-api
Lab 18 - An AWS API Gateway -> Lambda -> DynamoDB app

## Dependencies
- dynamoose
- jest

## Installation
npm install

# Requirements
Create a single resource REST API using a domain model of your choosing, constructed using AWS Cloud Services.

**Database: DynamoDB**
1 Table required.

**Routing: API Gateway**

**POST**
/comics - Given a JSON body, inserts a record into the database.
returns an object representing one record, by its id (##).

**GET**
/comics - returns an array of objects representing the records in the database.
/people/## - returns an object representing one record, by its id (##).

**PUT**
/comics/## - Given a JSON body and an ID (##), updates a record in the database.
returns an object representing one record, by its id (##).

**DELETE**
/comics/## - Given an id (##) removes the matching record from the database.
returns an empty object.

**CRUD Operation Handlers:** Lambda Functions