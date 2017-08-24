const bodyParser = require('body-parser');
const express = require('express');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const Guitar = require('./models/guitar')
const mustache = require('mustache');
const mustacheExpress = require('mustache-express');


mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/guitardb');
const app = express();



// app.use(validator());

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


app.post('/', function (req, res){
  let model = req.body.model

      console.log('this is the post');
  // console.log(model);
  // let suffix = '';
  // let model = 'Kruundaal' + suffix
  // const guitar = new Guitar({
  //   model: model,
  //   model: "Kruundaal"
  // });
  // res.redirect('/')
})

// console.log('before');
app.get('/', function(req, res) {
  // Find some documents
  console.log('in');
  Guitar.find().then(function(guitar) {
    console.log('\nfind returned:\n', guitar);
    res.render('guitar', {
      guitar: guitar
    });
  })
})





console.log('after');
app.listen(3000, function() {
  console.log('Successfully started express application!');
})

process.on('SIGINT', function() {
  console.log("\nshutting down");
  mongoose.connection.close(function() {
    console.log('Mongoose default connection disconnected on app termination');
    process.exit(0);
  });
});




// guitar.price = 3500;
// guitar.year = 1967;
// guitar.make = 'Davoli';
// guitar.location = 'Italy'
// guitar.condition.push('needs fret level');
// console.log(guitar.toObject());
// guitar.save().then(function() {
//   console.log('saved ' + model);
//   return Guitar.findOne({
//     model: "Kruundaal" + suffix
//   })
// })
// .then(function(results) {
//   console.log('\nfindOne returned\n' + results);
//   return Guitar.find({
//     price: {
//       $gt: 1000,
//       $lt: 4000
//     }
//   })
// })
// .then(function(results) {
//   console.log('\nfindOne returned\n' + results);
//     location: "Nashville"
//   }, {
//     $push: {
//       condition: "Player Grade"
//     }
//   })
// }).then(function(results) {
//   console.log('\n\nfind returned ' + results.length + ' results');
// }).catch(function(error) {
//   console.log('error ' + JSON.stringify(error));
// })
