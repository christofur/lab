const express = require('express');
const logging = require('morgan');

// Create and configure the application
const app = express();
app.set('port', 3000);
app.use(logging('combined'));

// Get a Router instance
const router = express.Router();

const logToConsole = (request, response, next) => {
  console.log('Middleware has been loaded');
  return next();
};

const logToConsoleV2 = (request, response, next) => {
  console.log('V2 Middleware has been loaded');
  return next();
};

app.get('/', logToConsole, (request, response) => {
  response.send('Hello, World!');
});

router.get('/', logToConsoleV2, (request, response) => {
  response.send('Hello, World, V2!');
});

app.use('/v2', router);

exports = module.exports = app;
