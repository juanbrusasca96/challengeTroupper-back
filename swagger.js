require('dotenv').config();
const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
      title: 'My API',
      description: 'Description'
    },
    host: `localhost:${process.env.PORT}`,
    securityDefinitions: {
      apiKeyAuth: {
        type: 'apiKey',
        in: 'header', // can be 'header', 'query' or 'cookie'
        name: 'access_token', // name of the header, query parameter or cookie
      }
    }
  };

const outputFile = './swagger_output.json'
const endpointsFiles = ['./routes/*.js']

swaggerAutogen(outputFile, endpointsFiles, doc)