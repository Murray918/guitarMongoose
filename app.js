// const body-parser = require('body-parser');
// const express = require('express');
// const mongodb = require('mongodb');
const mongoose = require('mongoose');
const Guitar = require('./models/guitar')
// const mustache = require('mustache');
// const mustache-express = require('mustache-express');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/guitardb');

console.log(new Guitar({make: "Kruundaal"}));

process.on('SIGINT', function() {
  console.log("\nshutting down");
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected on app termination');
    process.exit(0);
  });
});
