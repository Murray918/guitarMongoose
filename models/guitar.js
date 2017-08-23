const mongoose = require('mongoose');

const guitarSchema = new mongoose.Schema({
    model: { type: String, required: true, unique: true },
    model: { type: String, required: true, unique: false },
    year: Number,
    condition: [{
        flaws: { type: String, required: true,},
        price: { type: Number, repuired: true },
    }],
    location: {type: String}
})

const Guitar = mongoose.model('Guitar', guitarSchema);

module.exports = Guitar
