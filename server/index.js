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

app.get('/api/test', (req,res)=>{
    const phrase = "This is your phrase";
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ test: `hello, ${phrase}`}))
})

app.post('/api/messages', (req, res) => {
    res.header('Content-Type', 'application/json')
    client.messages.create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: req.body.to,
        body: req.body.body
    })
    .then(() => {
        res.send(JSON.stringify({ success: true}))
    })
    .catch(err => {
        console.warn(err);
        res.send(JSON.stringify({ success:false }))
    })
})

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);

