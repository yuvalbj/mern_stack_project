const mongoose = require('mongoose');

let memberSchema = mongoose.Schema;

let Memberchema = new memberSchema({
    name: String,
    email : String,
    city: String
});

module.exports = mongoose.model('members',Memberchema);