const mongoose = require('mongoose');

const guitarSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
    unique: false
  },
  make: {
    type: String,
    unique: true
  },
  year: Number,
  price: {
    type: Number,
  },
  condition: [String],
  location: String
})

const Guitar = mongoose.model('Guitar', guitarSchema);

module.exports = Guitar
