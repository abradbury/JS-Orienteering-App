const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient

MongoClient.connect("mongodb://localhost:27017/Orienteering", function (err, db) {
  if (err) throw err

  console.log("Hi there")

  app.listen(3000, function () {
    console.log('listening on 3000')
  })

  // From: https://enable-cors.org/server_expressjs.html
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    res.header("Access-Control-Allow-Methods", "GET");
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
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



