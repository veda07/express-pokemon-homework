const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const Pokemon = require('./pokemon');
// index route
app.get('/pokemon',(req, res) => {
  res.render('index.ejs', {
    "pokemon": Pokemon
  });
});

 // show route
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
      "pokemon" : Pokemon[req.params.id]
   });
  });
  









app.listen(port, function() {
    console.log("App is running on port: ", port);
  });
  module.exports = app;