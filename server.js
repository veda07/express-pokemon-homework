const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));



const pokemon = require('./pokemon');

app.get('/pokemon', function(req, res) {
    res.send(pokemon);
  });
  




















app.listen(port, function() {
    console.log("App is running on port: ", port);
  });
  