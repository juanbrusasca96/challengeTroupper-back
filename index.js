require('dotenv').config();
const app = require("./app.js");
const db = require("./models/index.js");
const swaggerDocs = require('./swaggerConfig.js');

// Syncing all the models at once.
// {force: true}
db.sequelize.sync({ force: false }).then(() => {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`Server connected to http://localhost:${process.env.PORT}`);
    })
    swaggerDocs(app)
  } catch (error) {
    console.log('Cannot connect to the server')
  }
}).catch(error => {
  console.log("Invalid database connection...!");
})
