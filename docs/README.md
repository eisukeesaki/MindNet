# MindNet

This is a backend server (RESTful API) for a mind map web application.

## Functionalities

### CRUD mind map data

### Data and data store

Mind map data is represented and stored as a tree data structure in [Amazon RDS for PostgreSQL](https://aws.amazon.com/rds/postgresql).

### Data manipulation

Controllers and services work together to read/write data from and to the PostgreSQL database and respond appropriately to the client.

Files in `/api/src/controllers` orchestrate the process of responding to a client with requested data. The process includes error handling.

Files in `/api/src/services` interfaces the PostgreSQL database. These service functions construct SQL statements, send queries to the database, and return the outcome of the queries to the controller function that invoked itself. A PostgreSQL client, [node-postgres](https://github.com/brianc/node-postgres) is used to interface the database.

### Data validation

A set of functions defined in `api/src/utils/request-validation.js` cleans the data received from the client before passing them on to the next middleware.

### Logging

The server writes operational logs to the standard output and a JSON file mainly for debugging purposes. Logger used is [bunyan](https://github.com/trentm/node-bunyan).

### [Sign in With Google](https://developers.google.com/identity/gsi/web/guides/overview)

The server uses [Sign in With Google](https://developers.google.com/identity/gsi/web/guides/overview) to authenticate its clients. It utilizes middlewares from the Passport.js library to talk with Google's authorization and resource servers.

### Login session management

The server uses [express-session](https://github.com/expressjs/session) to manipulate login sessions and Redis to store the session data. The server can send a persistent cookie containing an encrypted session identifier which the client can send back to the server in successive requests.

## Production environment

The application is deployed on AWS as an EC2 instance running Ubuntu Server.

## DNS

Cloud DNS service by [Amazon Route 53](https://aws.amazon.com/route53) is used to point the domain name to the EC2 instance.

