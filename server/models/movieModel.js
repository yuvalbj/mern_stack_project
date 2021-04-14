const mongoose = require('mongoose');

let movieSchema = mongoose.Schema;

let MovieSchema = new movieSchema({
    name : String,
    genres :[String],
    premiered: String,
    image: String
});

module.exports = mongoose.model('movies',MovieSchema);