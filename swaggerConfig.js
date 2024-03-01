// En un archivo como swaggerConfig.js

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json')

function swaggerDocs(app) {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
}

module.exports = swaggerDocs;
