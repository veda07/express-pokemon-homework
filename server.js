const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const methodOverride = require('method-override');

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.static('public'));
// app.use(express.static('public'))


const Pokemon = require('./pokemon');
// index route
app.get('/pokemon',(req, res) => {
  res.render('index.ejs', {
    "pokemon": Pokemon
  });
});
app.get('/pokemon', (req, res)=>{
  res.render('new.ejs')
});

app.post('/pokemon', (req, res)=>{
  Pokemon.push(req.body)
  res.redirect('/pokemon')
});


app.get('/pokemon/:id/edit', (req, res)=>{
  res.render('edit.ejs', {
      "pokemon": Pokemon[req.params.id],
      id: req.params.id
  });
});

app.get('/pokemon/:id', (req, res)=>{
  res.render('show.ejs', {
      "pokemon": Pokemon[req.params.id],
      id: req.params.id 
  });
});
 // show route
app.get('/pokemon/:id', (req, res) => {
    res.render('show.ejs', {
      "pokemon" : Pokemon[req.params.id]
   });
  });

  app.put('/pokemon/:id', (req, res)=>{
    Pokemon[req.params.id] = req.body // instead of pushing we are assigning 
    res.redirect('/pokemon')
});

app.delete('/pokemon/:id', (req, res)=>{
  Pokemon.splice(req.params.id, 1)
  res.redirect('/pokemon')
});








app.listen(port, function() {
    console.log("App is running on port: ", port);
  });
  module.exports = app;