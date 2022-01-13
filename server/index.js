const express = require('express');
const bodyParser = require('body-parser')
const pino = require('express-pino-logger')();

const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
)

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);


app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);

