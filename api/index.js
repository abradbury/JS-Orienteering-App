const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient

// Uses ExpressJS to create a RESTful API to expose data in MongoDB

// TODO: Remove this hard-coded path to a configuration file
MongoClient.connect("mongodb://localhost:27017/Orienteering", function (err, db) {
  if (err) throw err

  app.listen(3000, function () {
    console.log('API started on port 3000')
  })

  // Allow requests from the web server
  // From: https://enable-cors.org/server_expressjs.html
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Methods", "GET");
    next(); // Calls the next function to be executed after this one
  });

  app.get('/clubs', function (req, res) {
    console.log('Received API request for all clubs')
    db.collection('clubs').find().sort({ "name": 1}).toArray(function (err, result) {
      if (err) throw err
      res.json(result)
    })
  })

  app.get('/people', function (req, res) {
    console.log('Received API request for all people')
    db.collection('results').distinct('results.name', function (err, result) {
      if (err) throw err
      res.json(result)
    })
  })

  app.get('/events', function (req, res) {
    console.log('Received API request for all events')
    db.collection('results').distinct('results.event.name', function (err, result) {
      if (err) throw err
      res.json(result)
    })
  })

  app.get('/venues', function (req, res) {
    console.log('Received API request for all venues')
    db.collection('results').distinct('results.venue.name', function (err, result) {
      if (err) throw err
      res.json(result)
    })
  })

  app.get('/club/:id', function (req, res) {
    console.log('Received request for ' + req.params.id + ' samples')

    db.collection('results').find().limit(parseInt(req.params.num)).toArray(function (err, result) {
      if (err) throw err

      res.send(result)
    })
  })
})



