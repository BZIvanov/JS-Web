const express = require('express');
const bodyParser = require('body-parser');
const feedRoutes = require('./routes/feed');
require('./database/database')();
const port = 9999;
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});
app.use('/feed', feedRoutes);

// General error handling
app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({
    message: message
  });
  next();
})

app.listen(port, () => {
  console.log(`REST API listening on port: ${port}`)
});

// Start the server by typing in the terminal >>> 'node index'