const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const pokemon = require('./pokemon');

app.get('/pokemon', function(req, res) {
    res.send(pokemon);
  });
// index route
 app.get('/pokemon', function(req, res){
    res.render('index.js', {
        "pokemon": pokemon 
    });
 });  

 // show route
app.get('/pokemon/:id', function(req, res) {
    res.render('show.ejs', {
      "pokemon" : pokemon[req.params.id]
   });
  });



















app.listen(port, function() {
    console.log("App is running on port: ", port);
  });
  