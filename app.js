const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swaggerConfig.js');
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index.js');
const morgan = require('morgan');
const app = express();

app.use(express.json());

app.use('/', indexRouter);

// app.use('/api-docs/', swaggerUi.serve, swaggerUi.setup(specs));

app.use(cors());
app.use(cookieParser());
app.use(morgan('dev'));


// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
//   res.header('Access-Control-Allow-Credentials', 'true');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//   next();
// });

module.exports = app;
